<script lang="ts">
	import type { Person } from "$lib/main";
	import { Avatar } from '@skeletonlabs/skeleton';
	import { getInitials } from '$lib/main';

	export let person : Person;

</script>

<div>
	<a
		type="button"
		class="btn w-full flex items-center space-x-4"
		href="chat/{person.id}"
	>
		<Avatar src="{person.avatar}" width="w-8" initials="{getInitials(person.name)}"/>
		<span class="flex-1 text-start">
			{person.name}
		</span>
	</a>

</div>
