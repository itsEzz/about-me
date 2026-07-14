<script lang="ts">
	import { cn } from '$lib/utils';
	import { MediaQuery } from 'svelte/reactivity';
	import { OrbitingCircles } from '../magic/orbiting-circles';
	import ProjectCard from '../projects/project-card.svelte';
	import { projects } from '$lib/projects';

	// Variables & States
	const mobile = new MediaQuery('min-width: 640px');
	let radius = $derived<{ inner: number; middle: number; outer: number; icon: number }>(
		mobile.current
			? {
					inner: 60,
					middle: 120,
					outer: 180,
					icon: 40
				}
			: {
					inner: 35,
					middle: 70,
					outer: 105,
					icon: 30
				}
	);
</script>

<section class="min-h-screen bg-secondary/50 px-4 py-20" id="projects">
	<div class="mx-auto max-w-6xl">
		<div class="text-center">
			<h2 class="mb-6 text-3xl font-bold text-foreground md:text-4xl">Projects & Tech Stack</h2>
			<div class="mx-auto h-1 w-20 rounded-full bg-primary"></div>
		</div>

		<div>
			<div
				class={cn(
					'relative flex w-full flex-col items-center justify-center overflow-hidden',
					mobile.current ? 'h-125' : 'h-80'
				)}
			>
				<span
					class="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl md:text-7xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10"
				>
					Tech Stack
				</span>

				<OrbitingCircles iconSize={radius.icon} duration={20} radius={radius.inner}>
					{@render svelte()}
				</OrbitingCircles>
				<OrbitingCircles
					iconSize={radius.icon}
					duration={20}
					radius={radius.inner}
					delay={-10}
					path
				>
					{@render typescript()}
				</OrbitingCircles>

				<OrbitingCircles iconSize={radius.icon} duration={20} radius={radius.middle} reverse path>
					{@render javascript()}
				</OrbitingCircles>
				<OrbitingCircles
					iconSize={radius.icon}
					duration={20}
					radius={radius.middle}
					reverse
					delay={-5}
				>
					{@render tailwindcss()}
				</OrbitingCircles>
				<OrbitingCircles
					iconSize={radius.icon}
					duration={20}
					radius={radius.middle}
					reverse
					delay={-10}
				>
					{@render nodejs()}
				</OrbitingCircles>
				<OrbitingCircles
					iconSize={radius.icon}
					duration={20}
					radius={radius.middle}
					reverse
					delay={-15}
				>
					{@render html5()}
				</OrbitingCircles>

				<OrbitingCircles iconSize={radius.icon} duration={20} radius={radius.outer} path>
					{@render vite()}
				</OrbitingCircles>
				<OrbitingCircles iconSize={radius.icon} duration={20} radius={radius.outer} delay={-4}>
					{@render git()}
				</OrbitingCircles>
				<OrbitingCircles iconSize={radius.icon} duration={20} radius={radius.outer} delay={-8}>
					{@render pnpm()}
				</OrbitingCircles>
				<OrbitingCircles iconSize={radius.icon} duration={20} radius={radius.outer} delay={-12}>
					{@render docker()}
				</OrbitingCircles>
				<OrbitingCircles iconSize={radius.icon} duration={20} radius={radius.outer} delay={-16}>
					{@render mysql()}
				</OrbitingCircles>
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

{#snippet typescript()}
	<svg
		width="100px"
		height="100px"
		viewBox="0 0 256 256"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		preserveAspectRatio="xMidYMid"
		fill="#000000"
		data-darkreader-inline-fill=""
		style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier">
			<g>
				<polygon
					fill="#007ACC"
					transform="translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) "
					points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"
					data-darkreader-inline-fill=""
					style="--darkreader-inline-fill: var(--darkreader-background-007acc, #0062a3);"
				>
				</polygon>
				<path
					d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z"
					fill="#FFFFFF"
					transform="translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) "
					data-darkreader-inline-fill=""
					style="--darkreader-inline-fill: var(--darkreader-background-ffffff, #181a1b);"
				>
				</path>
				<path
					d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z"
					fill="#FFFFFF"
					transform="translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) "
					data-darkreader-inline-fill=""
					style="--darkreader-inline-fill: var(--darkreader-background-ffffff, #181a1b);"
				>
				</path>
			</g>
		</g></svg
	>
{/snippet}

{#snippet svelte()}
	<svg
		width="100px"
		height="100px"
		viewBox="-26 0 308 308"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		preserveAspectRatio="xMidYMid"
		fill="#000000"
		data-darkreader-inline-fill=""
		style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier">
			<g>
				<path
					d="M239.681566,40.706757 C211.113272,-0.181889366 154.69089,-12.301439 113.894816,13.6910393 L42.2469062,59.3555354 C22.6760042,71.6680028 9.1958152,91.6538543 5.11196889,114.412133 C1.69420521,133.371174 4.6982178,152.928576 13.6483951,169.987905 C7.51549676,179.291145 3.33259428,189.7413 1.3524912,200.706787 C-2.77083771,223.902098 2.62286977,247.780539 16.3159596,266.951444 C44.8902975,307.843936 101.312954,319.958266 142.10271,293.967161 L213.75062,248.302665 C233.322905,235.991626 246.803553,216.005094 250.885557,193.246067 C254.302867,174.287249 251.30121,154.730228 242.355449,137.668922 C248.486748,128.365895 252.667894,117.916162 254.646134,106.951413 C258.772188,83.7560394 253.378243,59.8765465 239.682665,40.706757"
					fill="#FF3E00"
					data-darkreader-inline-fill=""
					style="--darkreader-inline-fill: var(--darkreader-background-ff3e00, #cc3200);"
				>
				</path>
				<path
					d="M106.888658,270.841265 C83.7871855,276.848065 59.3915045,267.805346 45.7864111,248.192566 C37.5477583,236.66102 34.3023491,222.296573 36.7830958,208.343155 C37.1989333,206.075414 37.7711933,203.839165 38.4957755,201.650433 L39.845476,197.534835 L43.5173097,200.231763 C51.9971301,206.462491 61.4784803,211.199728 71.5527203,214.239302 L74.2164003,215.047419 L73.9710252,217.705878 C73.6455499,221.487851 74.6696022,225.262925 76.8616703,228.361972 C80.9560313,234.269749 88.3011363,236.995968 95.2584831,235.190159 C96.8160691,234.773852 98.3006859,234.121384 99.6606718,233.25546 L171.331634,187.582718 C174.877468,185.349963 177.321139,181.729229 178.065299,177.605596 C178.808171,173.400048 177.830501,169.072361 175.351884,165.594581 C171.255076,159.685578 163.908134,156.9582 156.947927,158.762547 C155.392392,159.178888 153.90975,159.83088 152.551509,160.695872 L125.202489,178.130144 C120.705281,180.989558 115.797437,183.144784 110.64897,184.521162 C87.547692,190.527609 63.1523949,181.484801 49.5475471,161.872188 C41.3085624,150.340895 38.0631179,135.976391 40.5442317,122.023052 C43.0002744,108.333716 51.1099574,96.3125326 62.8835328,88.9089537 L134.548175,43.2323647 C139.047294,40.3682559 143.958644,38.21032 149.111311,36.8336525 C172.21244,30.8273594 196.607527,39.8700206 210.212459,59.4823515 C218.451112,71.013898 221.696522,85.3783452 219.215775,99.3317627 C218.798144,101.59911 218.225915,103.835236 217.503095,106.024485 L216.153395,110.140083 L212.483484,107.447276 C204.004261,101.212984 194.522,96.4735732 184.44615,93.4336926 L181.78247,92.6253012 L182.027845,89.9668419 C182.350522,86.1852063 181.326723,82.4111645 179.1372,79.3110228 C175.042839,73.4032457 167.697734,70.677026 160.740387,72.4828355 C159.182801,72.8991426 157.698185,73.5516104 156.338199,74.4175344 L84.6672364,120.0922 C81.1218886,122.323199 78.6795938,125.943704 77.9387928,130.066574 C77.1913232,134.271925 78.1673502,138.601163 80.6469865,142.078963 C84.7438467,147.987899 92.0907405,150.71526 99.0509435,148.910997 C100.608143,148.493836 102.092543,147.841423 103.452857,146.976298 L130.798305,129.548621 C135.293566,126.685437 140.201191,124.528302 145.350175,123.152382 C168.451453,117.145935 192.846751,126.188743 206.451598,145.801356 C214.690583,157.332649 217.936027,171.697153 215.454914,185.650492 C212.997261,199.340539 204.888162,211.362752 193.115613,218.769811 L121.450695,264.442553 C116.951576,267.306662 112.040226,269.464598 106.887559,270.841265"
					fill="#FFFFFF"
					data-darkreader-inline-fill=""
					style="--darkreader-inline-fill: var(--darkreader-background-ffffff, #181a1b);"
				>
				</path>
			</g>
		</g></svg
	>
{/snippet}

{#snippet mysql()}
	<svg
		width="100px"
		height="100px"
		viewBox="0 0 32 32"
		xmlns="http://www.w3.org/2000/svg"
		fill="#000000"
		data-darkreader-inline-fill=""
		style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier"
			><title>file_type_mysql</title><path
				d="M8.785,6.865a3.055,3.055,0,0,0-.785.1V7h.038a6.461,6.461,0,0,0,.612.785c.154.306.288.611.441.917.019-.019.038-.039.038-.039a1.074,1.074,0,0,0,.4-.957,4.314,4.314,0,0,1-.23-.4c-.115-.191-.364-.287-.517-.44"
				style="fill: rgb(93, 135, 161); fill-rule: evenodd; --darkreader-inline-fill: var(--darkreader-text-5d87a1, #6e94ab);"
				data-darkreader-inline-fill=""
			></path><path
				d="M27.78,23.553a8.849,8.849,0,0,0-3.712.536c-.287.115-.745.115-.785.478.154.153.172.4.307.613a4.467,4.467,0,0,0,.995,1.167c.4.306.8.611,1.225.879.745.461,1.588.728,2.314,1.187.422.268.842.612,1.264.9.21.153.343.4.611.5v-.058a3.844,3.844,0,0,0-.291-.613c-.191-.19-.383-.363-.575-.554a9.118,9.118,0,0,0-1.99-1.932c-.613-.422-1.953-1-2.2-1.7l-.039-.039a7.69,7.69,0,0,0,1.321-.308c.65-.172,1.243-.133,1.912-.3.307-.077.862-.268.862-.268v-.3c-.342-.34-.587-.795-.947-1.116a25.338,25.338,0,0,0-3.122-2.328c-.587-.379-1.344-.623-1.969-.946-.226-.114-.6-.17-.737-.36a7.594,7.594,0,0,1-.776-1.457c-.548-1.04-1.079-2.193-1.551-3.293a20.236,20.236,0,0,0-.965-2.157A19.078,19.078,0,0,0,11.609,5a9.07,9.07,0,0,0-2.421-.776c-.474-.02-.946-.057-1.419-.075A7.55,7.55,0,0,1,6.9,3.485C5.818,2.8,3.038,1.328,2.242,3.277,1.732,4.508,3,5.718,3.435,6.343A8.866,8.866,0,0,1,4.4,7.762c.133.322.171.663.3,1A22.556,22.556,0,0,0,5.687,11.3a8.946,8.946,0,0,0,.7,1.172c.153.209.417.3.474.645a5.421,5.421,0,0,0-.436,1.419,8.336,8.336,0,0,0,.549,6.358c.3.473,1.022,1.514,1.987,1.116.851-.34.662-1.419.908-2.364.056-.229.019-.379.132-.53V19.3s.483,1.061.723,1.6a10.813,10.813,0,0,0,2.4,2.59A3.514,3.514,0,0,1,14,24.657V25h.427A1.054,1.054,0,0,0,14,24.212a9.4,9.4,0,0,1-.959-1.16,24.992,24.992,0,0,1-2.064-3.519c-.3-.6-.553-1.258-.793-1.857-.11-.231-.11-.58-.295-.7a7.266,7.266,0,0,0-.884,1.313,11.419,11.419,0,0,0-.517,2.921c-.073.02-.037,0-.073.038-.589-.155-.792-.792-1.014-1.332a8.756,8.756,0,0,1-.166-5.164c.128-.405.683-1.681.461-2.068-.111-.369-.48-.58-.682-.871a7.767,7.767,0,0,1-.663-1.237C5.912,9.5,5.69,8.3,5.212,7.216a10.4,10.4,0,0,0-.921-1.489A9.586,9.586,0,0,1,3.276,4.22c-.092-.213-.221-.561-.074-.793a.3.3,0,0,1,.259-.252c.238-.212.921.058,1.16.174a9.2,9.2,0,0,1,1.824.967c.258.194.866.685.866.685h.18c.612.133,1.3.037,1.876.21a12.247,12.247,0,0,1,2.755,1.32,16.981,16.981,0,0,1,5.969,6.545c.23.439.327.842.537,1.3.4.94.9,1.9,1.3,2.814a12.578,12.578,0,0,0,1.36,2.564c.286.4,1.435.612,1.952.822a13.7,13.7,0,0,1,1.32.535c.651.4,1.3.861,1.913,1.3.305.23,1.262.708,1.32,1.091"
				style="fill: rgb(0, 117, 143); fill-rule: evenodd; --darkreader-inline-fill: var(--darkreader-text-00758f, #68e4ff);"
				data-darkreader-inline-fill=""
			></path></g
		></svg
	>
{/snippet}

{#snippet docker()}
	<svg
		width="100px"
		height="100px"
		viewBox="0 0 16 16"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier"
			><path
				fill="#2396ED"
				d="M12.342 4.536l.15-.227.262.159.116.083c.28.216.869.768.996 1.684.223-.04.448-.06.673-.06.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2.044 2.044 0 01-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.081 7.081 0 01-1.74 1.488 7.941 7.941 0 01-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.25 8.25 0 01-.461-2.83.516.516 0 01.432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 01.3-.81l.108-.187zM2.89 5.784l.04.007a.127.127 0 01.077.082l.006.04v1.315l-.006.041a.127.127 0 01-.078.082l-.039.006H1.478a.124.124 0 01-.117-.088l-.007-.04V5.912l.007-.04a.127.127 0 01.078-.083l.039-.006H2.89zm1.947 0l.039.007a.127.127 0 01.078.082l.006.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H3.424a.125.125 0 01-.117-.088L3.3 7.23V5.913a.13.13 0 01.085-.123l.039-.007h1.413zm1.976 0l.039.007a.127.127 0 01.077.082l.007.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H5.4a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.039-.006h1.413zm1.952 0l.039.007a.127.127 0 01.078.082l.007.04v1.315a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.412zm1.97 0l.039.007a.127.127 0 01.078.082l.006.04v1.315a.13.13 0 01-.085.123l-.039.006H9.322a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.411zM4.835 3.892l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H3.424a.125.125 0 01-.117-.09l-.007-.04V4.021a.13.13 0 01.085-.122l.039-.007h1.412zm1.976 0l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H5.4a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.039-.007h1.412zm1.953 0c.054 0 .1.037.117.088l.007.041v1.315a.13.13 0 01-.085.123l-.04.007H7.353a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.04-.007h1.412zm0-1.892c.054 0 .1.037.117.088l.007.04v1.316a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V2.128l.006-.04a.127.127 0 01.078-.082L7.353 2h1.412z"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: var(--darkreader-background-2396ed, #0f6cb3);"
			></path></g
		></svg
	>
{/snippet}

{#snippet pnpm()}
	<svg
		width="100px"
		height="100px"
		viewBox="0 0 32 32"
		xmlns="http://www.w3.org/2000/svg"
		fill="#000000"
		data-darkreader-inline-fill=""
		style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier"
			><title>file_type_light_pnpm</title><path
				d="M30,10.75H21.251V2H30Z"
				style="fill: rgb(249, 173, 0); --darkreader-inline-fill: var(--darkreader-text-f9ad00, #ffba1e);"
				data-darkreader-inline-fill=""
			></path><path
				d="M20.374,10.75h-8.75V2h8.75Z"
				style="fill: rgb(249, 173, 0); --darkreader-inline-fill: var(--darkreader-text-f9ad00, #ffba1e);"
				data-darkreader-inline-fill=""
			></path><path
				d="M10.749,10.75H2V2h8.749Z"
				style="fill: rgb(249, 173, 0); --darkreader-inline-fill: var(--darkreader-text-f9ad00, #ffba1e);"
				data-darkreader-inline-fill=""
			></path><path
				d="M30,20.375H21.251v-8.75H30Z"
				style="fill: rgb(249, 173, 0); --darkreader-inline-fill: var(--darkreader-text-f9ad00, #ffba1e);"
				data-darkreader-inline-fill=""
			></path><path
				d="M20.374,20.375h-8.75v-8.75h8.75Z"
				style="fill: rgb(78, 78, 78); --darkreader-inline-fill: var(--darkreader-text-4e4e4e, #b7b0a7);"
				data-darkreader-inline-fill=""
			></path><path
				d="M20.374,30h-8.75V21.25h8.75Z"
				style="fill: rgb(78, 78, 78); --darkreader-inline-fill: var(--darkreader-text-4e4e4e, #b7b0a7);"
				data-darkreader-inline-fill=""
			></path><path
				d="M30,30H21.251V21.25H30Z"
				style="fill: rgb(78, 78, 78); --darkreader-inline-fill: var(--darkreader-text-4e4e4e, #b7b0a7);"
				data-darkreader-inline-fill=""
			></path><path
				d="M10.749,30H2V21.25h8.749Z"
				style="fill: rgb(78, 78, 78); --darkreader-inline-fill: var(--darkreader-text-4e4e4e, #b7b0a7);"
				data-darkreader-inline-fill=""
			></path></g
		></svg
	>
{/snippet}

{#snippet vite()}
	<svg
		width="100px"
		height="100px"
		viewBox="0 0 32 32"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier"
			><title>file_type_vite</title><path
				d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z"
				fill="url(#paint0_linear)"
			></path><path
				d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z"
				fill="url(#paint1_linear)"
			></path><defs id="defs50"
				><linearGradient
					id="paint0_linear"
					x1="6.0002"
					y1="32.9999"
					x2="235"
					y2="344"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
					><stop
						stop-color="#41D1FF"
						id="stop38"
						data-darkreader-inline-stopcolor=""
						style="--darkreader-inline-stopcolor: var(--darkreader-background-41d1ff, #007da5);"
					></stop><stop
						offset="1"
						stop-color="#BD34FE"
						id="stop40"
						data-darkreader-inline-stopcolor=""
						style="--darkreader-inline-stopcolor: var(--darkreader-background-bd34fe, #7501ad);"
					></stop></linearGradient
				><linearGradient
					id="paint1_linear"
					x1="194.651"
					y1="8.8182"
					x2="236.076"
					y2="292.989"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
					><stop
						stop-color="#FFEA83"
						id="stop43"
						data-darkreader-inline-stopcolor=""
						style="--darkreader-inline-stopcolor: var(--darkreader-background-ffea83, #5e4e00);"
					></stop><stop
						offset=".0833"
						stop-color="#FFDD35"
						id="stop45"
						data-darkreader-inline-stopcolor=""
						style="--darkreader-inline-stopcolor: var(--darkreader-background-ffdd35, #816b00);"
					></stop><stop
						offset="1"
						stop-color="#FFA800"
						id="stop47"
						data-darkreader-inline-stopcolor=""
						style="--darkreader-inline-stopcolor: var(--darkreader-background-ffa800, #cc8600);"
					></stop></linearGradient
				></defs
			></g
		></svg
	>
{/snippet}

{#snippet git()}
	<svg
		width="100px"
		height="100px"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier">
			<path
				d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z"
				fill="#EE513B"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: var(--darkreader-background-ee513b, #a5210e);"
			></path>
			<path
				d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z"
				fill="white"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: var(--darkreader-background-ffffff, #181a1b);"
			></path>
		</g></svg
	>
{/snippet}

{#snippet javascript()}
	<svg
		width="100px"
		height="100px"
		viewBox="0 0 256 256"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		preserveAspectRatio="xMidYMid"
		fill="#000000"
		data-darkreader-inline-fill=""
		style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier">
			<g>
				<path
					d="M0,0 L256,0 L256,256 L0,256 L0,0 Z"
					fill="#F7DF1E"
					data-darkreader-inline-fill=""
					style="--darkreader-inline-fill: var(--darkreader-background-f7df1e, #8a7b05);"
				>
				</path>
				<path
					d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
					fill="#000000"
					data-darkreader-inline-fill=""
					style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"
				>
				</path>
				<path
					d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
					fill="#000000"
					data-darkreader-inline-fill=""
					style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"
				>
				</path>
			</g>
		</g></svg
	>
{/snippet}

{#snippet nodejs()}
	<svg
		width="100px"
		height="100px"
		viewBox="-16.5 0 289 289"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		preserveAspectRatio="xMidYMid"
		fill="#000000"
		data-darkreader-inline-fill=""
		style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier">
			<g>
				<path
					d="M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z"
					fill="#539E43"
					data-darkreader-inline-fill=""
					style="--darkreader-inline-fill: var(--darkreader-background-539e43, #427e36);"
				>
				</path>
			</g>
		</g></svg
	>
{/snippet}

{#snippet tailwindcss()}
	<svg
		width="100px"
		height="100px"
		viewBox="0 -51 256 256"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		preserveAspectRatio="xMidYMid"
		fill="#000000"
		data-darkreader-inline-fill=""
		style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier">
			<defs>
				<linearGradient x1="-2.77777778%" y1="32%" x2="100%" y2="67.5555556%" id="linearGradient-1">
					<stop
						stop-color="#2298BD"
						offset="0%"
						data-darkreader-inline-stopcolor=""
						style="--darkreader-inline-stopcolor: var(--darkreader-background-2298bd, #1b7a97);"
					>
					</stop>
					<stop
						stop-color="#0ED7B5"
						offset="100%"
						data-darkreader-inline-stopcolor=""
						style="--darkreader-inline-stopcolor: var(--darkreader-background-0ed7b5, #0bac91);"
					>
					</stop>
				</linearGradient>
			</defs>
			<g>
				<path
					d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
					fill="url(#linearGradient-1)"
				>
				</path>
			</g>
		</g></svg
	>
{/snippet}

{#snippet html5()}
	<svg
		width="100px"
		height="100px"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier">
			<path
				d="M6 28L4 3H28L26 28L16 31L6 28Z"
				fill="#E44D26"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: var(--darkreader-background-e44d26, #b03516);"
			></path>
			<path
				d="M26 5H16V29.5L24 27L26 5Z"
				fill="#F16529"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: var(--darkreader-background-f16529, #b03d0c);"
			></path>
			<path
				d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
				fill="white"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: var(--darkreader-background-ffffff, #181a1b);"
			></path>
		</g></svg
	>
{/snippet}
