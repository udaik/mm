import { Router, Request, Response, NextFunction } from "express";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";
import { AuthController } from "../controllers/AuthController"

export class AuthRoute extends RouterAbstract {
    private controller: AuthController;
    private logging: Logger;
    private router: Router;

    constructor(logging: Logger, router: Router) {
        super();
        this.logging = logging;
        this.router = router;
    }

    create = (req: Request, resp: Response, next: NextFunction): void => {
        next();
    }

    retrieve = (req: Request, resp: Response, next: NextFunction): void  => {
        next();
    }

    retrieveById = (req: Request, resp: Response, next: NextFunction): void  => {
        next();
    }

    update = (req: Request, resp: Response, next: NextFunction): void => {
        next();
    }

    delete = (req: Request, resp: Response, next: NextFunction): void => {
        next();
    }
    
    mount(mount_path: string): void {
        this.controller = new AuthController(this.logging);
        this.logging.debug("AuthRoute ", mount_path);

        this.router.post(mount_path + '/login', this.controller.loginPost);
        this.logging.debug("route add post ", mount_path + '/login');

        this.router.get(mount_path + '/login', this.controller.loginGet);
        this.logging.debug("route add get ", mount_path + '/login');

        this.router.post(mount_path + '/register', this.controller.registerPost);
        this.logging.debug("route add post ", mount_path + '/register');

        this.router.get(mount_path + '/register', this.controller.registerGet);
        this.logging.debug("route add get ", mount_path + '/register');

        this.router.get(mount_path + '/logout', this.controller.loginOut);
        this.logging.debug("route add get ", mount_path + '/logout');
    }
}