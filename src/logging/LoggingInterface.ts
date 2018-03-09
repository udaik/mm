import { LogLevel } from './LogLevel';
import * as q from 'q';

export abstract class LoggingInterface {

    constructor(level: LogLevel) {

    }

    abstract init(appLevel: LogLevel, fileName: string): boolean;

    abstract fatal(...args: any[]): q.Promise<boolean>;

    abstract error(...args: any[]): q.Promise<boolean>;

    abstract debug(...args: any[]): q.Promise<boolean>;

    abstract warn(...args: any[]): q.Promise<boolean>;

    abstract info(...args: any[]): q.Promise<boolean>;

    abstract close(): q.Promise<boolean>;
}