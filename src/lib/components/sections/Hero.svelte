<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import GithubIcon from '@lucide/svelte/icons/github';
	import LinkedinIcon from '@lucide/svelte/icons/linkedin';
	import MailIcon from '@lucide/svelte/icons/mail';
	import { fly } from 'svelte/transition';
	import Particles from '../hero/particles.svelte';

	// Handler Functions
	function handleClickScrollTo(id: string) {
		const aboutSection = document.getElementById(id);
		aboutSection?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="flex min-h-screen items-center justify-center">
	<Particles />
	<div class="flex w-full flex-col items-center gap-8 md:gap-12">
		<div
			class="overflow-hidden rounded-full shadow-2xl shadow-primary/20"
			transition:fly={{ duration: 1000, y: -200 }}
		>
			<img
				src="/avatar_large.png"
				alt="Adrian"
				class="size-48 object-cover transition-transform hover:scale-115 md:size-64"
			/>
		</div>
		<div class="flex flex-col items-center gap-4 text-center">
			<h1
				class="text-4xl font-extrabold md:text-7xl"
				transition:fly={{ delay: 100, duration: 1000, y: 200 }}
			>
				Hi, I am <span class="text-primary">Adrian</span>
			</h1>
			<h2
				class="text-xl font-medium text-muted-foreground md:text-3xl"
				transition:fly={{ delay: 200, duration: 1000, y: 200 }}
			>
				Full-Stack Developer & Tech Enthusiast
			</h2>
		</div>
		<div class="flex justify-center gap-2">
			<div transition:fly={{ delay: 300, duration: 1000, y: 200 }}>
				<Button
					class="cursor-pointer"
					href="https://github.com/itsEzz"
					target="_blank"
					rel="noreferrer noopener"
				>
					<GithubIcon /> GitHub
				</Button>
			</div>
			<div transition:fly={{ delay: 300, duration: 1000, y: 200 }}>
				<Button
					class="cursor-pointer"
					href="https://www.linkedin.com/in/adriangast/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<LinkedinIcon /> LinkedIn
				</Button>
			</div>
			<div transition:fly={{ delay: 300, duration: 1000, y: 200 }}>
				<Button class="cursor-pointer" onclick={() => handleClickScrollTo('contact-section')}>
					<MailIcon />
					Contact Me
				</Button>
			</div>
		</div>
		<div transition:fly={{ delay: 400, duration: 1000, y: 200 }}>
			<Button
				class="mt-4 animate-bounce cursor-pointer transition-all hover:scale-105"
				variant="outline"
				size="lg"
				aria-label="Scroll to about section"
				onclick={() => handleClickScrollTo('about-section')}
			>
				<ChevronDownIcon />
				Learn More
			</Button>
		</div>
	</div>
</section>
