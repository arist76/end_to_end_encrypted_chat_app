<script lang="ts">
	import { onMount } from 'svelte';
	import { chatContainer } from '$lib/store';

	let elemChat : HTMLElement;


	// When DOM mounted, scroll to bottom
	onMount(() => {
		scrollChatBottom();
		$chatContainer = elemChat;
	});

	function scrollChatBottom(behavior?: ScrollBehavior): void {
		elemChat?.scrollTo({ top: elemChat?.scrollHeight, behavior });
	}
</script>

<section bind:this={elemChat} class="h-full px-4 overflow-y-auto space-y-4">
	<slot/>
</section>
