<script lang="ts">
	import Feed from '$lib/components/chat/feed.svelte';
	import Bubble from '$lib/components/chat/bubble.svelte';
	import Prompt from '$lib/components/chat/prompt.svelte';
	import { messages } from '$lib/store';

</script>

<a href="/chatList">&ltback</a>
<div class="w-full h-full grid grid-rows-[85%_15%]">
	<div class="grid h-full">
		<Feed>
			{#each $messages as msg (msg.id)}
				<Bubble message={msg}/>
			{/each}
		</Feed>
	</div>
	<div class="h-full flex justify-center items-center">
		<Prompt/>
	</div>
</div>
