<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
</script>

{#if isVisible}
	<Tooltip.Root>
		<Tooltip.Trigger
			class={cn(
				'fixed right-6 bottom-6 z-50 shadow-lg transition-opacity duration-300 hover:shadow-xl',
				buttonVariants({ variant: 'secondary', size: 'icon' })
			)}
			onclick={scrollToTop}
			aria-label="Scroll to top"
		>
			<ArrowUpIcon />
			<span class="sr-only">Scroll to top</span>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Scroll to top</p>
		</Tooltip.Content>
	</Tooltip.Root>
{/if}
