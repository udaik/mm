// import { ODModel } from "../models/ODModel";
import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";

export class ODController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("OD Controller Instantiated");
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("create : OD Controller ");
        next();
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("retrieve : OD Controller ");
        next();
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("update : OD Controller ");
        next();
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        this.logger.debug("delete : OD Controller ");
        next();
    }
}
