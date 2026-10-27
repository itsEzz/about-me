import { defineEnvVars } from '@sveltejs/kit/env';
import z from 'zod';

export const variables = defineEnvVars({
	SMTP_HOST: { schema: z.string() },
	SMTP_PORT: { schema: z.string().regex(/^\d+$/) },
	SMTP_USER: { schema: z.string().optional() },
	SMTP_PASS: { schema: z.string().optional() },
	CLOUDFLARE_TURNSTILE_SECRET: { schema: z.string() },
	FROM_EMAIL: { schema: z.email() },
	TO_EMAIL: { schema: z.email() },
	PUBLIC_UMAMI_WEBSITE_ID: { public: true, schema: z.string().optional() },
	PUBLIC_UMAMI_SCRIPT_URL: { public: true, schema: z.string().optional() },
	PUBLIC_UMAMI_HOST_URL: { public: true, schema: z.string().optional() },
	PUBLIC_UMAMI_DOMAINS: { public: true, schema: z.string().optional() },
	PUBLIC_UMAMI_TAG: { public: true, schema: z.string().optional() },
	PUBLIC_UMAMI_PERFORMANCE: { public: true, schema: z.enum(['true', 'false']).optional() },
	PUBLIC_UMAMI_EXCLUDE_SEARCH: { public: true, schema: z.enum(['true', 'false']).optional() },
	PUBLIC_UMAMI_EXCLUDE_HASH: { public: true, schema: z.enum(['true', 'false']).optional() },
	PUBLIC_UMAMI_DO_NOT_TRACK: { public: true, schema: z.enum(['true', 'false']).optional() },
	RATE_LIMITER_IP: { schema: z.string().optional() },
	RATE_LIMITER_IPUA: { schema: z.string().optional() },
	PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY: { public: true, schema: z.string() }
});
