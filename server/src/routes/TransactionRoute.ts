import { Router, Request, Response, NextFunction } from "express";
import { TransactionController } from "../controllers/TransactionController";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";
import { ObjectRoute } from "./ObjectRoute";

export class TransactionRoute extends RouterAbstract {
    private transactionController: TransactionController;
    public route: ObjectRoute;

    constructor(logging: Logger, router: Router) {
        super();
        this.route = ObjectRoute.TRANSACTION;
        this.transactionController = new TransactionController(logging);
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        this.transactionController.create(req, resp, next);
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void  =>{
        console.log("retrieve called");
        this.transactionController.retrieve(req, resp, next);
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        console.log("update called");
        this.transactionController.update(req, resp, next);
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        console.log("delete called");
        this.transactionController.delete(req, resp, next);
    }
}