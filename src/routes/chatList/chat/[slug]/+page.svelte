<script>
	import { page } from "$app/stores";

	$: ({ slug } = $page.params);
</script>

<h1>Chat page {slug} </h1>
