import { Router, Request, Response, NextFunction } from "express";
import { EquityController } from "../controllers/EquityController";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";
import { ObjectRoute } from "./ObjectRoute";

export class EquityRoute extends RouterAbstract {
    private equityController: EquityController;
    public route: ObjectRoute;

    constructor(logging: Logger, router: Router) {
        super();
        this.route = ObjectRoute.equity;
        this.equityController = new EquityController(logging);
    }

    create(req: Request, resp: Response, next: NextFunction): void {
        this.equityController.create(req, resp, next);
    }

    retrieve(req: Request, resp: Response, next: NextFunction): void {
        this.equityController.retrieve(req, resp, next);
    }

    update(req: Request, resp: Response, next: NextFunction): void {
        this.equityController.update(req, resp, next);
    }

    delete(req: Request, resp: Response, next: NextFunction): void {
        this.equityController.delete(req, resp, next);
    }
}