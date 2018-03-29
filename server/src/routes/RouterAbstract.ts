import { Request, Response, NextFunction } from "express";

export abstract class RouterAbstract {

    constructor() {
    }

    abstract create(req: Request, resp: Response, next: NextFunction): void;

    abstract retrieve(req: Request, resp: Response, next: NextFunction): void;

    abstract update(req: Request, resp: Response, next: NextFunction): void;

    abstract delete(req: Request, resp: Response, next: NextFunction): void;
};