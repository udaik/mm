import { Router } from "express";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";
import { Request, Response, NextFunction } from "express-serve-static-core";
import { BankRoute } from "../routes/BankRoute";
import { WalletRoute } from "./WalletRoute";
import { ODRoute } from "../routes/ODRoute";
import { CreditCardRoute } from "../routes/CreditCardRoute";
import { ExpenseRoute } from "../routes/ExpenseRoute";
import { MutualFundRoute } from "../routes/MutualFundRoute";
import { Dictionary } from "typescript-collections";

export class AccountRoute {
    private routes: Dictionary<string, RouterAbstract>;
    private logging: Logger;
    private router: Router;

    constructor(logging: Logger, router: Router) {
        this.logging = logging;
        this.router = router;

        this.routes = new Dictionary<string, RouterAbstract>();
        let bankAccountRoute = new BankRoute(logging, router);
        this.routes.setValue('BANK_ACCOUNT', bankAccountRoute);
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        let routerObject: RouterAbstract = this.routes.getValue(req.body.type);
        routerObject.create(req, resp, next);
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        let routerObject: RouterAbstract = this.routes.getValue(req.body.type);
        routerObject.retrieve(req, resp, next);
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        let routerObject: RouterAbstract = this.routes.getValue(req.body.type);
        routerObject.update(req, resp, next);
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        let routerObject: RouterAbstract = this.routes.getValue(req.body.type);
        routerObject.delete(req, resp, next);
    }

    mount = (mount_path: string): void => {
        this.logging.debug("AccountRoute ", mount_path);

        this.router.put(mount_path, this.create);
        this.logging.debug("route create : put ", mount_path);

        this.router.get(mount_path, this.retrieve);
        this.logging.debug("route retrieve : get ", mount_path);

        this.router.post(mount_path, this.update);
        this.logging.debug("route update : post ", mount_path);

        this.router.delete(mount_path, this.delete);
        this.logging.debug("route delete : delete ", mount_path);
    }
}