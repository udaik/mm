import { BankAccount } from "../models/BankAccountModel";
import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";

export class ExpenseAccountController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("ExpenseAccount Controller Instantiated");
    }

    create(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    retrieve(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    update(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    delete(req: Request, resp: Response, next: NextFunction): void {
        next();
    }
}
