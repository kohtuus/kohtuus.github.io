<script context="module" lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Content from '$lib/Content.svelte';
	import { browser, dev } from '$app/environment';
	export const hydrate = dev;
	export const router = browser;
</script>

<svelte:head>
	<title>Kohtuus ry</title>
	<meta name="description" content="Kohtuus ry" />
</svelte:head>

<section>
	<Hero>
		<div class="front-content">
			<h1>Kohtuus</h1>
			A radically better society
		</div>
	</Hero>

	<Content>
		<div class="front-content">
			<h3>Coming soon</h3>
		</div>
	</Content>
</section>