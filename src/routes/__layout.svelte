<script>
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';

	let sideBarVisible = $page.url.pathname != '/';
	let bgClass =
		$page.url.pathname != '/'
			? 'bg-base-100'
			: "bg-[url('/images/siluett_cropped.JPG')] bg-cover bg-center bg-no-repeat brightness-125";
	let drawerMobile = $page.url.pathname != '/' ? 'drawer-mobile' : '';

	afterNavigate(async () => {
		if ($page.url.pathname == '/') {
			bgClass =
				"bg-[url('/images/siluett_cropped.JPG')] bg-cover bg-center bg-no-repeat brightness-125";
			drawerMobile = '';
			sideBarVisible = false;
		} else {
			bgClass = 'bg-base-100';
			drawerMobile = 'drawer-mobile';
		}
	});
</script>

<div class="drawer {drawerMobile}">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" bind:checked={sideBarVisible} />
	<div class="drawer-content bg-black">
		<div class="flex flex-col h-full transition-none {bgClass}">
			<Navbar />
			<div class="flex flex-col flex-grow w-full"><slot /></div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
			<Sidebar />
		</ul>
	</div>
</div>
