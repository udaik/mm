import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as session from 'express-session';
import * as passport from "passport";
import * as expressValidator from "express-validator";
import * as cors from "cors";
import * as LocalStrategy from "passport-local";

import { APIRoute } from "./routes/APIRoute";
import { Logging } from "./logging/Logging";
import { Logger, Configuration } from "log4js";
import { Database } from "./database/Database";
import { ConnectionOptions } from "mongoose";

import { User, UserModelInterface } from './models/UserModel';

const MONGO_URL = "mongodb://127.0.0.1:27017/money-manager";

passport.serializeUser(function (user: UserModelInterface, cb) {
    console.log('user', user);
    console.log('user id', user.id)
    cb(null, user);
});

passport.deserializeUser(function (id, cb) {
    console.log('id', id);
    User.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

export class Server {
    private app: express.Application;
    private logger: Logger;
    private logConfig: Configuration;
    private router: express.Router;
    private db: Database;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        const appName: string = 'mm';

        this.logConfig = {
            appenders: { 'mm': { type: 'file', filename: appName + ".log" } },
            categories: { default: { appenders: [appName], level: 'debug' } }
        };

        var logging: Logging = new Logging(appName, 'debug', this.logConfig);
        this.logger = logging.init();
        this.logger.debug("Instantiating the Server");
        this.router = express.Router();
        this.db = new Database(MONGO_URL, this.logger);
        this.app = express();
        this.configure().then(() => {
            this.logger.info("Configured express app.");
            this.routesAdd();
        }).catch((err) => {
            this.logger.fatal("failed to configure the app", err);
        });
    }

    public configure() {
        const options: ConnectionOptions = {
            connectTimeoutMS: 100,
            socketTimeoutMS: 0,
            reconnectInterval: 500,
            poolSize: 10,
            bufferMaxEntries: 0
        };

        return this.db.pInit(options).then(
            () => {
                this.app.use(logger("dev"));
                this.app.use(bodyParser.json());
                this.app.use(bodyParser.urlencoded({
                    extended: true
                }));

                this.app.use(session({
                    secret: 'secret',
                    saveUninitialized: true,
                    resave: true
                }));

                const options: cors.CorsOptions = {
                    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type",
                        "Accept", "X-Access-Token"],
                    credentials: true,
                    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
                    origin: "http://localhost:4200",
                    preflightContinue: false
                };
                this.router.use(cors(options));
                this.router.options("*", cors(options));

                passport.use(new LocalStrategy.Strategy((username: string, password: string, done: Function) => {
                    console.log(username, password);
                    User.findOne().then((user: UserModelInterface) => {
                        return user.verifyPassword(password);
                    }).then((user: UserModelInterface) => {
                        console.log('after verifying password', user);
                        done(null, user._id);
                    }).catch((error) => {
                        done(error);
                        console.log('error', error);
                    })
                }));

                this.app.use(passport.initialize());
                this.app.use(passport.session());

                this.app.use(expressValidator({
                    errorFormatter: function (param, msg, value) {
                        var namespace = param.split('.')
                            , root = namespace.shift()
                            , formParam = root;

                        while (namespace.length) {
                            formParam += '[' + namespace.shift() + ']';
                        }
                        return {
                            param: formParam,
                            msg: msg,
                            value: value
                        };
                    }
                }));

                this.app.use(cookieParser());
                this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {

                    err.status = 402;
                    next(err);
                });
                this.app.use(this.router);

                //error handling
                this.app.use(errorHandler());
                this.logger.info("Configuring app complete");
            },
            (err) => {
                console.log("failed to configure app");
            }
        );
    }

    private routesAdd() {
        let routes: APIRoute = new APIRoute(this.logger, this.router);
        routes.create('');
    }
}
