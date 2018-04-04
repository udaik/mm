import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
import * as HttpStatus from 'http-status-codes'

import { Wallet } from "../models/WalletModel";
import { User } from "../models/UserModel";

export class WalletController extends AbstractController {
    private logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Wallet Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        User.findOne({ _id: req.body.userId }).then((user) => {
            return Wallet.create(req.body);
        }).then((wallet) => {
            User.findById(wallet.userId).then((user) => {
                user.linkedAccountsAdd(wallet._id);
                return user.save();
            }).then((user) => {
                resp.status(HttpStatus.OK).send(wallet);
            })
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        Wallet.find({ userId: req.params.userId }).then((wallets) => {
            resp.status(HttpStatus.OK).send(wallets);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    retrieveById = (req: Request, resp: Response, next: NextFunction): void => {
        Wallet.findById({ _id: req.params.instanceId }).then((wallet) => {
            resp.status(HttpStatus.OK).send(wallet);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        Wallet.findByIdAndUpdate(req.params.instanceId, req.body, { new: true }).then((wallet) => {
            wallet.save().then((wallet) => {
                resp.status(HttpStatus.OK).send(wallet);
            }).catch((err) => {
                resp.status(HttpStatus.METHOD_FAILURE).send(err);
            });
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        Wallet.deleteOne({ _id: req.params.instanceId }).then((status) => {
            resp.status(HttpStatus.OK).send(status);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }
}
