<script lang="ts">
	import Badge from '#lib/components/ui/badge/badge.svelte';
	import Button from '#lib/components/ui/button/button.svelte';
	import { m } from '#lib/paraglide/messages.js';
	import type { Project } from '#lib/types/projects.js';
	import { ExternalLink } from '@lucide/svelte';
	import { mode } from 'mode-watcher';
	import BorderGlow from '../svelte-bits/border-glow.svelte';

	// Props
	let { title, description, tags, type, repoUrl, liveUrl }: Project = $props();
</script>

<BorderGlow
	edgeSensitivity={30}
	glowColor={mode.current === 'dark' ? '40 80 80' : '181 145 91'}
	backgroundColor={mode.current === 'dark' ? '#171717' : '#fafafa'}
	borderRadius={14}
	glowRadius={42}
	glowIntensity={mode.current === 'dark' ? 0.55 : 0.38}
	coneSpread={25}
	animated={false}
	colors={mode.current === 'dark'
		? ['#FF8A4C', '#fbbf24', '#38bdf8']
		: ['#d8a34a', '#ead197', '#dbe4ea']}
	class="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
>
	<div class="flex h-full flex-col gap-4 p-6">
		<div class="mb-2 text-xl">
			{#if type === 'website'}
				🌐
			{:else if type === 'package'}
				📦
			{/if}
			{title}
		</div>
		<div class="text-sm text-muted-foreground">
			{description}
		</div>
		<div>
			{#if tags.length > 0}
				<div class="flex flex-wrap gap-1.5">
					{#each tags as tag (tag)}
						<Badge variant="secondary">
							{tag}
						</Badge>
					{/each}
				</div>
			{/if}
		</div>
		<div class="mt-auto flex flex-wrap gap-2">
			{#if repoUrl}
				<Button
					variant="secondary"
					href={repoUrl}
					rel="external noopener noreferrer"
					target="_blank"
					aria-label={m.projects_source_code_aria_label({ title })}
					data-umami-event="projects-source-code-{title.toLowerCase()}"
				>
					<ExternalLink aria-hidden="true" />
					{m.projects_source_code()}
				</Button>
			{/if}

			{#if liveUrl}
				<Button
					variant="default"
					href={liveUrl}
					rel="external noopener noreferrer"
					target="_blank"
					aria-label={m.projects_demo_aria_label({ title })}
					data-umami-event="projects-demo-{title.toLowerCase()}"
				>
					<ExternalLink aria-hidden="true" />
					{#if type === 'website'}
						{m.projects_demo_website()}
					{:else if type === 'package'}
						{m.projects_demo_package()}
					{/if}
				</Button>
			{/if}
		</div>
	</div>
</BorderGlow>
