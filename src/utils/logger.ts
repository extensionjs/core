import { Logger } from 'winston';
// tslint:disable-next-line:no-duplicate-imports
import * as winston from 'winston';

const { combine, colorize, label, prettyPrint, printf } = winston.format;

const loggerFormat = printf(info => {
  return `[${info.label}] ${info.level}: ${info.message}`;
});

const logger: Logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple(),
  ),
});

function setupLogger(prefix: string): Logger {
  return winston.createLogger({
    exitOnError: false,
    transports: [new winston.transports.Console()],
    format: combine(
      colorize(),
      label({ label: prefix }),
      prettyPrint(),
      loggerFormat,
    ),
  });
}

export const createLogger = (prefix: string) => setupLogger(prefix);

export default logger;
