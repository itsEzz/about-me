import { goto } from '$app/navigation';
import { resolve } from '$app/paths';

export function handleClickScrollTo(id: string) {
	const section = document.getElementById(id);
	section?.scrollIntoView({ behavior: 'smooth' });
	goto(resolve(''), { shallow: true, replace: true, state: `#${id}` });
}
