import { env } from '$env/dynamic/private';
import { tc } from '@itsezz/try-catch';
import type { Rate } from 'sveltekit-rate-limiter/server';
import { RetryAfterRateLimiter } from 'sveltekit-rate-limiter/server';

function parseRate(raw: string | undefined, fallback: Rate | Rate[]): Rate | Rate[] {
	if (!raw) return fallback;
	const result = tc(() => JSON.parse(raw));
	if (result.ok) return result.data;
	else return fallback;
}

const ipRate = parseRate(env.RATE_LIMITER_IP, [3, '5m']);
const ipuaRate = parseRate(env.RATE_LIMITER_IPUA, [2, '5m']);

export const rateLimiter = new RetryAfterRateLimiter({
	IP: ipRate,
	IPUA: ipuaRate
});
