<script lang="ts">
	import Feed from '$lib/components/chat/feed.svelte';
	import Bubble from '$lib/components/chat/bubble.svelte';
	import Prompt from '$lib/components/chat/prompt.svelte';
	import { messages } from '$lib/store'; // Assuming this is the store for messages
	import Peer from 'peerjs';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import type { Message } from 'postcss';
	import PeerConnection from '$lib/peerConnection';

	const id = $page.params['slug'];
	let peer: PeerConnection;

	export let newMessage = '';

	function onMessage(message: string) {
		console.log({ message });
		$messages = [
			...$messages,
			{
				id: $messages.length,
				message: message,
				name: 'me',
				avatar: 'https://avatars.dicebear.com/api/avataaars/1.svg',
				host: true,
				timestamp: new Date().toISOString()
			}
		];
	}
	function onError(error: string) {
		console.error(error);
	}
	function send() {
		peer.send(newMessage);
		$messages = [
			...$messages,
			{
				id: $messages.length,
				message: newMessage,
				name: 'me',
				avatar: 'https://avatars.dicebear.com/api/avataaars/1.svg',
				host: true,
				timestamp: new Date().toISOString()
			}
		];
	}

	onMount(() => {
		peer = new PeerConnection(id, id !== '0' ? '0' : null, onMessage, onError);
	});
</script>

<a href="/chatList">&lt; back</a>
<div class="grid h-full w-full grid-rows-[85%_15%]">
	<div class="grid h-full">
		<Feed>
			{#each $messages as msg (msg)}
				<Bubble message={msg} />
			{/each}
		</Feed>
	</div>
	<div class="flex h-full items-center justify-center">
		<Prompt />
		<input type="text" bind:value={newMessage} placeholder="Type a message..." />
		<button on:click={send}>Send</button>
	</div>
</div>
