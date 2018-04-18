import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
import { User, UserModelInterface } from "../models/UserModel";
import * as bcrypt from "bcrypt";
import * as HttpStatus from 'http-status-codes'
import { } from 'passport';

export class AuthController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Auth Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        resp.status(HttpStatus.OK).send({ OK: "create implemented" });
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        resp.status(HttpStatus.OK).send({ OK: "retrieve implemented" });
    }

    findOne(req: Request, resp: Response, next: NextFunction): void {
        resp.status(HttpStatus.OK).send({ OK: "findOne implemented" });
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        resp.status(HttpStatus.OK).send({ OK: "update implemented" });
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        resp.status(HttpStatus.OK).send({ OK: "delete implemented" });
    }

    loginGet(req: Request, resp: Response, next: NextFunction): void {
        resp.status(HttpStatus.OK).send({ OK: "loginGet implemented" });
    }

    registerGet(req: Request, resp: Response, next: NextFunction): void {
        resp.status(HttpStatus.OK).send({ OK: "registerGet implemented" });
    }

    registerPost(req: Request, resp: Response, next: NextFunction): void {
        req.checkBody('mmUserName', 'Email is required').notEmpty();
        req.checkBody('mmUserName', 'Email is not valid').isEmail();
        req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
        var errors = req.validationErrors();

        if (errors) {
            resp.status(HttpStatus.BAD_REQUEST).send(errors);
        } else {
            let email: string = req.body.mmUserName;
            let username: string = req.body.mmUserName;
            let password: string = req.body.password;

            bcrypt.genSalt(10).then((salt) => {
                return bcrypt.hash(password, salt)
            }).then((hash) => {
                let user: UserModelInterface = new User({ mmUserName: username, password: hash, email: email });
                return user.save();
            }).then((args) => {
                resp.status(HttpStatus.OK).send(args);
            }).catch((err) => {
                resp.status(HttpStatus.METHOD_FAILURE).send({
                    error: HttpStatus.getStatusText(HttpStatus.METHOD_FAILURE),
                    details: err
                })
            });
        }
    }

    loginPost(req: Request, resp: Response, next: NextFunction): void {
        console.log('loginPost');
        var u = { auth_token: "abcd", };
        resp.status(HttpStatus.OK).send(u);
    }

    loginOut(req: Request, resp: Response, next: NextFunction): void {
        req.logout();
        resp.redirect('/login');
    }

    status(req: Request, resp: Response, next: NextFunction): void {
        var user = { email: 'abc@abc.com', 'status': 'success' };
        resp.status(HttpStatus.OK).send(user);
    }
}