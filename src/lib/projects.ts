import { m } from './paraglide/messages';
import type { Project } from './types/projects';

export const projects: Project[] = [
	{
		title: 'Whispr',
		description: m.projects_whispir_description(),
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
		description: m.projects_obd_tools_description(),
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
		description: m.projects_try_catch_description(),
		tags: ['library', 'typescript', 'error-handling', 'try-catch', 'result', 'utility'],
		type: 'package',
		repoUrl: 'https://github.com/itsEzz/try-catch',
		liveUrl: 'https://www.npmjs.com/package/@itsezz/try-catch'
	},
	{
		title: 'svelte-axios-plus',
		description: m.projects_svelte_axios_plus_description(),
		tags: ['library', 'sveltekit', 'typescript', 'axios', 'http-client', 'requests', 'utility'],
		type: 'package',
		repoUrl: 'https://github.com/itsEzz/svelte-axios-plus',
		liveUrl: 'https://www.npmjs.com/package/svelte-axios-plus'
	}
];
