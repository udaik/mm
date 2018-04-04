import { Router, Request, Response, NextFunction } from "express";
import { MutualFundController } from "../controllers/MutualFundController";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";
import { ObjectRoute } from "./ObjectRoute";

export class MutualFundRoute extends RouterAbstract {
    private mutualFundController: MutualFundController;
    public route: ObjectRoute;

    constructor(logging: Logger, router: Router) {
        super();
        this.route = ObjectRoute.MUTUAL_FUND;
        this.mutualFundController = new MutualFundController(logging);
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        this.mutualFundController.create(req, resp, next);
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        this.mutualFundController.retrieve(req, resp, next);
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        this.mutualFundController.update(req, resp, next);
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        this.mutualFundController.delete(req, resp, next);
    }

    retrieveById = (req: Request, resp: Response, next: NextFunction): void  => {
        next();
    }
}