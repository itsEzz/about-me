<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Project } from '$lib/types/projects';
	import { ExternalLink } from '@lucide/svelte';

	// Props
	let { title, description, tags, type, repoUrl, liveUrl }: Project = $props();
</script>

<Card.Root>
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
				{#each tags as tag}
					<Badge variant={'secondary'}>
						{tag}
					</Badge>
				{/each}
			</div>
		{/if}
	</Card.Content>
	<Card.Footer class="flex flex-wrap gap-2 mt-auto">
		{#if repoUrl}
			<Button
				variant="secondary"
				href={repoUrl}
				rel="external noopener noreferrer"
				target="_blank"
				aria-label="View {title} source code on GitHub (opens in new tab)"
			>
				<ExternalLink aria-hidden="true" />
				Source code
			</Button>
		{/if}

		{#if liveUrl}
			<Button
				variant="default"
				href={liveUrl}
				rel="external noopener noreferrer"
				target="_blank"
				aria-label="View {title} live demo (opens in new tab)"
			>
				<ExternalLink aria-hidden="true" />
				{#if type === 'website'}
					Live Demo
				{:else if type === 'package'}
					NPM Package
				{/if}
			</Button>
		{/if}
	</Card.Footer>
</Card.Root>
