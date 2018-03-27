import { Router } from "express";
import { BankAccountController } from "../controllers/BankAccountController";
import { Logger } from 'log4js';
import { RouterAbstract } from "./RouterAbstract";

export class BankAccountRoute extends RouterAbstract {
    private controller: BankAccountController;

    constructor(logging: Logger, router: Router) {
        super(logging, router);
        this.logging = logging;
        this.router = router;
    }

    mount(mount_path: string): void {

        this.controller = new BankAccountController(this.logging);
        this.logging.debug("BankAccountController ", mount_path);

        this.router.post(mount_path + '/bankAccount', this.controller.create);
        this.logging.debug("bankAccount route post ", mount_path + '/bankAccount');

        this.router.get(mount_path + '/bankAccount', this.controller.findAll);
        this.logging.debug("bankAccount route get ", mount_path + '/bankAccount');

        this.router.put(mount_path + '/bankAccount/:id', this.controller.update);
        this.logging.debug("bankAccount route put ", mount_path + '/bankAccount/:id');

        this.router.delete(mount_path + '/bankAccount/:id', this.controller.delete);
        this.logging.debug("bankAccount route delete ", mount_path + '/bankAccount/:id');

    }
}