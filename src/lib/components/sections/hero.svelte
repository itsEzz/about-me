<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { handleClickScrollTo } from '#lib/utils/scroll.js';
	import { ExternalLinkIcon } from '@lucide/svelte';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import MailIcon from '@lucide/svelte/icons/mail';
	import { mode } from 'mode-watcher';
	import { fly } from 'svelte/transition';
	import FaultyTerminal from '../svelte-bits/faulty-terminal.svelte';
	import ProfileCard from '../svelte-bits/profile-card.svelte';
</script>

<section class="flex min-h-screen items-center justify-center">
	<div class="absolute inset-0 -z-1">
		<FaultyTerminal
			tint="#8f8f8f"
			glyphs="blocks"
			scale={2}
			digitSize={1.2}
			timeScale={0.5}
			brightness={0.1}
			glow={0.5}
			persistence={0.5}
			mouseStrength={0.5}
			mouseGlow={0.6}
			curvature={0.1}
			vignette={0.25}
			clickEffect="none"
			scramble={0.5}
			scanlineIntensity={0.3}
			glitchAmount={1}
			flickerAmount={0.5}
			noiseAmp={1}
			chromaticAberration={0}
			mouseReact={false}
			pageLoadAnimation
			pause={false}
			lightMode={mode.current === 'light'}
		/>
	</div>
	<div class="flex w-full flex-col items-center gap-8 md:gap-12">
		<div transition:fly={{ duration: 1000, y: -200 }}>
			<ProfileCard
				avatarUrl="/profile_image.jpg"
				holo={0.8}
				glare={0.5}
				tiltStrength={12}
				parallax={0}
				radius={16}
				enableTilt
				intro
				enableMobileTilt
				theme={mode.current}
				class="w-48! md:w-72!"
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
			<Button
				variant="secondary"
				class="animate-bounce hover:scale-115"
				size="lg"
				onclick={() => handleClickScrollTo('projects')}
				data-umami-event="hero-learn-more"
			>
				<ChevronDownIcon aria-hidden="true" />
				{m.learn_more()}
			</Button>
		</div>
	</div>
</section>
