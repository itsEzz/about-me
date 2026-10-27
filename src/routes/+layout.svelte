<script lang="ts">
	import {
		PUBLIC_UMAMI_WEBSITE_ID,
		PUBLIC_UMAMI_SCRIPT_URL,
		PUBLIC_UMAMI_HOST_URL,
		PUBLIC_UMAMI_DOMAINS,
		PUBLIC_UMAMI_TAG,
		PUBLIC_UMAMI_PERFORMANCE,
		PUBLIC_UMAMI_EXCLUDE_SEARCH,
		PUBLIC_UMAMI_EXCLUDE_HASH,
		PUBLIC_UMAMI_DO_NOT_TRACK
	} from '$app/env/public';

	import LanguageSelect from '#lib/components/layout/language-select.svelte';
	import ScrollToTop from '#lib/components/layout/scroll-to-top.svelte';
	import ThemeToggle from '#lib/components/layout/theme-toggle.svelte';
	import { Toaster } from '#lib/components/ui/sonner/index.js';
	import * as Tooltip from '#lib/components/ui/tooltip/index.js';
	import { ModeWatcher } from 'mode-watcher';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="favicon.svg" />

	<!-- Analytics -->
	{#if PUBLIC_UMAMI_WEBSITE_ID && PUBLIC_UMAMI_SCRIPT_URL}
		<script
			defer
			src={PUBLIC_UMAMI_SCRIPT_URL}
			data-website-id={PUBLIC_UMAMI_WEBSITE_ID}
			data-host-url={PUBLIC_UMAMI_HOST_URL}
			data-domains={PUBLIC_UMAMI_DOMAINS}
			data-tag={PUBLIC_UMAMI_TAG}
			data-performance={PUBLIC_UMAMI_PERFORMANCE}
			data-exclude-search={PUBLIC_UMAMI_EXCLUDE_SEARCH}
			data-exclude-hash={PUBLIC_UMAMI_EXCLUDE_HASH}
			data-do-not-track={PUBLIC_UMAMI_DO_NOT_TRACK}
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
