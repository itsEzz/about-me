<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { m } from '$lib/paraglide/messages';
	import { cn } from '$lib/utils';
	import { handleClickScrollTo } from '$lib/utils/scroll';
	import { ExternalLinkIcon } from '@lucide/svelte';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import MailIcon from '@lucide/svelte/icons/mail';
	import { mode } from 'mode-watcher';
	import { fly } from 'svelte/transition';
	import FaultyTerminal from '../svelte-bits/faulty-terminal.svelte';
</script>

<section class="flex min-h-screen items-center justify-center">
	<div class="absolute inset-0 -z-1">
		<FaultyTerminal
			scale={2}
			digitSize={1.4}
			timeScale={0.3}
			scanlineIntensity={0.5}
			curvature={0.1}
			tint={mode.current === 'dark' ? '#8f8f8f' : '#121212'}
			mouseReact={false}
			mouseStrength={0.3}
			pageLoadAnimation={true}
			noiseAmp={1}
			brightness={0.6}
		/>
	</div>
	<div class="flex w-full flex-col items-center gap-8 md:gap-12">
		<div class="overflow-hidden rounded-full" transition:fly={{ duration: 1000, y: -200 }}>
			<img
				src="/avatar_large.png"
				alt={m.avatar_alt()}
				class="size-48 object-cover transition-transform hover:scale-115 md:size-64"
			/>
		</div>
		<div class="flex flex-col items-center gap-4 text-center">
			<h1
				class="text-4xl font-extrabold md:text-7xl"
				transition:fly={{ delay: 100, duration: 1000, y: 200 }}
			>
				{m.hero_greeting_prefix()} <span class="text-primary">{m.hero_greeting_name()}</span>
			</h1>
			<h2
				class="text-xl font-medium text-muted-foreground md:text-3xl"
				transition:fly={{ delay: 200, duration: 1000, y: 200 }}
			>
				{m.hero_description()}
			</h2>
		</div>
		<div class="flex justify-center gap-2">
			<div transition:fly={{ delay: 300, duration: 1000, y: 200 }}>
				<Button
					href="https://github.com/itsEzz"
					target="_blank"
					rel="external noreferrer noopener"
					data-umami-event="hero-github"
				>
					<ExternalLinkIcon aria-hidden="true" />
					{m.github()}
				</Button>
			</div>
			<div transition:fly={{ delay: 300, duration: 1000, y: 200 }}>
				<Button
					href="https://www.linkedin.com/in/adriangast/"
					target="_blank"
					rel="external noreferrer noopener"
					data-umami-event="hero-linkedin"
				>
					<ExternalLinkIcon aria-hidden="true" />
					{m.linkedin()}
				</Button>
			</div>
			<div transition:fly={{ delay: 300, duration: 1000, y: 200 }}>
				<Button onclick={() => handleClickScrollTo('contact')} data-umami-event="hero-contact-me">
					<MailIcon aria-hidden="true" />
					{m.contact_me()}
				</Button>
			</div>
		</div>
		<div transition:fly={{ delay: 400, duration: 1000, y: 200 }}>
			<Tooltip.Root>
				<Tooltip.Trigger
					class={cn(
						'animate-bounce hover:scale-115',
						buttonVariants({ variant: 'secondary', size: 'icon-lg' })
					)}
					onclick={() => handleClickScrollTo('projects')}
					data-umami-event="hero-learn-more"
				>
					<ChevronDownIcon aria-hidden="true" />
					<span class="sr-only">{m.learn_more()}</span>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>{m.learn_more()}</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	</div>
</section>
