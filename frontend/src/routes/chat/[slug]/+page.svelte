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

	// Fetch the peer ID from the URL slug
	const id = $page.params['slug'];

	export let peer: Peer;
	let connection: any;

	// Stores for chat messages and the new message input
	export const chatList = writable([]);
	export let newMessage = '';

	onMount(() => {
		// Initialize the Peer instance with the provided ID
		peer = new Peer(id);

		// Log the peer's own ID once it is open
		peer.on('open', (peerId) => {
			console.log('My peer ID is ' + peerId);

			if (id === '1') {
				connectToPeer('0');
			}
		});

		// Handle incoming connections
		peer.on('connection', (conn) => {
			connection = conn;

			// Handle incoming data
			connection.on('data', (data: any) => {
				$messages = [
					...$messages,
					{
						id: $messages.length,
						message: data,
						name: 'me',
						avatar: 'https://avatars.dicebear.com/api/avataaars/1.svg',
						host: true,
						timestamp: new Date().toISOString()
					}
				];
			});

			// Log connection closure
			connection.on('close', () => {
				console.log('Connection closed');
			});
		});

		// Automatically connect based on ID "0" or "1"
		// if (id === '1') {
		// 	connectToPeer('0');
		// }
		// else if (id === '0') {
		// 	connectToPeer('1');
		// }
	});

	// Function to send a message to the connected peer
	const sendToPeer = () => {
		if (connection && connection.open) {
			connection.send(newMessage);
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
		} else {
			console.log('No connection established to send the message.');
		}
	};

	// Function to establish a connection to a peer with the specified ID
	function connectToPeer(peerId: string) {
		console.log('Connecting to peer: ' + peerId);
		connection = peer.connect(peerId);

		connection.on('open', () => {
			console.log('Connected to peer: ' + peerId);
			// Optional: send an initial greeting
			connection.send('Hello from your connected peer!');
		});

		connection.on('data', (data: any) => {
			console.log('Received data: ' + data);
			$messages = [
				...$messages,
				{
					id: $messages.length,
					message: data,
					name: 'me',
					avatar: 'https://avatars.dicebear.com/api/avataaars/1.svg',
					host: true,
					timestamp: new Date().toISOString()
				}
			];
			console.log({ $messages });
		});

		connection.on('close', () => {
			console.log('Connection closed');
		});

		connection.on('error', (err: any) => {
			console.error('Connection error:', err);
		});
	}
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
		<button on:click={sendToPeer}>Send</button>
	</div>
</div>
