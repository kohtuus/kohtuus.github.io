<div class="people small-body">
	<slot />
</div>

<style>
	:global(.people) {
		--margin-right-value: 10rem;
	}

	@media (min-width: 80rem) {
		.people {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
	@media (min-width: 80rem) and (max-width: calc(100rem - 1px)) {
		.people {
			--row-elements-number: 2;
		}
		:global(.people .person:nth-child(n + 3)) {
			margin-top: 4%;
		}
		:global(.people .person:not(:nth-child(2n)):not(:last-child)) {
			margin-right: var(--margin-right-value);
		}
	}

	@media (min-width: 100rem) {
		.people {
			--row-elements-number: 3;
		}
		:global(.people .person:nth-child(n + 4)) {
			margin-top: 4%;
		}

		:global(.people .person:not(:nth-child(3n)):not(:last-child)) {
			margin-right: var(--margin-right-value);
		}
	}
</style>
