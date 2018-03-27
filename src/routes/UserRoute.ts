import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";

export class UserRoute extends RouterAbstract {
    private controller: UserController;

    constructor(logging: Logger, router: Router) {
        super(logging, router);
        this.logging = logging;
        this.router = router;
    }

    mount = (mount_path: string): void => {
        this.controller = new UserController(this.logging);
        this.logging.debug("UserRoute ", mount_path);

        this.router.post(mount_path + '/user', this.controller.create);
        this.logging.debug("user create - post ", mount_path + '/user');

        this.router.get(mount_path + '/user', this.controller.findAll);
        this.logging.debug("user get all - post ", mount_path + '/user');

        this.router.get(mount_path + '/user/:id', this.controller.findOne);
        this.logging.debug("user get all - post ", mount_path + '/user/:id');

        this.router.get(mount_path + '/user/:id', this.controller.findOneByName);
        this.logging.debug("user get all - post ", mount_path + '/user/:name');

        this.router.put(mount_path + '/user/:id', this.controller.update);
        this.logging.debug("user update - put ", mount_path + '/user/:id');

        this.router.delete(mount_path + '/user/:id', this.controller.delete);
        this.logging.debug("user delete - delete ", mount_path + '/user/:id');

    }
}