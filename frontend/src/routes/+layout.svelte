<script lang="ts">
	import '../app.css';
	import { people } from '$lib/store';
	import type { Person } from "$lib/store"
	import { SignalingChannel, PeerConnection } from '$lib/peerConnection';
	import { browser } from '$app/environment';

	const user1 : Person = people[0];
	const user2 : Person = people[2];

	if (browser) {
		const signalingChannel = new SignalingChannel({ serverUrl: 'http://localhost:3001' });
		const conn = new PeerConnection(user1, user2, signalingChannel, {
			iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
		});

		conn.makeCall();
	}
</script>

<section class="h-screen w-full min-w-[300px] max-w-3xl overflow-x-scroll">
	<slot />
</section>
