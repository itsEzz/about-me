<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import ScrollToTop from '$lib/components/common/scroll-to-top.svelte';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import SunIcon from '@lucide/svelte/icons/sun';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Tooltip.Provider>
	<Tooltip.Root>
		<div class="fixed top-4 right-4 z-50">
			<Tooltip.Trigger
				class={buttonVariants({ variant: 'ghost', size: 'icon' })}
				onclick={toggleMode}
			>
				<SunIcon
					class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
				/>
				<MoonIcon
					class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Tooltip.Trigger>
		</div>
		<Tooltip.Content>
			<p>Toggle theme</p>
		</Tooltip.Content>
	</Tooltip.Root>

	<Toaster duration={8000} closeButton />
	<ModeWatcher />
	<ScrollToTop />
	<main class="min-h-screen w-full">
		{@render children?.()}
	</main>
</Tooltip.Provider>
