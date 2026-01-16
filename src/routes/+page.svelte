<script lang="ts">
	import { page } from '$app/state';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import { contactFormSchema } from '$lib/schemas/contact-schema';
	import type { ContactComponent } from '$lib/types/contact';
	import SvelteSeo from 'svelte-seo';
	import { toast } from 'svelte-sonner';
	import { superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import type { PageProps } from './$types';

	// Props
	let { data }: PageProps = $props();

	// States & Variables
	let contactComponent = $state<ContactComponent>();

	const form = superForm(data.form, {
		validators: zod4Client(contactFormSchema),
		taintedMessage: true,
		resetForm: true,
		onUpdate({ result }) {
			contactComponent?.resetTurnstileWidget();

			if (result.type === 'success') {
				toast.success('Message sent successfully', {
					description: 'I will get back to you as soon as possible.'
				});
				return;
			}

			if (result.data.error.title || result.data.error.description)
				toast.error(result.data.error.title, { description: result.data.error.description });
			else toast.error('Something went wrong', { description: 'Please try again later' });
		},
		onError() {
			contactComponent?.resetTurnstileWidget();

			toast.error('Something went wrong', {
				description: 'Please try again later.'
			});
		}
	});
</script>

<SvelteSeo
	title="Adrian - Full-Stack Developer, SOAR Professional & Tech Enthusiast"
	description="Hi, I'm Adrian, a passionate Full-Stack Developer, SOAR Professional, and Tech Enthusiast. Explore my portfolio and get in touch to collaborate on innovative projects."
	keywords="Adrian, Full-Stack Developer, SOAR Professional, Tech Enthusiast, Web Development, Software Engineer, Portfolio"
	canonical={page.url.href}
	openGraph={{
		title: 'Adrian - Full-Stack Developer, SOAR Professional & Tech Enthusiast',
		description:
			"Hi, I'm Adrian, a passionate Full-Stack Developer, SOAR Professional, and Tech Enthusiast. Explore my portfolio and get in touch to collaborate on innovative projects.",
		images: [{ url: '/avatar_large.png' }],
		url: page.url.href,
		type: 'website',
		site_name: "Adrian's Portfolio"
	}}
	twitter={{
		title: 'Adrian - Full-Stack Developer, SOAR Professional & Tech Enthusiast',
		description:
			"Hi, I'm Adrian, a passionate Full-Stack Developer, SOAR Professional, and Tech Enthusiast. Explore my portfolio and get in touch to collaborate on innovative projects.",
		image: '/avatar_large.png'
	}}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Adrian - Full-Stack Developer, SOAR Professional & Tech Enthusiast',
		description:
			"Hi, I'm Adrian, a passionate Full-Stack Developer, SOAR Professional, and Tech Enthusiast. Explore my portfolio and get in touch to collaborate on innovative projects.",
		url: page.url.href
	}}
/>

<Hero />
<Contact {form} bind:this={contactComponent} />
