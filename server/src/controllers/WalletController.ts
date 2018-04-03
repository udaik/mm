// import { Wallet } from "../models/WalletModel";
import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";

export class WalletController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Wallet Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("create : Wallet Controller ");
        next();
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("retrieve : Wallet Controller ");
        next();
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("update : Wallet Controller ");
        next();
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("delete : Wallet Controller ");
        next();
    }
}
