import { Router, Request, Response, NextFunction } from "express";
import { ExpenseController } from "../controllers/ExpenseController";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";
import { ObjectRoute } from "./ObjectRoute";

export class ExpenseRoute extends RouterAbstract {
    private expenseController: ExpenseController;
    public route: ObjectRoute;

    constructor(logging: Logger, router: Router) {
        super();
        this.route = ObjectRoute.expense; 
        this.expenseController = new ExpenseController(logging);
    }

    create(req: Request, resp: Response, next: NextFunction): void {
        this.expenseController.create(req, resp, next);
    }

    retrieve(req: Request, resp: Response, next: NextFunction): void {
        this.expenseController.retrieve(req, resp, next);
    }

    update(req: Request, resp: Response, next: NextFunction): void {
        this.expenseController.update(req, resp, next);
    }

    delete(req: Request, resp: Response, next: NextFunction): void {
        this.expenseController.delete(req, resp, next);
    }
}