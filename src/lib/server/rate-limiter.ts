import { env } from '$env/dynamic/private';
import { RetryAfterRateLimiter } from 'sveltekit-rate-limiter/server';

export const rateLimiter = new RetryAfterRateLimiter({
	IP: JSON.parse(env.RATE_LIMITER_IP),
	IPUA: JSON.parse(env.RATE_LIMITER_IPUA)
});
