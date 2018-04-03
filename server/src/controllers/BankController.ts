import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
import * as HttpStatus from 'http-status-codes'
import { Bank } from "../models/BankModel";
import { User } from "../models/UserModel";

export class BankController extends AbstractController {
    private logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Bank Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        User.findOne({ _id: req.body.userId }).then((user) => {
            let b = new Bank(req.body);
            return b.save();
        }).then((bank) => {
            User.findByIdAndUpdate(bank.userId, { linkedAccounts: [bank._id] }).then((user) => {
                return user.save();
            }).then((user) => {
                resp.status(HttpStatus.OK).send(bank);
            })
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("Bank Controller retrieve");
        resp.statusCode = 200;
        resp.send({ OK: "retrieve" });
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("Bank Controller uodate");
        resp.statusCode = 200;
        resp.send({ OK: "update" });
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("Bank Controller delete");
        resp.statusCode = 200;
        resp.send({ OK: "delete" });
    }
}
