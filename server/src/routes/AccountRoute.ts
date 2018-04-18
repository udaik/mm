import { Router } from "express";
import { Logger } from 'log4js';
import { Request, Response, NextFunction } from "express-serve-static-core";
import { ensureLoggedIn } from 'connect-ensure-login';
import { Dictionary } from "typescript-collections";
import * as HttpStatus from 'http-status-codes';

import { RouterAbstract } from "./RouterAbstract";
import { BankRoute } from "./BankRoute";
import { WalletRoute } from "./WalletRoute";
import { ODRoute } from "./ODRoute";
import { CreditCardRoute } from "./CreditCardRoute";
import { ExpenseRoute } from "./ExpenseRoute";
import { MutualFundRoute } from "./MutualFundRoute";
import { ObjectRoute } from "./ObjectRoute";
import { TransactionRoute } from "./TransactionRoute";

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
        let transactionRoute = new TransactionRoute(logging, router);

        this.routes.setValue(bankAccountRoute.route, bankAccountRoute);
        this.routes.setValue(walletRoute.route, walletRoute);
        this.routes.setValue(odRoute.route, odRoute);
        this.routes.setValue(creditCardRoute.route, creditCardRoute);
        this.routes.setValue(expenseRoute.route, expenseRoute);
        this.routes.setValue(mutualFundRoute.route, mutualFundRoute);
        this.routes.setValue(transactionRoute.route, transactionRoute);

        this.logging.info("Account Route initialized");
    }

    routeToEnum = (routeType: string): ObjectRoute => {
        let objRoute = ObjectRoute.UNHANDLED;
        switch (routeType) {

            case "BANK": {
                objRoute = ObjectRoute.BANK;
                break;
            }

            case "CREDIT_CARD": {
                objRoute = ObjectRoute.CREDIT_CARD;
                break;
            }

            case "EQUITY": {
                objRoute = ObjectRoute.EQUITY;
                break;
            }

            case "EXPENSE": {
                objRoute = ObjectRoute.EXPENSE;
                break;
            }

            case "OD": {
                objRoute = ObjectRoute.OD;
                break;
            }

            case "USER": {
                objRoute = ObjectRoute.USER;
                break;
            }

            case "WALLET": {
                objRoute = ObjectRoute.WALLET;
                break;
            }

            case "MUTUAL_FUND": {
                objRoute = ObjectRoute.MUTUAL_FUND;
                break;
            }

            case "TRANSACTION": {
                objRoute = ObjectRoute.TRANSACTION;
                break;
            }
        }
        return objRoute;
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {

        new Promise((resolve, reject) => {
            const route = this.routes.getValue(this.routeToEnum(req.params.type));
            if (route === undefined)
                reject(route);
            else
                resolve(route);
        }).then((route: RouterAbstract) => {
            route.create(req, resp, next);
        }).catch((err) => {
            resp.status(HttpStatus.BAD_REQUEST).send(err);
        });
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void => {
        new Promise((resolve, reject) => {
            const route = this.routes.getValue(this.routeToEnum(req.params.type));
            if (route === undefined)
                reject(route);
            else
                resolve(route);
        }).then((route: RouterAbstract) => {
            route.retrieve(req, resp, next);
        }).catch((err) => {
            resp.status(HttpStatus.BAD_REQUEST).send(err);
        });
    }

    retrieveById = (req: Request, resp: Response, next: NextFunction): void => {
        new Promise((resolve, reject) => {
            const route = this.routes.getValue(this.routeToEnum(req.params.type));
            if (route === undefined)
                reject(route);
            else
                resolve(route);
        }).then((route: RouterAbstract) => {
            route.retrieveById(req, resp, next);
        }).catch((err) => {
            resp.status(HttpStatus.BAD_REQUEST).send(err);
        });
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        new Promise((resolve, reject) => {
            const route = this.routes.getValue(this.routeToEnum(req.params.type));
            if (route === undefined)
                reject(route);
            else
                resolve(route);
        }).then((route: RouterAbstract) => {
            route.update(req, resp, next);
        }).catch((err) => {
            resp.status(HttpStatus.BAD_REQUEST).send(err);
        });
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        new Promise((resolve, reject) => {
            const route = this.routes.getValue(this.routeToEnum(req.params.type));
            if (route === undefined)
                reject(route);
            else
                resolve(route);
        }).then((route: RouterAbstract) => {
            route.delete(req, resp, next);
        }).catch((err) => {
            resp.status(HttpStatus.BAD_REQUEST).send(err);
        });
    }

    mount = (mountPath: string): void => {
        const byId = mountPath + '/:instanceId';

        this.logging.debug("express mount ", mountPath);

        this.router.put(mountPath, ensureLoggedIn(), this.create);
        this.logging.debug("route create : put ", mountPath);

        this.router.get(mountPath, ensureLoggedIn(), this.retrieve);
        this.logging.debug("route retrieve : get ", mountPath);

        this.router.get(byId, ensureLoggedIn(), this.retrieveById);
        this.logging.debug("route retrieveById : get ", byId);

        this.router.post(byId, ensureLoggedIn(), this.update);
        this.logging.debug("route update : post ", byId);

        this.router.delete(byId, ensureLoggedIn(), this.delete);
        this.logging.debug("route delete : delete ", byId);
    }
}