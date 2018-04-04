import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
import * as HttpStatus from 'http-status-codes'

import { Expense } from "../models/ExpenseModel";
import { User } from "../models/UserModel";

export class ExpenseController extends AbstractController {
    private logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Expense Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        User.findOne({ _id: req.body.userId }).then((user) => {
            return Expense.create(req.body);
        }).then((expense) => {
            User.findById(expense.userId).then((user) => {
                user.linkedAccountsAdd(expense._id);
                return user.save();
            }).then((user) => {
                resp.status(HttpStatus.OK).send(expense);
            })
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        Expense.find({ userId: req.params.userId }).then((expenses) => {
            resp.status(HttpStatus.OK).send(expenses);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    retrieveById = (req: Request, resp: Response, next: NextFunction): void => {
        Expense.findById({ _id: req.params.instanceId }).then((expense) => {
            resp.status(HttpStatus.OK).send(expense);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        Expense.findByIdAndUpdate(req.params.instanceId, req.body, { new: true }).then((expense) => {
            expense.save().then((expense) => {
                resp.status(HttpStatus.OK).send(expense);
            }).catch((err) => {
                resp.status(HttpStatus.METHOD_FAILURE).send(err);
            });
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        Expense.deleteOne({ _id: req.params.instanceId }).then((status) => {
            resp.status(HttpStatus.OK).send(status);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }
}
