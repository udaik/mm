import { BankAccount } from "../models/BankAccountModel";
// import { AccountType } from "../models/schemas/AccountType";
import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";

export class BankAccountController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        logging.debug("debug ssssssssssssssss")
        this.logger.debug("BankAccount Controller Instantiated");
    }

    create(req: Request, resp: Response, next: NextFunction): void {
        console.log(req.params);
        console.log(req.params);
        console.log(req.body);
        next();
    }

    findAll(req: Request, resp: Response, next: NextFunction): void {
        const promise = new Promise((resolve, reject) => {
            BankAccount.find(function (err, docs) {
                if (err)
                    reject(err);
                else
                    resolve(docs);
            });
        });

        function success(documents: any): void {
            resp.statusCode = 200;
            resp.send(documents);
        }

        function failure(err: any): void {
            resp.statusCode = 300;
            resp.send(err);
        }

        promise.then(success, failure);
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
}
