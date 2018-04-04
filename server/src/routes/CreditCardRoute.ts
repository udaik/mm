import { Router, Request, Response, NextFunction } from "express";
import { CreditCardController } from "../controllers/CreditCardController";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";
import { ObjectRoute } from "./ObjectRoute";

export class CreditCardRoute extends RouterAbstract {
    private creditCardController: CreditCardController;
    public route: ObjectRoute;

    constructor(logging: Logger, router: Router) {
        super();
        this.route = ObjectRoute.CREDIT_CARD;
        this.creditCardController = new CreditCardController(logging);
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        this.creditCardController.create(req, resp, next);
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        this.creditCardController.retrieve(req, resp, next);
    }
    retrieveById = (req: Request, resp: Response, next: NextFunction): void  => {
        next();
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        this.creditCardController.update(req, resp, next);
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        this.creditCardController.delete(req, resp, next);
    }
}