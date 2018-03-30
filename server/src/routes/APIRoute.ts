import { NextFunction, Request, Response, Router } from "express";
import { AccountRoute } from "./AccountRoute";
import { Logger } from "log4js";
import { AuthRoute } from "./AuthRoute";
import { UserRoute } from "./UserRoute";

export class APIRoute {
    logging: Logger;
    router: Router;

    public create(path: string): void {
        this.logging.debug("[APIRoute::create] Creating index route.");

        let API_VERSION = "/api/v0.1"

        let users_path: string = API_VERSION + '/auth';
        let auth: AuthRoute = new AuthRoute(this.logging, this.router);
        this.logging.debug("auth route path ", users_path)
        auth.mount(users_path);

        let user_api: string = API_VERSION + '/users';
        let user: UserRoute = new UserRoute(this.logging, this.router);
        this.logging.debug("user route path ", user_api)
        user.mount(user_api);

        let accountRestAPIPath: string = API_VERSION + '/user/:id/account';
        let accountRestAPIPathObj: AccountRoute = new AccountRoute(this.logging, this.router);
        this.logging.debug("bank route path ", accountRestAPIPath)
        accountRestAPIPathObj.mount(accountRestAPIPath);
    }

    constructor(logging: Logger, router: Router) {
        this.logging = logging;
        this.router = router;
        this.logging.debug("initialized Index route");
    }

    public index(req: Request, res: Response, next: NextFunction) {
        res.statusCode = 402;
        res.send({ code: "None" });
    }
}