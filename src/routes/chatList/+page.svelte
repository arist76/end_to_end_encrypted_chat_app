<script lang="ts">
	import type { Person } from '$lib/main';
	import ChatLink from '$lib/components/chatList/chatLink.svelte';
	import ChatList from '$lib/components/chatList/chatList.svelte';
	import Search from '$lib/components/chatList/search.svelte';

	// Navigation List
	const people: Person[] = [
		{ id: 0, avatar: "https://w0.peakpx.com/wallpaper/139/352/HD-wallpaper-gojo-jujutsu-kaisen-gojo-satoru-jjk-satoru-gojo-jujutsu-kaisen-anime.jpg", name: 'Satoru Gojo' },
		{ id: 1, avatar: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/3e/Mahito.png/revision/latest?cb=20200728162207", name: 'Mahito' },
		{ id: 2, avatar: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/a/ac/Yuji_Itadori_%28Volume_1%29.png/revision/latest/scale-to-width-down/1000?cb=20200611150621", name: 'Yuji Itadori' },
		{ id: 3, avatar: "https://w0.peakpx.com/wallpaper/351/770/HD-wallpaper-sukuna-anime-jujutsu-kaisen.jpg", name: 'Sukuna' },
		{ id: 4, avatar: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/6/61/What_kind_of_girls_do_you_like_%28Anime%29.png/revision/latest/scale-to-width-down/1000?cb=20210124223838", name: 'Aio Todo' },
		{ id: 5, avatar: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/57/Hanami_enjoying_the_thrill_of_the_fight_%28Anime%29.png/revision/latest/scale-to-width-down/1000?cb=20210220043445", name: 'Hanami' }
	];

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

