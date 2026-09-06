<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { m } from '$lib/paraglide/messages';
	import type { Project } from '$lib/types/projects';
	import { ExternalLink } from '@lucide/svelte';

	// Props
	let { title, description, tags, type, repoUrl, liveUrl }: Project = $props();
</script>

<Card.Root class="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
	<Card.Header>
		<Card.Title class="text-xl">
			{#if type === 'website'}
				🌐
			{:else if type === 'package'}
				📦
			{/if}
			{title}
		</Card.Title>
	</Card.Header>

	<Card.Content class="flex flex-col gap-4">
		<Card.Description>
			{description}
		</Card.Description>

		{#if tags.length > 0}
			<div class="flex flex-wrap gap-1.5">
				{#each tags as tag (tag)}
					<Badge variant="secondary">
						{tag}
					</Badge>
				{/each}
			</div>
		{/if}
	</Card.Content>
	<Card.Footer class="mt-auto flex flex-wrap gap-2">
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
	</Card.Footer>
</Card.Root>
