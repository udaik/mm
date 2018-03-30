import { Router, Request, Response, NextFunction } from "express";
import { WalletController } from "../controllers/WalletController";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";
import { ObjectRoute } from "./ObjectRoute";

export class WalletRoute extends RouterAbstract {
    private walletController: WalletController;
    public route: ObjectRoute;
    
    constructor(logging: Logger, router: Router) {
        super();
        this.route = ObjectRoute.bank;
        this.walletController = new WalletController(logging);
    }

    create(req: Request, resp: Response, next: NextFunction): void {
        this.walletController.create(req, resp, next);
    }

    retrieve(req: Request, resp: Response, next: NextFunction): void {
        this.walletController.retrieve(req, resp, next);
    }

    update(req: Request, resp: Response, next: NextFunction): void {
        this.walletController.update(req, resp, next);
    }

    delete(req: Request, resp: Response, next: NextFunction): void {
        this.walletController.delete(req, resp, next);
    }
}