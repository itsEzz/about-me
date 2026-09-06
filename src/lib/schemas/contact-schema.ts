import { m } from '$lib/paraglide/messages';
import { z } from 'zod';

export const contactFormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(5, m.contact_schema_name_min_length_error({ length: 5 }))
		.max(50, m.contact_schema_name_max_length_error({ length: 50 })),
	email: z.email(m.contact_schema_email_error()).toLowerCase(),
	subject: z
		.string()
		.trim()
		.min(5, m.contact_schema_subject_min_length_error({ length: 5 }))
		.max(150, m.contact_schema_subject_max_length_error({ length: 150 })),
	message: z
		.string()
		.trim()
		.min(10, m.contact_schema_message_min_length_error({ length: 10 }))
		.max(2000, m.contact_schema_message_max_length_error({ length: 2000 })),
	phoneNumber: z.e164(m.contact_schema_phone_error()).optional().or(z.literal('')),
	consent: z.boolean().refine((val) => val === true, {
		message: m.contact_schema_consent_error()
	}),
	turnstileToken: z.string().trim().nonempty(m.contact_schema_captcha_error())
});

export type ContactFormSchema = typeof contactFormSchema;
