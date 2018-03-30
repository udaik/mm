import { Router } from "express";
import { Logger } from 'log4js';
import { Request, Response, NextFunction } from "express-serve-static-core";
import { Dictionary } from "typescript-collections";

import { RouterAbstract } from "./RouterAbstract";
import { BankRoute } from "./BankRoute";
import { WalletRoute } from "./WalletRoute";
import { ODRoute } from "./ODRoute";
import { CreditCardRoute } from "./CreditCardRoute";
import { ExpenseRoute } from "./ExpenseRoute";
import { MutualFundRoute } from "./MutualFundRoute";
import { ObjectRoute } from "./ObjectRoute";

export class AccountRoute {
    private routes: Dictionary<ObjectRoute, RouterAbstract>;
    private logging: Logger;
    private router: Router;

    constructor(logging: Logger, router: Router) {
        this.logging = logging;
        this.router = router;

        this.routes = new Dictionary<ObjectRoute, RouterAbstract>();
        let bankAccountRoute = new BankRoute(logging, router);
        let walletRoute = new WalletRoute(logging, router);
        let odRoute = new ODRoute(logging, router);
        let creditCardRoute = new CreditCardRoute(logging, router);
        let expenseRoute = new ExpenseRoute(logging, router);
        let mutualFundRoute = new MutualFundRoute(logging, router);

        this.routes.setValue(bankAccountRoute.route, bankAccountRoute);
        this.routes.setValue(walletRoute.route, walletRoute);
        this.routes.setValue(odRoute.route, odRoute);
        this.routes.setValue(creditCardRoute.route, creditCardRoute);
        this.routes.setValue(expenseRoute.route, expenseRoute);
        this.routes.setValue(mutualFundRoute.route, mutualFundRoute);
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        this.routes.getValue(req.body.type).create(req, resp, next);
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        this.routes.getValue(req.body.type).retrieve(req, resp, next);
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        this.routes.getValue(req.body.type).update(req, resp, next);
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        this.routes.getValue(req.body.type).delete(req, resp, next);
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