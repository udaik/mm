import { DBInterface } from './DBInterface';
import { connect, disconnect, Connection, connection } from 'mongoose';
import { Logging } from '../logging/Logging';
import * as q from 'q';

export class Database extends DBInterface {
    db: Connection;

    constructor(url: string, logging: Logging) {
        super(url, logging);
    }

    qInit(options: string): q.Promise<Connection> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<Connection>;
        this.db = connection;
        this.db.once('open', () => {
            deferred.resolve(true);
            this.logging.debug('Opened the Database')
        });

        this.db.on('error', () => {
            deferred.reject(false);
            this.logging.fatal("Failed to create the ")
        });
        connect(this.url);
        return promise;
    }

    qClose(): void {
        this.db.once('close', () => {
            this.logging.debug('Closed the database')
        });
        disconnect();
    }
}