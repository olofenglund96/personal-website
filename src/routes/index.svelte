<script>
	import Fa from 'svelte-fa';
	import IconWithText from '$lib/components/IconWithText.svelte';
	import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
	import {
		faBriefcase,
		faEarthEurope,
		faPhone,
		faTriangleExclamation
	} from '@fortawesome/free-solid-svg-icons';
</script>

<div class="hero h-[40vh] w-[60wv]">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center">
			<h1 class="text-secondary font-['Righteous'] text-7xl p-5">Hi, I'm Olof!</h1>
			<p class="py-6 text-xl text-secondary p-5 text-left leading-10">
				<IconWithText icon={faBriefcase}>
					I'm a software engineer working with cloud at Neo4j.</IconWithText
				><br />
				<IconWithText icon={faEarthEurope}>Currently located in Lund, Sweden.</IconWithText>
				<br />
				<IconWithText icon={faPhone}>
					Please get in touch on
					<a
						href="https://www.linkedin.com/in/olof-englund-578692106/"
						target="_blank"
						class="leading-none"
						><button
							class="btn btn-sm bg-[#0077B5] btn-outline text-white ml-3 mr-3 hover:bg-[#005e93] hover:border-secondary"
							><Fa icon={faLinkedin} size="lg" class="mr-3" /> LinkedIn</button
						></a
					> if you want to have a chat
				</IconWithText>
			</p>
		</div>
	</div>
</div>

<div class="self-end w-full text-center text-secondary mt-auto p-2 text-2xl">
	<IconWithText
		icon={faTriangleExclamation}
		iconBgColor="none"
		iconTextColor="warning"
		iconSize="2x">This site is a work in progress!</IconWithText
	>
</div>
