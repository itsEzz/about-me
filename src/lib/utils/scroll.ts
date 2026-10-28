import { goto } from '$app/navigation';
import { resolve } from '$app/paths';

export async function handleClickScrollTo(id: string) {
	const section = document.getElementById(id);
	section?.scrollIntoView({ behavior: 'smooth' });
	await goto(resolve(''), { shallow: true, replace: true, state: `#${id}` });
}
