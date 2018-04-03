import { Logger } from 'log4js';
import { ControllerHandler } from "./ControllerHandler";

export abstract class AbstractController {
    logging: Logger;

    constructor(logging: Logger) {
        this.logging = logging;
    }

    create: ControllerHandler;

    retrieve: ControllerHandler;

    update: ControllerHandler;

    delete: ControllerHandler;
}