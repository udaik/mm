import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
import * as HttpStatus from 'http-status-codes'

import { MutualFund } from "../models/MutualFundModel";
import { User } from "../models/UserModel";

export class MutualFundController extends AbstractController {
    private logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("MutualFund Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        User.findOne({ _id: req.body.userId }).then((user) => {
            return MutualFund.create(req.body);
        }).then((mutualFund) => {
            User.findById(mutualFund.userId).then((user) => {
                user.linkedAccountsAdd(mutualFund._id);
                return user.save();
            }).then((user) => {
                resp.status(HttpStatus.OK).send(mutualFund);
            })
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        MutualFund.find({ userId: req.params.userId }).then((mutualFunds) => {
            resp.status(HttpStatus.OK).send(mutualFunds);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    retrieveById = (req: Request, resp: Response, next: NextFunction): void => {
        MutualFund.findById({ _id: req.params.instanceId }).then((mutualFund) => {
            resp.status(HttpStatus.OK).send(mutualFund);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        MutualFund.findByIdAndUpdate(req.params.instanceId, req.body, { new: true }).then((mutualFund) => {
            mutualFund.save().then((mutualFund) => {
                resp.status(HttpStatus.OK).send(mutualFund);
            }).catch((err) => {
                resp.status(HttpStatus.METHOD_FAILURE).send(err);
            });
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        MutualFund.deleteOne({ _id: req.params.instanceId }).then((status) => {
            resp.status(HttpStatus.OK).send(status);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }
}
