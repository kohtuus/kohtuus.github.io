<script context="module" lang="ts">
	import Hero from '$lib/Hero.svelte';
	import LogoEn from '$lib/LogoEn.svelte';
	import Content from '$lib/Content.svelte';
	import ContentBlock from '$lib/ContentBlock.svelte';
	import People from '$lib/People.svelte';
	import Person from '$lib/Person.svelte';
	import { browser, dev } from '$app/environment';
	export const hydrate = dev;
	export const router = browser;
</script>

<svelte:head>
	<meta name="description" content="Kohtuus – Radically better society" />
	<meta property="og:url" content="https://kohtuus.org/en" />
	<meta property="og:image" content="https://kohtuus.org/en_og.jpg" />
</svelte:head>

<section>
	<Hero>
		<div class="front-content logo-wrapper">
			<LogoEn />
		</div>
	</Hero>
	<Content>
		<ContentBlock color="green">
			<p>
				Imagine a tomorrow where you are part of the circle of life and the well-being of nature is
				also your well-being. You are not taking away the opportunities for a good life for others
				near or far, now or in the future. You belong to a community of your choice that cares and
				supports, but is also part of a wider democratic society. You can slow down without feeling
				guilty about it.
			</p>
		</ContentBlock>
		<ContentBlock color="plain">
			<h3>What is degrowth?</h3>
			<p>
				The <b>degrowth</b> movement brings together scientists, activists, artists and people concerned
				about the state of the world.
			</p>
			<p>
				<b>Degrowth</b> challenges the colonialist structures of Western development thinking and its
				dependence on continued economic growth.
			</p>
			<p>
				<b>Degrowth</b> creates a democratic society in which everyone has the opportunity to participate
				in deciding common issues.
			</p>
			<p>
				<b>Degrowth</b> does not spring from nowhere. There are many established self-sufficient communities
				and radical movements in the world from which degrowth learns and which it supports.
			</p>
			<p>
				In the global North, <b>degrowth</b> implies a major political and economic reorganisation, where
				energy and resource use is measured against the limits of the earth&#39;s carrying capacity.
			</p>
		</ContentBlock>
		<ContentBlock color="orange">
			<h3>What is Koht<i>uus</i>?</h3>
			<p>
				Koht<i>uus</i> is a group and association interested in how degrowth ideas are manifested in
				the Finnish debate. By supporting degrowth thinking in Finland, we want to stimulate critical
				reflection on economic and political structures and their ability to provide a good life for
				all.
			</p>
			<p>
				We collect, produce and disseminate information and ideas, and participate in social action.
				We create spaces where people can come together to discuss. We cooperate with other
				movements and groups in Finland and abroad.
			</p>
			<p>"Kohtuus" is a deep-rooted term for sufficiency in Finnish.</p>
		</ContentBlock>
		<ContentBlock color="plain">
			<People>
				<Person id="ansku" name="Anna-Liisa Arjama">
					<p>
						Anna-Liisa has worked for more than 20 years in various roles in social services. She is
						interested in promoting care work - professional and informal - in society. Anna-Liisa
						does not believe that economic growth can solve the problems of the most vulnerable
						people.
					</p>
					<p>
						email: <a href="mailto:anna-liisa.arjama@kohtuus.org">anna-liisa.arjama@kohtuus.org</a
						><br />
					</p>
				</Person>
				<Person id="elsa" name="Elsa Kivinen">
					<p>
						Elsa is interested in the intersection of degrowth theory and practice and what gets
						people involved in political action. She works as an information broker in many social
						movements. Elsa is motivated by strategic thinking and building social capacity through
						valuing human relationships.
					</p>
					<p>
						email: <a href="mailto:elsa.kivinen@kohtuus.org">elsa.kivinen@kohtuus.org</a>
					</p>
				</Person>
				<Person id="juha" name="Juha Soivio">
					<p>
						Juha&#39;s background is in social sciences and social work. In degrowth thinking, Juha
						is interested in the elimination of inequalities and social change. Juha likes to be a
						bridge builder between different actors.
					</p>
					<p>
						email: <a href="mailto:juha.soivio@kohtuus.org">juha.soivio@kohtuus.org</a>
					</p>
				</Person>
				<Person id="katja" name="Katja Pellini">
					<p>
						Katja is an international development cooperation practitioner. She is interested in
						promoting opportunities for all to participate in democratic decision-making and human
						nature relationships. Katja is a student in the Degrowth Master&#39;s programme at the
						Autonomous University of Barcelona.
					</p>
					<p>
						email: <a href="mailto:katja.pellini@kohtuus.org">katja.pellini@kohtuus.org</a><br />
						blog: <a href="https://ecologyalike.tumblr.com/">Ecology Alike</a><br />
					</p>
				</Person>
				<Person id="timo" name="Timo Tiuraniemi">
					<p>
						Timo is a programmer and activist with a background in philosophy. He is interested in
						open source software and philosophy of technology and its relation to degrowth thinking.
						Timo is responsible for the technical maintenance of this site.
					</p>
					<p>
						email: <a href="mailto:timo.tiuraniemi@kohtuus.org">timo.tiuraniemi@kohtuus.org</a><br
						/>
						homepage: <a href="https://tiuraniemi.org">tiuraniemi.org</a><br />
					</p>
				</Person>
			</People>
		</ContentBlock>
		<ContentBlock color="green">
			<div class="front-content">
				<h3>Want to know more?</h3>
				<p>Send an email to:</p>
				<p>
					<a href="mailto:info@kohtuus.org" style="color: white;">info@kohtuus.org</a>
				</p>
			</div>
		</ContentBlock>
	</Content>
</section>
