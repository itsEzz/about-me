import { replaceState } from "$app/navigation";

export function handleClickScrollTo(id: string) {
	const section = document.getElementById(id);
	section?.scrollIntoView({ behavior: 'smooth' });
	replaceState('', `#${id}`);
}
