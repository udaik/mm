import { Router } from "express";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";

export class AuthRoute extends RouterAbstract {

    constructor(logging: Logger, router: Router) {
        super(logging, router);
        this.logging = logging;
        this.router = router;
    }

    mount(mount_path: string): void {
        this.logging.debug("AuthRoute /", mount_path);

        /*
        
        module.exports = router;
        
        this.router.post(mount_path + '/bankAccount', this.controller.create);
        this.router.get(mount_path + '/bankAccount', this.controller.findAll);
        this.router.put(mount_path + '/bankAccount/:id', this.controller.update);
        this.router.delete(mount_path + '/bankAccount/:id', this.controller.delete);
        */
    }
}