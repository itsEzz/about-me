<script lang="ts">
	import { env } from '$env/dynamic/public';
	import LanguageSelect from '$lib/components/layout/language-select.svelte';
	import ScrollToTop from '$lib/components/layout/scroll-to-top.svelte';
	import ThemeToggle from '$lib/components/layout/theme-toggle.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { ModeWatcher } from 'mode-watcher';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="favicon.svg" />

	<!-- Analytics -->
	{#if env.PUBLIC_UMAMI_WEBSITE_ID}
		<script
			defer
			src="/proxy/stats.js"
			data-website-id={env.PUBLIC_UMAMI_WEBSITE_ID}
			data-host-url={env.PUBLIC_UMAMI_HOST_URL}
			data-domains={env.PUBLIC_UMAMI_DOMAINS}
			data-tag={env.PUBLIC_UMAMI_TAG}
			data-performance={env.PUBLIC_UMAMI_PERFORMANCE}
			data-exclude-search={env.PUBLIC_UMAMI_EXCLUDE_SEARCH}
			data-exclude-hash={env.PUBLIC_UMAMI_EXCLUDE_HASH}
			data-do-not-track={env.PUBLIC_UMAMI_DO_NOT_TRACK}
		></script>
	{/if}
</svelte:head>

<Tooltip.Provider>
	<div class="fixed top-4 right-4 z-50">
		<LanguageSelect />
		<ThemeToggle />
	</div>

	<Toaster duration={8000} closeButton />
	<ModeWatcher />
	<ScrollToTop />
	<main class="min-h-screen w-full">
		{@render children?.()}
	</main>
</Tooltip.Provider>
