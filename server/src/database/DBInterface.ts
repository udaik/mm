import { Logger } from 'log4js';
import { ConnectionOptions } from 'mongoose';


export abstract class DBInterface {
    url: string;
    logging: Logger;

    constructor(url: string, logging: Logger) {
    }

    abstract pInit(options: ConnectionOptions): Promise<any>;

    abstract pClose(): void;
}