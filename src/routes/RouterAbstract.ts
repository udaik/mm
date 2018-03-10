import { Router } from "express";
import { Logger } from 'log4js';

export abstract class RouterAbstract {
    logging: Logger;
    router: Router;

    constructor(logging: Logger, router: Router) {
        this.logging = logging;
        this.router = router;
    }

    abstract mount(mount_point: string): void;
};