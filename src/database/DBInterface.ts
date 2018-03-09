import { Logging } from '../logging/Logging'
import { Connection } from 'mongoose';
import * as q from 'q';

export abstract class DBInterface {
    url: string;
    logging: Logging;

    constructor(url: string, logging: Logging) {
    }

    abstract qInit(options: string): q.Promise<Connection>;

    abstract qClose(): void;
}