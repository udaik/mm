import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
import * as HttpStatus from 'http-status-codes'

// import { Transaction } from "../models/TransactionModel";
import { User } from "../models/UserModel";
import { Account } from "../models/AccountModel";
import { Transaction } from "../models/TransactionModel";
import { TransactionInterface } from "../models/interfaces/TransactionInterface";

export class TransactionController extends AbstractController {
    private logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Transaction Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        Promise.all([User.findOne({ _id: req.body.userId }),
        Account.findOne({ _id: req.body.creditAccount }),
        Account.findOne({ _id: req.body.debitAccount })])
            .then(([user, creditAccount, debitAccount]) => {
                // TODO check all the userids should be the same 
                return Promise.all([creditAccount.deposit(req.body.amount),
                debitAccount.withdraw(req.body.amount)]).then(() => {
                    return Promise.all([creditAccount.save(), debitAccount.save()])
                });
            }).then(([creditAccount, debitAccount]) => {
                var transaction: TransactionInterface = req.body;
                transaction.creditBalance = creditAccount.balance;
                transaction.debitBalance = debitAccount.balance;
                this.logger.info("Creating transaction.", JSON.stringify(transaction));
                return Transaction.create(transaction);
            }).then((transaction) => {
                resp.status(HttpStatus.OK).send(transaction);
            }).catch((error) => {
                resp.status(HttpStatus.METHOD_FAILURE).send(error);
            });
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        resp.status(HttpStatus.OK).send({ OK: "retrieve implemented" });
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        resp.status(HttpStatus.OK).send({ OK: "update implemented" });
    }

    retrieveById = (req: Request, resp: Response, next: NextFunction): void => {
        resp.status(HttpStatus.OK).send({ OK: "retrieve implemented" });
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        resp.status(HttpStatus.OK).send({ OK: "delete implemented" });
    }
}
