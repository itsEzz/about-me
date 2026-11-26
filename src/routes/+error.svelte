<script lang="ts">
	import FuzzyText from '#lib/components/svelte-bits/fuzzy-text.svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { HouseIcon } from '@lucide/svelte';
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-6">
	<FuzzyText
		text={page.status.toString()}
		colorSplit={0.6}
		trigger="hover"
		direction="horizontal"
		baseIntensity={0.04}
		hoverIntensity={0.2}
		fuzzRange={50}
		sliceSize={5}
		fps={60}
		transitionDuration={4}
		intro
		introDuration={1100}
		letterSpacing={0}
		enableHover
		clickEffect={false}
		glitchMode={false}
		glitchInterval={1600}
		glitchDuration={240}
		fontSize={140}
	/>
	<Button href={resolve('/')}><HouseIcon /> {m.back_home()}</Button>
</div>
