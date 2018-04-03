// import { Equity } from "../models/EquityModel";
import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";

export class EquityController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Equity Account Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("create : Equity Controller ");
        next();
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("retrieve : Equity Controller ");
        next();
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("update : Equity Controller ");
        next();
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("delete : Equity Controller ");
        next();
    }
}
