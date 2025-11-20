<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Component } from 'svelte';
	import type { IconProps } from '@lucide/svelte';

	interface Props {
		icon: Component<IconProps, {}, ''>;
		title: string;
		description: string;
		href: string;
	}

	let { icon: CardIcon, title, description, href }: Props = $props();
</script>

<Card.Root
	class="group bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
>
	<Card.Content>
		<div class="flex items-start gap-4">
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground/10 transition-colors duration-300 group-hover:bg-primary/10"
			>
				<CardIcon size={24} class="transition-colors duration-300 group-hover:text-primary" />
			</div>
			<div>
				<h4
					class="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary"
				>
					{title}
				</h4>
				<p class="mb-2 text-sm text-muted-foreground">
					{description}
				</p>
				<a
					{href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit {title} profile (opens in new tab)"
					class="inline-flex items-center gap-2 text-primary underline-offset-4 transition-all duration-300 hover:gap-3 hover:underline"
				>
					{href.replace('https://', '')}
				</a>
			</div>
		</div>
	</Card.Content>
</Card.Root>
