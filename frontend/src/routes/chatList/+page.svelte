<script lang="ts">
	import { people } from "$lib/store"
	import ChatLink from '$lib/components/chatList/chatLink.svelte';
	import ChatList from '$lib/components/chatList/chatList.svelte';
	import Search from '$lib/components/chatList/search.svelte';
</script>

<div class="h-full w-full px-4">
	<div class="grid grid-rows-[auto_1fr_auto]">
		<Search/>
		<small class="opacity-50">Contacts</small>
		<ChatList>
			{#each people as person}
				<ChatLink person={person}/>
			{/each}
		</ChatList>
	</div>
</div>

