export interface Project {
	title: string;
	description: string;
	tags: string[];
	type: 'package' | 'website';
	repoUrl?: string;
	liveUrl?: string;
}
