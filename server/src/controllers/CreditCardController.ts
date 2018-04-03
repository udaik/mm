// import { CreditCard } from "../models/CreditCardModel";
import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";

export class CreditCardController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("CreditCard Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("create : CreditCard Controller ");
        next();
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("retrieve : CreditCard Controller ");
        next();
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("update : CreditCard Controller ");
        next();
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("delete : CreditCard Controller ");
        next();
    }
}
