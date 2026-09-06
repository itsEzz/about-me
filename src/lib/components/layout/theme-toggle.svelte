<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { m } from '$lib/paraglide/messages';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import SunIcon from '@lucide/svelte/icons/sun';
	import { toggleMode } from 'mode-watcher';
</script>

<Tooltip.Root>
	<Tooltip.Trigger
		class={buttonVariants({ variant: 'ghost', size: 'icon' })}
		onclick={toggleMode}
		aria-label={m.toggle_theme()}
		data-umami-event="toggle-theme"
	>
		<SunIcon
			class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
			aria-hidden="true"
		/>
		<MoonIcon
			class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
			aria-hidden="true"
		/>
		<span class="sr-only">{m.toggle_theme()}</span>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>{m.toggle_theme()}</p>
	</Tooltip.Content>
</Tooltip.Root>
