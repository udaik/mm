// import { MutualFund } from "../models/MutualFundModel";
import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";

export class MutualFundController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Mutual Account Controller Instantiated");
    }

    create(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("create : MutualFund Controller ");
        next();
    }

    retrieve(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("retrieve : MutualFund Controller ");
        next();
    }

    update(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("update : MutualFund Controller ");
        next();
    }

    delete(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("delete : MutualFund Controller ");
        next();
    }
}
