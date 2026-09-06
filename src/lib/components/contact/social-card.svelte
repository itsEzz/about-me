<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Component } from 'svelte';
	import type { IconProps } from '@lucide/svelte';

	// Props
	interface Props {
		icon: Component<IconProps, object, ''>;
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
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground/10"
			>
				<CardIcon size={24} aria-hidden="true" />
			</div>
			<div>
				<h4 class="font-semibold text-foreground">
					{title}
				</h4>
				<p class="mb-2 text-sm text-muted-foreground">
					{description}
				</p>
				<a
					{href}
					target="_blank"
					rel="external noopener noreferrer"
					aria-label="Visit {title} profile (opens in new tab)"
					class="inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline"
					data-umami-event="contact-social-{title.toLowerCase()}"
				>
					{href.replace('https://', '')}
				</a>
			</div>
		</div>
	</Card.Content>
</Card.Root>
