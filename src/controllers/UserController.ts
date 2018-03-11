//import { User } from "../models/UserModel";
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

    create(req: Request, resp: Response, next: NextFunction): void {
        /*
        genSalt(10, function (err, salt) {
            hash(newUser.password, salt, function (err, hash) {
                newUser.password = hash;
                newUser.save(callback);
            });
        });
        */
        next();
    };

    findAll(req: Request, resp: Response, next: NextFunction): void {
        next();
    };

    findOne(req: Request, resp: Response, next: NextFunction): void {
        next();
    };

    update(req: Request, resp: Response, next: NextFunction): void {
        next();
    };

    delete(req: Request, resp: Response, next: NextFunction): void {
        next();
    };

    /*
    UserSchema.getUserByUsername = function (username: string, callback) {
        var query = { username: username };
        User.findOne(query, callback);
    }

    UserSchema.getUserById = function (id, callback) {
        User.findById(id, callback);
    }

    UserSchema.comparePassword = function (candidatePassword, hash, callback) {
        bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
            if (err) throw err;
            callback(null, isMatch);
        });
    }
    */
}