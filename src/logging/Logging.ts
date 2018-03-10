import { LoggingInterface } from './LoggingInterface';
import { configure, getLogger, Logger, Configuration } from 'log4js'

export class Logging extends LoggingInterface {
    private name: string;
    private level: string;
    static logger: Logger;
    static thisLogger: Logging;
    private config: Configuration;

    configureInternal(config: Configuration): void {
        if (config == undefined) {
            config = {
                appenders: { cheese: { type: 'file', filename: 'mm.log' } },
                categories: { default: { appenders: ['mm'], level: 'error' } }
            }
        }
        configure(config);
    }

    public static loggerGet(name: string, level: string, config: Configuration): Logger {
        if (this.thisLogger == undefined) {
            this.thisLogger = new Logging(name, level, config);
        }

        if (Logging.logger == undefined) {
            this.thisLogger.configureInternal(this.thisLogger.config);
            this.logger = getLogger('mm');
            this.logger.info("Initialized logger for ", "mm");
        }

        return this.logger;
    }

    constructor(name: string, level: string, config: Configuration) {
        super(name, level);
        this.config = config;
    }

    init(): Logger {
        return Logging.loggerGet(this.name, this.level, this.config);
    }

    deinit(): void {
        configure(null);
    }
}