<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import type { ContactFormSchema } from '$lib/schemas/contact-schema';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import GithubIcon from '@lucide/svelte/icons/github';
	import LinkedinIcon from '@lucide/svelte/icons/linkedin';
	import LoaderCircleIcon from '@lucide/svelte/icons/loader-circle';
	import MailIcon from '@lucide/svelte/icons/mail';
	import MessageSquareIcon from '@lucide/svelte/icons/message-square';
	import PhoneIcon from '@lucide/svelte/icons/phone';
	import SendIcon from '@lucide/svelte/icons/send';
	import UserIcon from '@lucide/svelte/icons/user';
	import { turnstile, type TurnstileEventDetail } from '@svelte-put/cloudflare-turnstile';
	import { toast } from 'svelte-sonner';
	import type { Infer, SuperForm } from 'sveltekit-superforms';
	import DialogDrawer from '../common/dialog-drawer.svelte';
	import SocialCard from '../contact/SocialCard.svelte';

	// Props
	interface Props {
		form: SuperForm<Infer<ContactFormSchema>>;
	}

	let { form }: Props = $props();

	// States & Variables
	let openPrivacyNotice = $state<boolean>(false);
	let resetTurnstile = $state<() => void>();
	const { form: formData, enhance, submitting, constraints } = form;

	// Handler Functions
	function handleOpenPrivacyNotice() {
		openPrivacyNotice = true;
	}

	function handleTurnstile(
		e: CustomEvent<
			TurnstileEventDetail<{
				token: string;
			}>
		>
	) {
		resetTurnstile = () => e.detail.turnstile.reset(e.detail.widgetId);
		$formData.turnstileToken = e.detail.token;
	}

	function handleTurnstileError(
		e: CustomEvent<
			TurnstileEventDetail<{
				code: string;
			}>
		>
	) {
		$formData.turnstileToken = '';
		toast.error('Turnstile captcha error', {
			description: `An error occurred while verifying the captcha. Please try again. (Code: ${e.detail.code})`
		});
	}

	function handleTurnstileExpired(e: CustomEvent<TurnstileEventDetail<Record<string, never>>>) {
		$formData.turnstileToken = '';
		resetTurnstile = () => e.detail.turnstile.reset(e.detail.widgetId);
		toast.info('Turnstile captcha expired', {
			description: 'The captcha has expired. Please complete it again.'
		});
	}

	function handleTurnstileTimeout(e: CustomEvent<TurnstileEventDetail<Record<string, never>>>) {
		$formData.turnstileToken = '';
		resetTurnstile = () => e.detail.turnstile.reset(e.detail.widgetId);
		toast.warning('Turnstile captcha timeout', {
			description:
				'The captcha request has timed out. This may be due to slow internet connection. Please try again.'
		});
	}

	function handleTurnstileUnsupported() {
		$formData.turnstileToken = '';
		toast.error('Turnstile captcha unsupported', {
			description:
				'Your browser does not support the captcha. Please ensure your browser is up to date or try a different device.'
		});
	}

	function handleOnCheckedChangeConsent() {
		form.validate('consent');
	}

	export function resetTurnstileWidget() {
		resetTurnstile?.();
	}
</script>

<DialogDrawer
	bind:open={openPrivacyNotice}
	title="Privacy Notice"
	description="Your privacy matters. Here's how I handle your data when you contact me."
	dialogContentCss="max-w-lg"
	role="alertdialog"
>
	{#snippet body()}
		<div class="flex flex-col gap-4 text-sm text-muted-foreground">
			<p>
				<strong>How I use your data</strong><br />
				The information you provide in this form is used solely to send me an email containing your message.
				I may use your data to respond to your inquiry.
			</p>
			<p>
				<strong>Data sharing and storage</strong><br />
				Your data will not be shared with third parties and will only be retained as long as necessary
				to handle your message.
			</p>
			<p>
				<strong>Your rights</strong><br />
				You have the right to withdraw your consent at any time, request access to your data, or ask for
				its deletion.
			</p>
			<p>
				<strong>Contact</strong><br />
				For any questions or to exercise your rights, please contact me through the contact form. Your
				data is handled securely and only processed with your consent.
			</p>
		</div>
	{/snippet}
</DialogDrawer>

<section class="min-h-screen bg-secondary/20 px-4 py-20" id="contact">
	<div class="mx-auto max-w-6xl">
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-3xl font-bold text-foreground md:text-4xl">Let's Connect</h2>
			<div class="mx-auto h-1 w-20 rounded-full bg-primary"></div>
		</div>

		<div class="mx-auto max-w-6xl">
			<div class="grid gap-12 lg:grid-cols-2">
				<div class="space-y-8">
					<div>
						<h3 class="mb-4 text-2xl font-semibold text-foreground">Send me a message</h3>
						<p class="text-muted-foreground">
							Fill out the form below and I'll get back to you as soon as possible.
						</p>
					</div>
					<form method="POST" use:enhance>
						<Card.Root class="gap-2 bg-background">
							<Card.Content>
								<fieldset class="flex flex-col gap-2">
									<legend class="sr-only">Contact Form</legend>
									<Form.Field {form} name="name">
										<Form.Control>
											{#snippet children({ props })}
												<Form.Label>Name</Form.Label>
												<div class="relative">
													<UserIcon
														class="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
														aria-hidden="true"
													/>
													<Input
														{...props}
														{...$constraints.name}
														bind:value={$formData.name}
														disabled={$submitting}
														placeholder="Your full name"
														class="pl-10"
														autocomplete="name"
													/>
												</div>
											{/snippet}
										</Form.Control>
										<Form.FieldErrors />
									</Form.Field>
									<Form.Field {form} name="email">
										<Form.Control>
											{#snippet children({ props })}
												<Form.Label>E-Mail</Form.Label>
												<div class="relative">
													<MailIcon
														class="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
														aria-hidden="true"
													/>
													<Input
														{...props}
														{...$constraints.email}
														bind:value={$formData.email}
														disabled={$submitting}
														placeholder="Your e-mail"
														type="email"
														class="pl-10"
														autocomplete="email"
													/>
												</div>
											{/snippet}
										</Form.Control>
										<Form.FieldErrors />
									</Form.Field>
									<Form.Field {form} name="subject">
										<Form.Control>
											{#snippet children({ props })}
												<Form.Label>Subject</Form.Label>
												<div class="relative">
													<FileTextIcon
														class="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
														aria-hidden="true"
													/>
													<Input
														{...props}
														{...$constraints.subject}
														bind:value={$formData.subject}
														disabled={$submitting}
														placeholder="Subject of your message"
														class="pl-10"
													/>
												</div>
											{/snippet}
										</Form.Control>
										<Form.FieldErrors />
									</Form.Field>
									<Form.Field {form} name="message">
										<Form.Control>
											{#snippet children({ props })}
												<Form.Label>Message</Form.Label>
												<div class="relative">
													<MessageSquareIcon
														class="absolute top-3 left-3 size-4 text-muted-foreground"
														aria-hidden="true"
													/>
													<Textarea
														{...props}
														{...$constraints.message}
														bind:value={$formData.message}
														disabled={$submitting}
														placeholder="Why are you reaching out?"
														class="max-h-96 pl-10"
													/>
												</div>
											{/snippet}
										</Form.Control>
										<Form.FieldErrors />
									</Form.Field>
									<Form.Field {form} name="phoneNumber">
										<Form.Control>
											{#snippet children({ props })}
												<Form.Label>Phone or mobile number (optional)</Form.Label>
												<div class="relative">
													<PhoneIcon
														class="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
														aria-hidden="true"
													/>
													<Input
														{...props}
														{...$constraints.phoneNumber}
														bind:value={$formData.phoneNumber}
														disabled={$submitting}
														placeholder="How can I reach you by phone?"
														aria-describedby="phone-description"
														class="pl-10"
													/>
												</div>
											{/snippet}
										</Form.Control>
										<Form.Description id="phone-description">
											Please provide your number according to the
											<Button
												href="https://en.wikipedia.org/wiki/E.164"
												target="_blank"
												rel="noopener noreferrer"
												variant="link"
												class="inline h-fit cursor-pointer p-0 align-baseline"
											>
												E.164
											</Button>
											international standard.
										</Form.Description>
										<Form.FieldErrors />
									</Form.Field>
									<Form.Field {form} name="consent">
										<Form.Control>
											{#snippet children({ props })}
												<div class="flex items-start gap-2">
													<Checkbox
														{...props}
														{...$constraints.consent}
														bind:checked={$formData.consent}
														onCheckedChange={handleOnCheckedChangeConsent}
													/>
													<div class="grid gap-2">
														<Form.Label>Consent to data processing</Form.Label>
														<p class="text-sm text-muted-foreground">
															By checking this box, you agree to the following <Button
																onclick={handleOpenPrivacyNotice}
																variant="link"
																class="inline h-fit cursor-pointer p-0 align-baseline"
															>
																Privacy Notice
															</Button>.
														</p>
													</div>
												</div>
											{/snippet}
										</Form.Control>
										<Form.FieldErrors />
									</Form.Field>
									<Form.Field {form} name="turnstileToken">
										<Form.Control>
											{#snippet children({ props })}
												<Form.Label>Captcha</Form.Label>
												<div
													use:turnstile
													turnstile-sitekey={env.PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
													turnstile-theme="auto"
													turnstile-size="flexible"
													turnstile-language="en"
													turnstile-response-field-name="turnstileToken"
													turnstile-response-field
													onturnstile={handleTurnstile}
													onturnstileerror={handleTurnstileError}
													onturnstileexpired={handleTurnstileExpired}
													onturnstiletimeout={handleTurnstileTimeout}
													onturnstileunsupported={handleTurnstileUnsupported}
													aria-label="Complete the captcha to submit the form"
													role="group"
												></div>

												<Input
													{...props}
													{...$constraints.turnstileToken}
													value={$formData.turnstileToken}
													disabled={$submitting}
													hidden
													aria-label="Captcha token"
												/>
											{/snippet}
										</Form.Control>
										<Form.FieldErrors />
									</Form.Field>
								</fieldset>
							</Card.Content>
							<Card.Footer>
								<Form.Button
									disabled={$submitting}
									aria-label={$submitting ? 'Sending Message...' : 'Send Message'}
									class="w-full cursor-pointer"
								>
									{#if $submitting}
										<LoaderCircleIcon class="animate-spin" aria-hidden="true" role="status" />
										<span class="sr-only">Sending message...</span>
										Sending Message...
									{:else}
										<SendIcon aria-hidden="true" />
										Send Message
									{/if}
								</Form.Button>
							</Card.Footer>
						</Card.Root>
					</form>
				</div>

				<div class="space-y-8">
					<div>
						<h3 class="mb-4 text-2xl font-semibold text-foreground">Visit my socials</h3>
						<p class="text-muted-foreground">
							Find me on these platforms to see my work and connect professionally.
						</p>
					</div>

					<div class="space-y-6">
						<SocialCard
							icon={GithubIcon}
							title="GitHub"
							description="Check out my open source projects and contributions."
							href="https://github.com/itsEzz"
						/>
						<SocialCard
							icon={LinkedinIcon}
							title="LinkedIn"
							description="Let's connect professionally and discuss opportunities."
							href="https://linkedin.com/in/adriangast"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
