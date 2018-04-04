import { Router, Request, Response, NextFunction } from "express";
import { ODController } from "../controllers/ODController";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";
import { ObjectRoute } from "./ObjectRoute";

export class ODRoute extends RouterAbstract {
    private odController: ODController;
    public route: ObjectRoute;

    constructor(logging: Logger, router: Router) {
        super();
        this.route = ObjectRoute.OD;
        this.odController = new ODController(logging);
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        this.odController.create(req, resp, next);
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        this.odController.retrieve(req, resp, next);
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        this.odController.update(req, resp, next);
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        this.odController.delete(req, resp, next);
    }

    retrieveById = (req: Request, resp: Response, next: NextFunction): void  => {
        next();
    }
}