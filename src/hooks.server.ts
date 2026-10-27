import type { Handle, ServerInit } from '@sveltejs/kit/hooks';
import { paraglideMiddleware } from '#lib/paraglide/server.js';
import { getTextDirection } from '#lib/paraglide/runtime.js';
import { getLogger } from '#lib/server/logger.js';

// creating a handle to use the paraglide middleware
const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		return resolve(
			{ ...event, request: localizedRequest },
			{
				transformPageChunk: ({ html }) => {
					return html.replace('%lang%', locale).replace('%dir%', getTextDirection(locale));
				}
			}
		);
	});

export const handle: Handle = paraglideHandle;

export const init: ServerInit = async () => {
	const logger = getLogger();

	logger.info('App starting...');
};
