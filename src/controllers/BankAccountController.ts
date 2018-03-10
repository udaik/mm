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
        //console.log(req.param('key'));
        console.log(req.params);
        console.log(req.body);
        next();
        /*
        let b = new BankAccount();
        b.name = "SBI-new";
        b.save();
        */

        /*
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<Object>;
        console.log(req);
        

        if (!req.body.content) {
            resp.status(400).send({ message: "Note can not be empty" });
            deferred.reject();
        }

        // Create and Save a new Note
        let b = new BankAccount();
        b.name = "SBI-new";
        b.balance = 0.0;
        b.isActive = true;
        b.accountType = AccountType.BANK_ACCOUNT;
        b.accountNumber = "112312312";
        b.overdraftLimit = 100;
        b.customerId = "2131231";
        b.amb = 10000;
        // b.transactions.credits = 100;
        // b.transactions.debits = 100;
        b.save((err, data) => {
            if (err) {
                resp.status(500).send({ message: "Some error occurred while creating the Note." });
                deferred.reject();
            } else {
                resp.send(data);
                deferred.resolve(data);
            }
        });

        this.logger.info("asdfas");

        deferred.resolve(true);
                */
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

    findOne(req: Request, resp: Response): void {
        /*
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<Object>;
        this.logger.info("");
        deferred.resolve(true);
        */
    }

    update(req: Request, resp: Response): void {
        /*
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<Object>;
        this.logger.info("");
        deferred.resolve(true);
        */
    }

    delete(req: Request, resp: Response): void {
        /*
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<Object>;
        this.logger.info("");
        deferred.resolve(true);
        */
    }
}
