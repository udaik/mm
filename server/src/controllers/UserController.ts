import { User } from "../models/UserModel";
import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";

export class UserController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("User Controller Instantiated");
    };  

    create = (req: Request, resp: Response, next: NextFunction): void => {
        /* user needs be created from registration */
        next();
    };

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        User.find().then((users) => {
            users.forEach((u) => {
                console.log(u)
            });
            resp.statusCode = 200;
            resp.send(users)
        }).catch((err) => {
            resp.statusCode = 400;
            resp.send(err)
        })
    };

    findOne(req: Request, resp: Response, next: NextFunction): void {
        var query = { _id: req.params.id }
        User.find(query).then((user) => {
            resp.statusCode = 200
            resp.send(user);
        }).catch((err) => {
            resp.statusCode = 400
            resp.send(err)
        });
    };

    findOneByName(req: Request, resp: Response, next: NextFunction): void {
        var query = { userName: req.params.name }
        User.find(query).then((user) => {
            resp.statusCode = 200
            resp.send(user);
        }).catch((err) => {
            resp.statusCode = 400
            resp.send(err)
        });
    };

    update = (req: Request, resp: Response, next: NextFunction): void => {
        next();
    };

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        next();
    };
}
