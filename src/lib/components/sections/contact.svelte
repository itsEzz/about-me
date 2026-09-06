<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import { m } from '$lib/paraglide/messages';
	import type { ContactFormSchema } from '$lib/schemas/contact-schema';
	import { ExternalLinkIcon } from '@lucide/svelte';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
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
	import SocialCard from '../contact/social-card.svelte';

	// Props
	interface Props {
		form: SuperForm<Infer<ContactFormSchema>>;
	}

	let { form }: Props = $props();

	// States & Variables
	let openPrivacyNotice = $state<boolean>(false);
	let resetTurnstile = $state<() => void>();
	// svelte-ignore state_referenced_locally
	const { form: formData, enhance, submitting, constraints } = form;

	// Functions
	function setTurnstileTokenWithoutTaint(token: string) {
		formData.update(
			($form) => {
				$form.turnstileToken = token;
				return $form;
			},
			{ taint: false }
		);
	}

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
		setTurnstileTokenWithoutTaint(e.detail.token);
	}

	function handleTurnstileError(
		e: CustomEvent<
			TurnstileEventDetail<{
				code: string;
			}>
		>
	) {
		setTurnstileTokenWithoutTaint('');
		toast.error(m.contact_client_turnstile_error_title(), {
			description: m.contact_client_turnstile_error_description({ code: e.detail.code })
		});
	}

	function handleTurnstileExpired(e: CustomEvent<TurnstileEventDetail<Record<string, never>>>) {
		setTurnstileTokenWithoutTaint('');
		resetTurnstile = () => e.detail.turnstile.reset(e.detail.widgetId);
		toast.info(m.contact_client_turnstile_expired_title(), {
			description: m.contact_client_turnstile_expired_description()
		});
	}

	function handleTurnstileTimeout(e: CustomEvent<TurnstileEventDetail<Record<string, never>>>) {
		setTurnstileTokenWithoutTaint('');
		resetTurnstile = () => e.detail.turnstile.reset(e.detail.widgetId);
		toast.warning(m.contact_client_turnstile_timeout_title(), {
			description: m.contact_client_turnstile_timeout_description()
		});
	}

	function handleTurnstileUnsupported() {
		setTurnstileTokenWithoutTaint('');
		toast.error(m.contact_client_turnstile_unsupported_title(), {
			description: m.contact_client_turnstile_unsupported_description()
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
	title={m.contact_privacy_info_title()}
	description={m.contact_privacy_info_description()}
	dialogContentCss="max-w-lg"
>
	{#snippet body()}
		<div class="flex flex-col gap-4 text-sm text-muted-foreground">
			<p>
				<strong>{m.contact_privacy_info_section_1_title()}</strong><br />
				{m.contact_privacy_info_section_1_content()}
			</p>
			<p>
				<strong>{m.contact_privacy_info_section_2_title()}</strong><br />
				{m.contact_privacy_info_section_2_content()}
			</p>
			<p>
				<strong>{m.contact_privacy_info_section_3_title()}</strong><br />
				{m.contact_privacy_info_section_3_content()}
			</p>
			<p>
				<strong>{m.contact_privacy_info_section_4_title()}</strong><br />
				{m.contact_privacy_info_section_4_content()}
			</p>
		</div>
	{/snippet}
</DialogDrawer>

<section class="min-h-screen px-4 py-20" id="contact">
	<div class="mx-auto max-w-6xl">
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-3xl font-bold text-foreground md:text-4xl">{m.contact_title()}</h2>
			<div class="mx-auto h-1 w-20 rounded-full bg-primary"></div>
		</div>

		<div class="grid gap-12 lg:grid-cols-2">
			<div class="space-y-8">
				<div>
					<h3 class="mb-4 text-2xl font-semibold text-foreground">
						{m.contact_form_title()}
					</h3>
					<p class="text-muted-foreground">
						{m.contact_form_description()}
					</p>
				</div>
				<form method="POST" use:enhance>
					<Card.Root class="gap-2 bg-background">
						<Card.Content>
							<fieldset class="flex flex-col gap-2">
								<legend class="sr-only">{m.contact_form_legend()}</legend>
								<Form.Field {form} name="name">
									<Form.Control>
										{#snippet children({ props })}
											<Form.Label>{m.contact_form_name_label()}</Form.Label>
											<InputGroup.Root>
												<InputGroup.Input
													{...props}
													{...$constraints.name}
													bind:value={$formData.name}
													disabled={$submitting}
													autocomplete="name"
													placeholder={m.contact_form_name_placeholder()}
												/>
												<InputGroup.Addon>
													<UserIcon />
												</InputGroup.Addon>
											</InputGroup.Root>
										{/snippet}
									</Form.Control>
									<Form.FieldErrors />
								</Form.Field>
								<Form.Field {form} name="email">
									<Form.Control>
										{#snippet children({ props })}
											<Form.Label>{m.contact_form_email_label()}</Form.Label>
											<InputGroup.Root>
												<InputGroup.Input
													{...props}
													{...$constraints.email}
													bind:value={$formData.email}
													disabled={$submitting}
													type="email"
													autocomplete="email"
													pattern={undefined}
													placeholder={m.contact_form_email_placeholder()}
												/>
												<InputGroup.Addon>
													<MailIcon />
												</InputGroup.Addon>
											</InputGroup.Root>
										{/snippet}
									</Form.Control>
									<Form.FieldErrors />
								</Form.Field>
								<Form.Field {form} name="subject">
									<Form.Control>
										{#snippet children({ props })}
											<Form.Label>{m.contact_form_subject_label()}</Form.Label>
											<InputGroup.Root>
												<InputGroup.Input
													{...props}
													{...$constraints.subject}
													bind:value={$formData.subject}
													disabled={$submitting}
													placeholder={m.contact_form_subject_placeholder()}
												/>
												<InputGroup.Addon>
													<FileTextIcon />
												</InputGroup.Addon>
											</InputGroup.Root>
										{/snippet}
									</Form.Control>
									<Form.FieldErrors />
								</Form.Field>
								<Form.Field {form} name="message">
									<Form.Control>
										{#snippet children({ props })}
											<Form.Label>{m.contact_form_message_label()}</Form.Label>
											<InputGroup.Root>
												<InputGroup.Textarea
													{...props}
													{...$constraints.message}
													bind:value={$formData.message}
													disabled={$submitting}
													placeholder={m.contact_form_message_placeholder()}
													class="max-h-96 resize-y"
												/>
												<InputGroup.Addon>
													<MessageSquareIcon />
												</InputGroup.Addon>
											</InputGroup.Root>
										{/snippet}
									</Form.Control>
									<Form.FieldErrors />
								</Form.Field>
								<Form.Field {form} name="phoneNumber">
									<Form.Control>
										{#snippet children({ props })}
											<Form.Label>{m.contact_form_phone_label()}</Form.Label>
											<InputGroup.Root>
												<InputGroup.Input
													{...props}
													{...$constraints.phoneNumber}
													bind:value={$formData.phoneNumber}
													disabled={$submitting}
													placeholder={m.contact_form_phone_placeholder()}
													aria-describedby="phone-description"
												/>
												<InputGroup.Addon>
													<PhoneIcon />
												</InputGroup.Addon>
											</InputGroup.Root>
										{/snippet}
									</Form.Control>
									<Form.Description id="phone-description">
										{m.contact_form_phone_description_prefix()}
										<Button
											href="https://en.wikipedia.org/wiki/E.164"
											target="_blank"
											rel="noopener noreferrer"
											variant="link"
											class="inline h-fit cursor-pointer p-0 align-baseline"
										>
											E.164
										</Button>
										{m.contact_form_phone_description_suffix()}
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
													disabled={$submitting}
													bind:checked={$formData.consent}
													onCheckedChange={handleOnCheckedChangeConsent}
												/>
												<div class="grid gap-2">
													<Form.Label>{m.contact_form_consent_label()}</Form.Label>
													<p class="text-sm text-muted-foreground">
														{m.contact_form_consent_description_prefix()}
														<Button
															onclick={handleOpenPrivacyNotice}
															variant="link"
															class="inline h-fit cursor-pointer p-0 align-baseline"
														>
															{m.contact_form_consent_description_suffix()}
														</Button>
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
											<Form.Label>{m.contact_form_captcha_label()}</Form.Label>
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
												role="group"
											></div>

											<Input
												{...props}
												{...$constraints.turnstileToken}
												value={$formData.turnstileToken}
												disabled={$submitting}
												hidden
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
								aria-label={$submitting ? m.contact_submitting_label() : m.contact_submit_label()}
								class="w-full"
								data-umami-event="contact-send-message"
							>
								{#if $submitting}
									<LoaderCircleIcon class="animate-spin" aria-hidden="true" role="status" />
									<span class="sr-only">{m.contact_submitting_label()}</span>
									{m.contact_submitting_label()}
								{:else}
									<SendIcon aria-hidden="true" />
									{m.contact_submit_label()}
								{/if}
							</Form.Button>
						</Card.Footer>
					</Card.Root>
				</form>
			</div>

			<div class="space-y-8">
				<div>
					<h3 class="mb-4 text-2xl font-semibold text-foreground">{m.contact_socials_title()}</h3>
					<p class="text-muted-foreground">
						{m.contact_socials_description()}
					</p>
				</div>

				<div class="space-y-6">
					<SocialCard
						icon={ExternalLinkIcon}
						title={m.contact_socials_github_title()}
						description={m.contact_socials_github_description()}
						href="https://github.com/itsEzz"
					/>
					<SocialCard
						icon={ExternalLinkIcon}
						title={m.contact_socials_linkedin_title()}
						description={m.contact_socials_linkedin_description()}
						href="https://linkedin.com/in/adriangast"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
