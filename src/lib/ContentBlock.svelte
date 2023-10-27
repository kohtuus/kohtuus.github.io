<script lang="ts">
	export let color: 'green' | 'organge' | 'plain';
</script>

<div class="content-block content-block--{color}">
	<div class="content-block__content">
		<slot />
	</div>
</div>

<style>
	.content-block {
		padding-left: 2em;
		padding-right: 2em;
	}

	.content-block__content {
		margin: 0 auto;
		max-width: 100rem;
		padding: 5rem 0 5rem 0;
	}

	.content-block--orange {
		background-color: #e56b29;
		color: white;
	}
	.content-block--green {
		background-color: #5fa318;
		color: white;
	}

	@media (min-width: 100rem) {
		.content-block {
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
