import { Request, Response, NextFunction } from "express";

export interface ControllerHandler {
    (req: Request, resp: Response, next: NextFunction): void;
}
