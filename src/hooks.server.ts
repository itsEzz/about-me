import { getLogger } from '$lib/server/logger';
import type { ServerInit } from '@sveltejs/kit';

export const init: ServerInit = async () => {
	const logger = getLogger();

	logger.info('App starting...');
};
