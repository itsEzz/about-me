import { z } from 'zod/v4';

export const contactFormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(5, 'Please enter at least 5 characters')
		.max(50, 'Please enter at most 50 characters'),
	email: z.email('Please enter a valid email address').toLowerCase(),
	subject: z
		.string()
		.trim()
		.min(5, 'Please enter at least 5 characters')
		.max(150, 'Please enter at most 150 characters'),
	message: z
		.string()
		.trim()
		.min(10, 'Please enter at least 10 characters')
		.max(2000, 'Please enter at most 2000 characters'),
	phoneNumber: z
		.e164('Please enter a valid phone number or keep empty')
		.optional()
		.or(z.literal('')),
	consent: z.boolean().refine((val) => val === true, {
		message: 'Your consent to data processing is required'
	}),
	turnstileToken: z.string().trim().nonempty('Please complete turnstile challenge')
});

export type ContactFormSchema = typeof contactFormSchema;
