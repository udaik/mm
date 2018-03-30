import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
import { User, UserModelInterface } from "../models/UserModel";
import * as bcrypt from "bcrypt";

export class AuthController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Auth Controller Instantiated");
    }

    create(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    retrieve(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    findOne(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    update(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    delete(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    loginGet(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    registerGet(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    registerPost(req: Request, resp: Response, next: NextFunction): void {
        console.log("register post")
        req.checkBody('username', 'Email is required').notEmpty();
        req.checkBody('username', 'Email is not valid').isEmail();
        req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
        var errors = req.validationErrors();

        if (errors) {
            resp.statusCode = 400
            resp.send(errors);
        } else {
            let email: string = req.body.username;
            let username: string = req.body.username;
            let password: string = req.body.password;

            bcrypt.genSalt(10).then((salt) => {
                return bcrypt.hash(password, salt)
            }).then((hash) => {
                let user : UserModelInterface = new User({ userName: username, password: hash, email: email });
                return user.save();
            }).then((args) => {
                resp.statusCode = 200
                resp.send(args);
            }, (args) => {
                resp.statusCode = 500;
                resp.send(args);
            });
        }
    }

    loginPost(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    loginOut(req: Request, resp: Response, next: NextFunction): void {
        next()
    }
}