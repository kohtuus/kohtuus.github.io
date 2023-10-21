<script lang="ts">
	export let id: string;
	export let name: string;
</script>

<div class="person">
	<picture>
		<img src="/{id}.png" alt={name} />
	</picture>
	<h4>{name}</h4>
	<slot />
</div>

<style>
	.person {
		width: 100%;
		margin-top: 5em;
	}
	@media (min-width: 80rem) {
		.person {
			width: calc(
				(100% - (var(--margin-right-value) * (var(--row-elements-number) - 1))) /
					var(--row-elements-number)
			);
			margin-top: 0;
		}
	}
</style>
