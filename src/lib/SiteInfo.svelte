<script context="module" lang="ts">
	import { page } from '$app/stores';
</script>

<div id="siteinfo">
	{#if $page.url.pathname.startsWith('/en')}
		<small
			>kohtuus dot org by <a href="https://kohtuus.org" rel="cc:attributionURL">Kohtuus ry</a>
			is licensed under a
			<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
				>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a
			>.</small
		>
	{:else}
		<small
			>kohtuus piste org, jonka tekijä on <a href="https://kohtuus.org" rel="cc:attributionURL"
				>Kohtuus ry</a
			>, on lisensoitu
			<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fi"
				>Creative Commons Nimeä-EiKaupallinen-JaaSamoin 4.0 Kansainvälinen -käyttöluvalla.</a
			>.</small
		>
	{/if}
</div>

<style>
	#siteinfo {
		line-height: 50%;
	}
</style>
