<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { projects } from '$lib/projects';
	import ProjectCard from '../projects/project-card.svelte';
	import LogoLoop, { type LogoItem } from '../svelte-bits/logo-loop.svelte';

	// Variables & States
	const DEVICONS_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

	const logos: LogoItem[] = [
		// Languages & core web
		{
			src: `${DEVICONS_BASE}/typescript/typescript-original.svg`,
			alt: 'TypeScript',
			title: 'TypeScript',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/javascript/javascript-original.svg`,
			alt: 'JavaScript',
			title: 'JavaScript',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/python/python-original.svg`,
			alt: 'Python',
			title: 'Python',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/html5/html5-original.svg`,
			alt: 'HTML5',
			title: 'HTML',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/c/c-original.svg`,
			alt: 'C',
			title: 'C',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/cplusplus/cplusplus-original.svg`,
			alt: 'C++',
			title: 'C++',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/csharp/csharp-original.svg`,
			alt: 'C#',
			title: 'C#',
			width: 32,
			height: 32
		},

		// Frontend frameworks & UI
		{
			src: `${DEVICONS_BASE}/svelte/svelte-original.svg`,
			alt: 'Svelte',
			title: 'Svelte',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/react/react-original.svg`,
			alt: 'React',
			title: 'React',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/nextjs/nextjs-original.svg`,
			alt: 'Next.js',
			title: 'Next.js',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/tailwindcss/tailwindcss-original.svg`,
			alt: 'Tailwind CSS',
			title: 'Tailwind CSS',
			width: 32,
			height: 32
		},

		// Backend & full‑stack
		{
			src: `${DEVICONS_BASE}/nodejs/nodejs-original.svg`,
			alt: 'Node.js',
			title: 'Node.js',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/express/express-original.svg`,
			alt: 'Express.js',
			title: 'Express.js',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/flask/flask-original.svg`,
			alt: 'Flask',
			title: 'Flask',
			width: 32,
			height: 32
		},

		// Data & ORMs
		{
			src: `${DEVICONS_BASE}/prisma/prisma-original.svg`,
			alt: 'Prisma',
			title: 'Prisma',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/postgresql/postgresql-original.svg`,
			alt: 'PostgreSQL',
			title: 'PostgreSQL',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/mysql/mysql-original.svg`,
			alt: 'MySQL',
			title: 'MySQL',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/mongodb/mongodb-original.svg`,
			alt: 'MongoDB',
			title: 'MongoDB',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/sqlite/sqlite-original.svg`,
			alt: 'SQLite',
			title: 'SQLite',
			width: 32,
			height: 32
		},

		// Tooling & infra
		{
			src: `${DEVICONS_BASE}/pnpm/pnpm-original.svg`,
			alt: 'pnpm',
			title: 'pnpm',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/git/git-original.svg`,
			alt: 'Git',
			title: 'Git',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/vitejs/vitejs-original.svg`,
			alt: 'Vite',
			title: 'Vite',
			width: 32,
			height: 32
		},
		{
			src: `${DEVICONS_BASE}/docker/docker-original.svg`,
			alt: 'Docker',
			title: 'Docker',
			width: 32,
			height: 32
		}
	];
</script>

<section class="min-h-screen bg-secondary/50 px-4 py-20" id="projects">
	<div class="mx-auto max-w-6xl">
		<div class="text-center">
			<h2 class="mb-6 text-3xl font-bold text-foreground md:text-4xl">
				{m.projects_techstack_title()}
			</h2>
			<div class="mx-auto h-1 w-20 rounded-full bg-primary"></div>
		</div>

		<div class="flex flex-col gap-4">
			<div class="flex flex-col items-center gap-2">
				<LogoLoop
					{logos}
					speed={50}
					logoHeight={60}
					gap={60}
					direction="left"
					fadeOut={false}
					scaleOnHover={true}
					class="mt-8"
				/>
				<span class="text-muted-foreground">{m.projects_techstack_more()}</span>
			</div>

			<div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
				{#each projects as project (project.title)}
					<ProjectCard
						title={project.title}
						description={project.description}
						tags={project.tags}
						type={project.type}
						repoUrl={project.repoUrl}
						liveUrl={project.liveUrl}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
