<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import FuzzyText from '$lib/components/svelte-bits/fuzzy-text.svelte';
	import { Button } from '$lib/components/ui/button';
	import { m } from '$lib/paraglide/messages';
	import { HouseIcon } from '@lucide/svelte';
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-6">
	<FuzzyText
		text={page.status.toString()}
		baseIntensity={0.2}
		hoverIntensity={0.5}
		enableHover={true}
		fuzzRange={30}
		fps={60}
		direction="horizontal"
		transitionDuration={0}
		clickEffect={true}
		glitchMode={false}
		glitchInterval={2000}
		glitchDuration={200}
		letterSpacing={0}
		fontSize={140}
	/>
	<Button href={resolve('/')}><HouseIcon /> {m.back_home()}</Button>
</div>
