<script lang="ts">
	import type {Message} from "$lib/main";
	import { Avatar } from "@skeletonlabs/skeleton";

	export let message : Message;

</script>
{#if message.host === true}
	<div class="grid grid-cols-[auto_1fr] gap-2">
		<Avatar src="{message.avatar}" width="w-12" />
		<div class="card p-4 variant-soft rounded-tl-none space-y-2">
			<header class="flex justify-between items-center">
				<p class="font-bold">{message.name}</p>
				<small class="opacity-50">{message.timestamp}</small>
			</header>
			<p>{message.message}</p>
		</div>
	</div>
{:else}
	<div class="grid grid-cols-[1fr_auto] gap-2">
		<div class="card p-4 rounded-tr-none space-y-2 {message.color}">
			<header class="flex justify-between items-center">
				<p class="font-bold">{message.name}</p>
				<small class="opacity-50">{message.timestamp}</small>
			</header>
			<p>{message.message}</p>
		</div>
		<Avatar src="{message.avatar}" width="w-12" />
	</div>
{/if}

