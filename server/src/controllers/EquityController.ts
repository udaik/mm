import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
import * as HttpStatus from 'http-status-codes'

import { Equity } from "../models/EquityModel";
import { User } from "../models/UserModel";

export class EquityController extends AbstractController {
    private logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Equity Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        User.findOne({ _id: req.body.userId }).then((user) => {
            return Equity.create(req.body);
        }).then((equity) => {
            User.findById(equity.userId).then((user) => {
                user.linkedAccountsAdd(equity._id);
                return user.save();
            }).then((user) => {
                resp.status(HttpStatus.OK).send(equity);
            })
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        Equity.find({ userId: req.params.userId }).then((equities) => {
            resp.status(HttpStatus.OK).send(equities);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    retrieveById = (req: Request, resp: Response, next: NextFunction): void => {
        Equity.findById({ _id: req.params.instanceId }).then((equity) => {
            resp.status(HttpStatus.OK).send(equity);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        Equity.findByIdAndUpdate(req.params.instanceId, req.body, { new: true }).then((equity) => {
            equity.save().then((equity) => {
                resp.status(HttpStatus.OK).send(equity);
            }).catch((err) => {
                resp.status(HttpStatus.METHOD_FAILURE).send(err);
            });
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        Equity.deleteOne({ _id: req.params.instanceId }).then((status) => {
            resp.status(HttpStatus.OK).send(status);
        }).catch((err) => {
            resp.status(HttpStatus.METHOD_FAILURE).send(err);
        });
    }
}
