import { Router, Request, Response, NextFunction } from "express";
import { BankController } from "../controllers/BankController";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";
import { ObjectRoute } from "./ObjectRoute";

export class BankRoute extends RouterAbstract {
    private bankController: BankController;
    public route: ObjectRoute;

    constructor(logging: Logger, router: Router) {
        super();
        this.route = ObjectRoute.BANK;
        this.bankController = new BankController(logging);
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        this.bankController.create(req, resp, next);
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        this.bankController.retrieve(req, resp, next);
    }

    retrieveById = (req: Request, resp: Response, next: NextFunction): void => {
        this.bankController.retrieveById(req, resp, next);
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        this.bankController.update(req, resp, next);
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        this.bankController.delete(req, resp, next);
    }
}