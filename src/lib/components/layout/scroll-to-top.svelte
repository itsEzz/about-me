<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { m } from '$lib/paraglide/messages';
	import { cn } from '$lib/utils.js';
	import ArrowUpIcon from '@lucide/svelte/icons/arrow-up';
	import { onMount } from 'svelte';

	// Variables & States
	let isVisible = $state(false);

	onMount(() => {
		const updateVisibility = () => {
			isVisible = window.scrollY > 300;
		};

		// Set initial state
		updateVisibility();

		// Add scroll listener
		window.addEventListener('scroll', updateVisibility, { passive: true });

		// Cleanup
		return () => {
			window.removeEventListener('scroll', updateVisibility);
		};
	});

	// Handlers
	function handleClickScrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if isVisible}
	<Tooltip.Root>
		<Tooltip.Trigger
			class={cn(
				'fixed right-6 bottom-6 z-50 transition-opacity duration-300',
				buttonVariants({ variant: 'secondary', size: 'icon' })
			)}
			onclick={handleClickScrollToTop}
			aria-label={m.scroll_to_top()}
			data-umami-event="scroll-to-top"
		>
			<ArrowUpIcon aria-hidden="true" />
			<span class="sr-only">{m.scroll_to_top()}</span>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>{m.scroll_to_top()}</p>
		</Tooltip.Content>
	</Tooltip.Root>
{/if}
