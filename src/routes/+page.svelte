<script lang="ts">
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
			Radikaalisti parempi yhteiskunta
		</div>
	</Hero>
	<Content>
		<div class="front-content">
			<h3>Tulossa pian</h3>
		</div>
	</Content>
</section>
