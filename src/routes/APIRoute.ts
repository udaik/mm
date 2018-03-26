import { NextFunction, Request, Response, Router } from "express";
import { BankAccountRoute } from "./BankAccountRoute";
import { BaseRoute } from "./route";
import { Logger } from "log4js";
import { AuthRoute } from "./AuthRoute";
import { UserRoute } from "./UserRoute";

export class APIRoute extends BaseRoute {
    logging: Logger;
    router: Router;

    /*
    private ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/users/login');
        }
    }
    */

    public create(path: string): void {
        this.logging.debug("[APIRoute::create] Creating index route.");

        /*
        this.router.get('/', this.ensureAuthenticated, (req: Request, res: Response, next: NextFunction) => {
            res.render('index');
        });
        */
        this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
            console.log("here iam");
            res.statusCode = 200;
            res.send({ error: 'OK' })
        });

        let API_VERSION = "/api/v0.1"

        let users_path: string = API_VERSION + '/auth';
        let auth: AuthRoute = new AuthRoute(this.logging, this.router);
        this.logging.debug("auth route path ", users_path)
        auth.mount(users_path);

        let user_api: string = API_VERSION + '/users';
        let user: UserRoute = new UserRoute(this.logging, this.router);
        this.logging.debug("user route path ", user_api)
        user.mount(user_api);

        let bankAccount_path: string = API_VERSION + '/user/:id/accounts';
        let br: BankAccountRoute = new BankAccountRoute(this.logging, this.router);
        this.logging.debug("bank route path ", bankAccount_path)
        br.mount(bankAccount_path);
    }

    constructor(logging: Logger, router: Router) {
        super();
        this.logging = logging;
        this.router = router;
        this.logging.debug("initialized Index route");
    }

    public index(req: Request, res: Response, next: NextFunction) {
        res.statusCode = 404;
        res.send({ code: "None" });
    }
}