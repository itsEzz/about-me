<script lang="ts">
	import { page } from '$app/state';
	import Contact from '$lib/components/sections/contact.svelte';
	import Hero from '$lib/components/sections/hero.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
	import { m } from '$lib/paraglide/messages';
	import { contactFormSchema } from '$lib/schemas/contact-schema';
	import type { ContactComponent } from '$lib/types/contact';
	import { untrack } from 'svelte';
	import SvelteSeo from 'svelte-seo';
	import { toast } from 'svelte-sonner';
	import { superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import type { PageProps } from './$types';

	// Props
	let { data }: PageProps = $props();

	// States & Variables
	let contactComponent = $state<ContactComponent>();

	const form = superForm(
		untrack(() => data.form),
		{
			validators: zod4Client(contactFormSchema),
			taintedMessage: true,
			resetForm: true,
			onUpdate({ result }) {
				contactComponent?.resetTurnstileWidget();

				if (result.type === 'success') {
					toast.success(m.contact_success_title(), {
						description: m.contact_success_description()
					});
					return;
				}

				if (result.data.error.title || result.data.error.description)
					toast.error(result.data.error.title, { description: result.data.error.description });
				else toast.error(m.contact_error_title(), { description: m.contact_error_description() });
			},
			onError() {
				contactComponent?.resetTurnstileWidget();

				toast.error(m.contact_error_title(), {
					description: m.contact_error_description()
				});
			}
		}
	);
</script>

<SvelteSeo
	title={m.seo_title()}
	description={m.seo_description()}
	keywords={m.seo_keywords()}
	canonical={page.url.href}
	openGraph={{
		title: m.seo_title(),
		description: m.seo_description(),
		images: [{ url: '/avatar_large.png' }],
		url: page.url.href,
		type: 'website',
		site_name: m.seo_site_name()
	}}
	twitter={{
		title: m.seo_title(),
		description: m.seo_description(),
		image: '/avatar_large.png'
	}}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: m.seo_title(),
		description: m.seo_description(),
		url: page.url.href
	}}
/>

<Hero />
<Projects />
<Contact {form} bind:this={contactComponent} />
