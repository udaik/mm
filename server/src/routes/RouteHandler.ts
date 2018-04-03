import { Request, Response, NextFunction } from "express";

export interface routeHandler {
    (req: Request, resp: Response, next: NextFunction): void;
}
