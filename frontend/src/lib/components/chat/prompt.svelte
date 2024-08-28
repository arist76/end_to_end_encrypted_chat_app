<script lang="ts">
	import type { Message } from '$lib/main';
	import { messages } from '$lib/store';
	import { chatContainer } from '$lib/store';


	let currentMessage = '';

	function onPromptKeydown(event: KeyboardEvent): void {
		if (['Enter'].includes(event.code)) {
			event.preventDefault();
			addMessage();
		}
	}

	function getCurrentTimestamp(): string {
		return new Date().toLocaleString(
			'en-US', { 
				hour: 'numeric', 
				minute: 'numeric', 
				hour12: true 
			}
		);
	}

	function addMessage(): void {
		const newMessage : Message = {
			id: $messages.length,
			host: true,
			avatar: "https://w0.peakpx.com/wallpaper/139/352/HD-wallpaper-gojo-jujutsu-kaisen-gojo-satoru-jjk-satoru-gojo-jujutsu-kaisen-anime.jpg",
			name: 'Satoru Gojo',
			timestamp: `Today @ ${getCurrentTimestamp()}`,
			message: currentMessage,
			color: 'variant-soft-primary'
		};
		// Update the message feed
		$messages = [...$messages, newMessage];

		// Clear prompt
		currentMessage = "";
		// Scroll to bottomdd

		// Smooth scroll to bottom
		// Timeout prevents race condition
		setTimeout(() => {
			scrollChatBottom('smooth');
		}, 0);
	}

	// eslint-disable-next-line no-undef
	function scrollChatBottom(behavior?: ScrollBehavior): void {
		$chatContainer?.scrollTo({ top: $chatContainer?.scrollHeight, behavior });
		console.log($chatContainer?.scrollHeight);
	}
</script>

<!-- Prompt -->
<section class="border-t border-surface-500/30 p-4 w-full">
	<div class="input-group input-group-divider grid-cols-[4fr_1fr] rounded-container-token h-12">
		<textarea
			bind:value={currentMessage}
			class="border-0 bg-transparent ring-0 flex p-2 resize-none h-full w-full"
			name="prompt"
			id="prompt"
			placeholder="Write a message..."
			rows="1"
			on:keydown={onPromptKeydown}
		></textarea>
		<button
			class={currentMessage ? 'variant-filled-primary' : 'input-group-shim'}
			on:click={addMessage}
		>
			<i class="fa-solid fa-paper-plane"></i>
		</button>
	</div>
</section>
