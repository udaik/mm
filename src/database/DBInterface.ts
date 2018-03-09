import { Connection } from 'mongoose';
import * as q from 'q';
import { Logger } from 'log4js';

export abstract class DBInterface {
    url: string;
    logging: Logger;

    constructor(url: string, logging: Logger) {
    }

    abstract qInit(options: string): q.Promise<Connection>;

    abstract qClose(): void;
}