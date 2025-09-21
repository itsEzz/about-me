<script lang="ts">
	import Contact from '$lib/components/sections/Contact.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import { contactFormSchema } from '$lib/schemas/contact-schema';
	import type { ContactComponent } from '$lib/types/contact';
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

<Hero />
<Contact {form} bind:this={contactComponent} />
