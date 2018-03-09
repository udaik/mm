import { Logger } from 'log4js';

export abstract class LoggingInterface {

    constructor(name: string, level: string) {

    }

    abstract init(): Logger;

    abstract deinit(): void;
}