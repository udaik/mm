import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
import { Bank } from "../models/BankModel";

export class BankController extends AbstractController {
    private logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Bank Account Controller Instantiated");
    }

    create(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("Bank Controller create");
        let b = new Bank();
        b.save()
        next();
    }

    retrieve(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("Bank Controller retrieve");
        next();
    }

    update(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("Bank Controller uodate");
        next();
    }

    delete(req: Request, resp: Response, next: NextFunction): void {
        this.logger.debug("Bank Controller delete");
        next();
    }
}
