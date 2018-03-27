import { Connection } from 'mongoose';
import { Logger } from 'log4js';
import { MongoClientOptions } from 'mongodb';

export abstract class DBInterface {
    url: string;
    logging: Logger;

    constructor(url: string, logging: Logger) {
    }

    abstract pInit(options: MongoClientOptions): Promise<Connection>;

    abstract pClose(): void;
}