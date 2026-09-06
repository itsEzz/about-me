import { env } from '$env/dynamic/private';
import { m } from '$lib/paraglide/messages.js';
import { contactFormSchema } from '$lib/schemas/contact-schema.js';
import { createChildLogger } from '$lib/server/logger.js';
import { rateLimiter } from '$lib/server/rate-limiter.js';
import type { TurnstileVerifyResponse } from '$lib/types/turnstile.js';
import { failure, isError, success, tca, type Result } from '@itsezz/try-catch';
import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types.js';

const transport = nodemailer.createTransport({
	host: env.SMTP_HOST,
	port: parseInt(env.SMTP_PORT),
	secure: false,
	auth: {
		user: env.SMTP_USER,
		pass: env.SMTP_PASS
	}
});

const logger = createChildLogger('contact-page');

const turnstileErrorMessages: Record<string, string> = {
	'missing-input-secret': m.contact_server_turnstile_error_input_secret(),
	'invalid-input-secret': m.contact_server_turnstile_error_input_secret(),
	'missing-input-response': m.contact_server_turnstile_error_missing_input_response(),
	'invalid-input-response': m.contact_server_turnstile_error_invalid_input_response(),
	'bad-request': m.contact_server_turnstile_error_bad_request(),
	'timeout-or-duplicate': m.contact_server_turnstile_error_timeout_or_duplicate(),
	'internal-error': m.contact_server_turnstile_error_internal_error()
};

async function validateTurnstileToken(token: string): Promise<Result<boolean, string>> {
	const response = await tca(async () => {
		const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				response: token,
				secret: env.CLOUDFLARE_TURNSTILE_SECRET
			})
		});

		if (!response.ok) return { success: false, 'error-codes': ['bad-request'] };

		const data: TurnstileVerifyResponse = await response.json();

		return data;
	});

	if (isError(response)) {
		logger.error(response.error, 'Turnstile verification request failed');
		return failure(m.contact_server_turnstile_validation_failed());
	}

	if (!response.data.success) {
		if (response.data['error-codes'].length > 0) {
			const errorCode = response.data['error-codes'][0];
			const errorMessage = turnstileErrorMessages[errorCode] || 'Please try again.';
			logger.error(
				`Turnstile verification failed with error codes: ${response.data['error-codes'].join(', ')}`
			);
			return failure(errorMessage);
		} else {
			logger.error('Turnstile verification failed without error codes');
			return failure(m.contact_server_turnstile_validation_failed_generic());
		}
	}

	return success(true);
}

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod4(contactFormSchema));

	return {
		form
	};
};

export const actions = {
	default: async (event) => {
		const status = await rateLimiter.check(event);
		const form = await superValidate(event.request, zod4(contactFormSchema), { strict: true });

		if (status.limited)
			return fail(429, {
				form,
				error: {
					title: m.rate_limit_exceeded_title(),
					description: m.rate_limit_exceeded_description({ seconds: status.retryAfter })
				}
			});

		if (!form.valid)
			return fail(400, {
				form,
				error: {
					title: m.form_invalid_title(),
					description: m.form_invalid_description()
				}
			});

		const turnstileVerification = await validateTurnstileToken(form.data.turnstileToken);

		if (isError(turnstileVerification))
			return fail(400, {
				form,
				error: {
					title: m.contact_server_turnstile_captcha_failed(),
					description: turnstileVerification.error
				}
			});

		const mailResult = await tca(
			transport.sendMail({
				from: env.FROM_EMAIL,
				to: env.TO_EMAIL,
				subject: `Contact Form: ${form.data.subject}`,
				html: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${form.data.name}</p>
					<p><strong>Email:</strong> ${form.data.email}</p>
					<p><strong>Phone:</strong> ${form.data.phoneNumber || 'Not provided'}</p>
					<p><strong>Message:</strong></p>
					<p>${form.data.message.replace(/\n/g, '<br>')}</p>
				`
			})
		);

		if (isError(mailResult)) {
			logger.error(mailResult.error, 'Failed to send contact form email');
			return fail(400, {
				form,
				error: {
					title: m.contact_error_title(),
					description: m.contact_error_description()
				}
			});
		}

		return {
			form
		};
	}
};
