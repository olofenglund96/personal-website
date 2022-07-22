<script>
	import { afterNavigate } from '$app/navigation';

	import { page } from '$app/stores';
	const toggleNavbarClasses = () =>
		$page.url.pathname == '/'
			? 'visible bg-transparent text-secondary'
			: 'lg:hidden bg-primary text-secondary';
	let navbarClasses = toggleNavbarClasses();
	let burgerClass = $page.url.pathname == '/' ? 'lg:hidden' : '';
	afterNavigate(async () => {
		navbarClasses = toggleNavbarClasses();
		burgerClass = $page.url.pathname == '/' ? 'lg:hidden' : '';
	});
</script>

<div class="navbar w-full p-5 {navbarClasses}">
	<div class="flex-1">
		<label for="my-drawer-2" class="btn btn-square btn-ghost drawer-button {burgerClass}"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			></label
		>
		<ul class="menu menu-horizontal p-0 hidden lg:flex">
			<li><a href="/page/projects">Projects</a></li>
			<li><a href="/page/about-me">About me</a></li>
		</ul>
	</div>
</div>
