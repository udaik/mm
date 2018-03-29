import { NextFunction, Request, Response } from "express";
import { Logger } from 'log4js';

export abstract class AbstractController {
    logging: Logger;

    constructor(logging: Logger) {
        this.logging = logging;
    }

    abstract create(req: Request, resp: Response, next: NextFunction): void;

    abstract retrieve(req: Request, resp: Response, next: NextFunction): void;

    abstract update(req: Request, resp: Response, next: NextFunction): void;

    abstract delete(req: Request, resp: Response, next: NextFunction): void;
}