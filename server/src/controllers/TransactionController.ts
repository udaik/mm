import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
import * as HttpStatus from 'http-status-codes'

import { Transaction } from "../models/TransactionModel";
import { User } from "../models/UserModel";

export class TransactionController extends AbstractController {
    private logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Transaction Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        User.findOne({ _id: req.body.userId }).then((user) => {
            let b = new Transaction(req.body);
            return b.save();
        }).then((transaction) => {
            return User.findByIdAndUpdate(transaction.userId, { linkedAccounts: [transaction._id] }).then((user) => {
                return user.save();
            }).then((user) => {
                resp.status(HttpStatus.OK).send(transaction);
            })
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
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
