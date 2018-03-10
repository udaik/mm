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

    pInit(options: ConnectionOptions): Promise<Connection> {
        this.db = connection;
        const promise = new Promise<Connection>((resolve, reject) => {
            this.db.once('open', () => {
                this.logging.debug('Opened the Database')
                resolve(connection);
            });

            this.db.on('error', () => {
                this.logging.fatal("Failed to connect to the database");
                reject(connection);
            });

        });
        connect(this.url, options, );
        return promise;
    }

    pClose(): void {
        this.db.once('close', () => {
            this.logging.debug('Closed the database')
        });
        disconnect();
    }
}