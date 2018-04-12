import { DBInterface } from './DBInterface';
import { connect, disconnect, Connection, connection, ConnectionOptions } from 'mongoose';
import { Logger } from 'log4js';

export class Database extends DBInterface {
    db: Connection;

    constructor(url: string, logging: Logger) {
        super(url, logging);
        this.url = url;
        this.logging = logging;
    }

    pInit(options: ConnectionOptions): Promise<any> {
        this.db = connection;
        return connect(this.url, options);
    }

    pClose(): void {
        this.db.once('close', () => {
            this.logging.debug('Closed the database')
        });
        disconnect();
    }
}