import { BankAccount } from "../models/BankAccountModel";
import { AccountType } from "../models/schemas/AccountType";
import { Logging } from "../logging/Logging";
import { Schema } from "mongoose";
import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response, Router } from "express";
import * as q from 'q';
import { Logger } from "log4js";

export class BankAccountController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("BankAccount Controller Instantiated");
    }

    create(req: Request, resp: Response): q.Promise<Schema.Types.ObjectId> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<Schema.Types.ObjectId>;

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
        return promise;
    }

    findAll(req: Request, resp: Response): q.Promise<Schema.Types.ObjectId> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<Schema.Types.ObjectId>;
        this.logger.info("");
        deferred.resolve(true);
        return promise;
    }

    findOne(req: Request, resp: Response): q.Promise<Schema.Types.ObjectId> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<Schema.Types.ObjectId>;
        this.logger.info("");
        deferred.resolve(true);
        return promise;
    }

    update(req: Request, resp: Response): q.Promise<Schema.Types.ObjectId> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<Schema.Types.ObjectId>;
        this.logger.info("");
        deferred.resolve(true);
        return promise;
    }

    delete(req: Request, resp: Response): q.Promise<Schema.Types.ObjectId> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<Schema.Types.ObjectId>;
        this.logger.info("");
        deferred.resolve(true);
        return promise;
    }
}
