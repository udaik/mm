import { NextFunction, Request, Response, Router } from "express";
import { BankAccountRoute } from "./BankAccountRoute";
import { BaseRoute } from "./route";
import { Logger } from "log4js";

export class IndexRoute extends BaseRoute {
    logging: Logger;
    router: Router;

    private ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/users/login');
        }
    }

    public create(path: string): void {
        this.logging.debug("[IndexRoute::create] Creating index route.");

        this.router.get('/', this.ensureAuthenticated, (req: Request, res: Response, next: NextFunction) => {
            res.render('index');
        });

        var br: BankAccountRoute = new BankAccountRoute(this.logging, this.router);
        console.log("creating bank account route");
        br.mount(path);
    }

    constructor(logging: Logger, router: Router) {
        super();
        this.logging = logging;
        this.router = router;
    }

    public index(req: Request, res: Response, next: NextFunction) {
        res.statusCode = 404;
        res.send({ code: "None" });
    }
}