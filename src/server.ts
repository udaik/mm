import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";

import { IndexRoute } from "./routes/index";
import { Logging } from "./logging/Logging";
import { Logger, Configuration } from "log4js";
import { Database } from "./database/Database";
import { ConnectionOptions } from "mongoose";

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
        this.db = new Database("mongodb://localhost:27017/money-manager", this.logger);
        this.app = express();
        this.configure();
        this.routesAdd();
        this.api();
    }

    public api() {
    }

    public configure() {
        const options: ConnectionOptions = {
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 10,
            bufferMaxEntries: 0
        };

        this.db.pInit(options).then(
            () => {
                this.app.use(logger("dev"));
                this.app.use(bodyParser.json());
                this.app.use(bodyParser.urlencoded({
                    extended: true
                }));

                this.app.use(cookieParser("SECRET_GOES_HERE"));
                this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
                    err.status = 404;
                    next(err);
                });
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
        let routes: IndexRoute = new IndexRoute(this.logger, this.router);
        routes.create('');
        this.app.use(this.router);
    }
}
