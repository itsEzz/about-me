import type { Project } from './types/projects';

export const projects: Project[] = [
	{
		title: 'Whispr',
		description:
			'A secure web application for sharing encrypted messages with configurable expiration and view limits. Create temporary, password-protected messages that self-destruct after being viewed or expiring.',
		tags: [
			'web-app',
			'sveltekit',
			'typescript',
			'tailwindcss',
			'drizzle-orm',
			'privacy',
			'security',
			'encryption',
			'temporary-messages'
		],
		type: 'website',
		repoUrl: 'https://github.com/itsEzz/whispr',
		liveUrl: 'https://whispr.itsezz.de/'
	},
	{
		title: 'OBD Tools',
		description:
			'A lightweight collection of free, open-source online tools for working with OBD-II data — built specifically for the VAG community and OBDeleven users.',
		tags: [
			'web-app',
			'sveltekit',
			'typescript',
			'tailwindcss',
			'obd-ii',
			'automotive-diagnostics',
			'tools'
		],
		type: 'website',
		repoUrl: 'https://github.com/itsEzz/obd-tools',
		liveUrl: 'https://obd.itsezz.de/'
	},
	{
		title: 'try-catch',
		description:
			'A lightweight TypeScript utility for elegant error handling using the Result pattern. Say goodbye to messy try/catch blocks and hello to type-safe, composable error management.',
		tags: ['library', 'typescript', 'error-handling', 'try-catch', 'result', 'utility'],
		type: 'package',
		repoUrl: 'https://github.com/itsEzz/try-catch',
		liveUrl: 'https://www.npmjs.com/package/@itsezz/try-catch'
	},
	{
		title: 'svelte-axios-plus',
		description:
			'A Svelte-optimized Axios wrapper that provides reactive request handling, built-in caching, and simplified state management for HTTP requests.',
		tags: ['library', 'sveltekit', 'typescript', 'axios', 'http-client', 'requests', 'utility'],
		type: 'package',
		repoUrl: 'https://github.com/itsEzz/svelte-axios-plus',
		liveUrl: 'https://www.npmjs.com/package/svelte-axios-plus'
	}
];
