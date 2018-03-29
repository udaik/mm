import { Router, Request, Response, NextFunction } from "express";
import { WalletController } from "../controllers/BankController";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";

export class BankRoute extends RouterAbstract {
    private bankAccountController: BankAccountController;
    // private logging: Logger;

    constructor(logging: Logger, router: Router) {
        super();
        // this.logging = logging;
        this.bankAccountController = new BankAccountController(logging);
    }

    create(req: Request, resp: Response, next: NextFunction): void {
        this.bankAccountController.create(req, resp, next);
        next();
    }

    retrieve(req: Request, resp: Response, next: NextFunction): void {
        this.bankAccountController.retrieve(req, resp, next);
        next();
    }

    update(req: Request, resp: Response, next: NextFunction): void {
        this.bankAccountController.update(req, resp, next);
        next();
    }

    delete(req: Request, resp: Response, next: NextFunction): void {
        this.bankAccountController.delete(req, resp, next);
        next();
    }
}