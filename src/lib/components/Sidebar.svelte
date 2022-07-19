<script>
	import Fa from 'svelte-fa';
	import { faGithub, faLinkedin, faInstagram, faStrava } from '@fortawesome/free-brands-svg-icons';
	import { faHome, faBook, faUser } from '@fortawesome/free-solid-svg-icons';
	import { page } from '$app/stores';

	const menuLinks = [
		{
			path: '/',
			text: 'Home',
			icon: faHome
		},
		{
			path: '/page/projects',
			text: 'Projects',
			icon: faBook
		},
		{
			path: '/page/about-me',
			text: 'About me',
			icon: faUser
		}
	];

	const socialLinks = [
		{
			icon: faGithub,
			href: 'https://www.github.com/olofenglund96'
		},
		{
			icon: faLinkedin,
			href: 'https://www.linkedin.com/in/olof-englund-578692106/'
		},
		{
			icon: faInstagram,
			href: 'https://www.instagram.com/olofenglund'
		},
		{
			icon: faStrava,
			href: 'https://www.strava.com/athletes/2908593'
		}
	];
</script>

<div class="flex flex-col items-center p-8 pb-3">
	<div class="avatar">
		<div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
			<img alt="Olof" src="/images/me_square.jpg" />
		</div>
	</div>
	<h1 class="text-3xl font-normal mt-6">Olof Englund</h1>
	<div class="flex mt-4">
		{#each socialLinks as { icon, href }}
			<a {href} target="_blank" class="ml-3 first:ml-0">
				<button class="btn btn-secondary btn-sm"><Fa {icon} /></button>
			</a>
		{/each}
	</div>
</div>
<div class="divider" />
{#each menuLinks as link}
	<li>
		<a href={link.path} class:active={$page.url.pathname == link.path}
			><Fa icon={link.icon} />{link.text}</a
		>
	</li>
{/each}
