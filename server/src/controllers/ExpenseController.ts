//import { Expense } from "../models/ExpenseModel";
import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";

export class ExpenseController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Expense Account Controller Instantiated");
    }

    create(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("create : Expense Controller ");
        next();
    }

    retrieve(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("retrieve : Expense Controller ");
        next();
    }

    update(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("update : Expense Controller ");
        next();
    }

    delete(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("delete : Expense Controller ");
        next();
    }
}
