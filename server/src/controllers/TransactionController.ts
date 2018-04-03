import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";

export class TransactionController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Transaction Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("create : Transaction Controller ");
        next();
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("retrieve : Transaction Controller ");
        next();
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("update : Transaction Controller ");
        next();
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("delete : Transaction Controller ");
        next();
    }
}
