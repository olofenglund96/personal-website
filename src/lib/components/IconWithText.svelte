<script>
	import Fa from 'svelte-fa';

	export /**
	 * @type {import("@fortawesome/fontawesome-common-types").IconDefinition}
	 */
	let icon;

	export let iconBgColor = 'primary';
	export let iconTextColor = 'secondary';
	export let iconSize = '';
</script>

<span class="inline-flex items-center">
	<span class="mr-3 p-4 bg-{iconBgColor} text-{iconTextColor} rounded-full">
		<Fa {icon} size={iconSize} /></span
	>
	<slot />
</span>
