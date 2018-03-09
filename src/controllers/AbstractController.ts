import { Schema } from 'mongoose';
import { NextFunction, Request, Response, Router } from "express";
import * as q from 'q';
import { Logger } from 'log4js';

export abstract class AbstractController {

    constructor(logging: Logger) {
    }

    abstract create(req: Request, resp: Response): q.Promise<Schema.Types.ObjectId>;

    abstract findAll(req: Request, resp: Response): q.Promise<Schema.Types.ObjectId>;

    abstract findOne(req: Request, resp: Response): q.Promise<Schema.Types.ObjectId>;

    abstract update(req: Request, resp: Response): q.Promise<Schema.Types.ObjectId>;

    abstract delete(req: Request, resp: Response): q.Promise<Schema.Types.ObjectId>;
}