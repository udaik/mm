import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
import * as HttpStatus from 'http-status-codes'

import { CreditCard } from "../models/CreditCardModel";
import { User } from "../models/UserModel";

export class CreditCardController extends AbstractController {
    private logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("CreditCard Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        User.findOne({ _id: req.body.userId }).then((user) => {
            return CreditCard.create(req.body);
        }).then((creditCard) => {
            User.findById(creditCard.userId).then((user) => {
                user.linkedAccountsAdd(creditCard._id);
                return user.save();
            }).then((user) => {
                resp.status(HttpStatus.OK).send(creditCard);
            })
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        CreditCard.find({ userId: req.params.userId }).then((creditCards) => {
            resp.status(HttpStatus.OK).send(creditCards);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    retrieveById = (req: Request, resp: Response, next: NextFunction): void => {
        CreditCard.findById({ _id: req.params.instanceId }).then((creditCard) => {
            resp.status(HttpStatus.OK).send(creditCard);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        CreditCard.findByIdAndUpdate(req.params.instanceId, req.body, { new: true }).then((creditCard) => {
            creditCard.save().then((creditCard) => {
                resp.status(HttpStatus.OK).send(creditCard);
            }).catch((err) => {
                resp.status(HttpStatus.METHOD_FAILURE).send(err);
            });
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        CreditCard.deleteOne({ _id: req.params.instanceId }).then((status) => {
            resp.status(HttpStatus.OK).send(status);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }
}
