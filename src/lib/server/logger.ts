import { building } from '$app/environment';
import { isError, tc } from '@itsezz/try-catch';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import pino from 'pino';

function getLogDir(): string {
	const logDirResult = tc(() => {
		const logDir = join(process.cwd(), 'logs');
		if (!existsSync(logDir)) mkdirSync(logDir, { recursive: true });

		return logDir;
	});

	if (isError(logDirResult)) {
		console.warn('Failed to create log directory, using current directory');
		return process.cwd();
	}

	return logDirResult.data;
}

const pinoTransport = pino.transport({
	targets: [
		{
			target: 'pino-roll',
			options: {
				file: join(getLogDir(), 'log'),
				frequency: 'daily',
				size: '10m',
				mkdir: true,
				limit: { count: 30 },
				dateFormat: 'yyyy-MM-dd'
			}
		},
		{
			target: 'pino-pretty',
			options: {
				colorize: true
			}
		}
	]
});

function createLogger(): pino.Logger {
	if (building) return pino({ enabled: false });

	return pino(pinoTransport);
}

let loggerInstance: pino.Logger | null = null;

export function getLogger(): pino.Logger {
	if (!loggerInstance) loggerInstance = createLogger();
	return loggerInstance;
}

export function createChildLogger(context: string): pino.Logger {
	const logger = getLogger();
	return logger.child({ ctx: context });
}
