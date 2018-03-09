import { LoggingInterface } from './LoggingInterface';
import { LogLevel } from './LogLevel';
import { configure, getLogger } from 'log4js'
import * as q from 'q';

export function loggerGet(): Logging {
    return Logging.logger;
}

export class Logging extends LoggingInterface {
    static logger : Logging;
    logger_interal = getLogger();

    constructor(level: LogLevel) {
        super(level);

        if (Logging.logger == undefined) {
            Logging.logger = this;
        }
    }

    init(appLevel: LogLevel, filenName: string): boolean {
        this.logger_interal.level = 'debug';
        configure(filenName);
        return true;
    }

    fatal(...args: any[]): q.Promise<boolean> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<boolean>;
        this.logger_interal.fatal.apply(null, ...args);
        deferred.resolve(true);
        return promise;
    }

    error(...args: any[]): q.Promise<boolean> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<boolean>;
        this.logger_interal.error.apply(null, ...args);
        deferred.resolve(true);
        return promise;
    }

    debug(...args: any[]): q.Promise<boolean> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<boolean>;
        this.logger_interal.debug.apply(null, ...args);
        deferred.resolve(true);
        return promise;
    }

    warn(...args: any[]): q.Promise<boolean> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<boolean>;
        this.logger_interal.warn.apply(null, ...args);
        deferred.resolve(true);
        return promise;
    }

    info(...args: any[]): q.Promise<boolean> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<boolean>;
        this.logger_interal.info.apply(null, ...args);
        deferred.resolve(true);
        return promise;
    }

    close(): q.Promise<boolean> {
        const deferred = q.defer();
        const promise = deferred.promise as q.Promise<boolean>;
        deferred.resolve(true);
        return promise;
    }
}