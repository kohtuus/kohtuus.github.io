<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Content from '$lib/Content.svelte';
	import ContentBlock from '$lib/ContentBlock.svelte';
	import People from '$lib/People.svelte';
	import Person from '$lib/Person.svelte';
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
			<h1 style="margin-bottom: 0;">
				<span style="color: #E56B29;">Koht</span><i style="color: #5FA318;">uus</i>
			</h1>
			<h3 style="color: #5FA318;">Radikaalisti parempi yhteiskunta</h3>
		</div>
	</Hero>
	<Content>
		<ContentBlock color="green">
			<p>
				Kuvittele tulevaisuus, jossa et vie toisten mahdollisuuksia hyvään elämään – lähellä ja
				kaukana, nyt ja tulevaisuudessa.
			</p>
			<p>
				Koet olevasi osa elämän kiertokulkua ja luonnon hyvinvointi on myös sinun hyvinvointiasi.
			</p>
			<p>
				Kuulut yhteisöön joka välittää ja tukee, mutta on myös osa laajempaa demokraattista
				yhteiskuntaa.
			</p>
			<p>Voit hidastaa vauhtia ilman että tunnet huonoa omaa tuntoa siitä.</p>
		</ContentBlock>
		<ContentBlock color="plain">
			<h3>Mikä on Degrowth?</h3>
			<p>
				<b>Degrowth</b>-liike yhdistää tieteen tekijöitä, aktivisteja, taiteilijoita ja ihmisiä
				jotka ovat huolissaan maailman tilanteesta.
			</p>
			<p>
				<b>Degrowth</b> haastaa länsimaisen kehitysajattelun kolonialistiset rakenteet ja riippuvuuden
				jatkuvasta talouskasvusta.
			</p>
			<p>
				<b>Degrowth</b> luo demokraattista yhteiskuntaa jossa jokaisella on mahdollisuus osallistua yhteisistä
				asioista päättämiseen.
			</p>
			<p>
				<b>Degrowth</b> ei ponista tyhjästä, maailmassa on monia liikkeitä ja omavairaisuuten pyrkiviä
				yhteisöjä jotka jo nyt toimivat ekologisesti.
			</p>
			<p>
				<b>Degrowth</b> merkitsee globaalissa pohjoisessa radikaalia poliittista ja taloudellista uudelleenjärjestelyä
				jossa energian ja resurssien käyttö on mitoitettu maapallon kantokyvyn rajoihin.
			</p>
		</ContentBlock>
		<ContentBlock color="orange">
			<h3>Mikä on Koht<i>uus</i>?</h3>
			<p>
				Koht<i>uus</i> on ryhmä ja yhdistys, joka on kiinnostunut siitä, miten Degrowth-ajatukset ilmenevät
				suomalaisessa keskustelussa. Tukemalla Degrowth ajattelua Suomessa haluamme herätellä kriittistä
				pohdintaa talouden ja politiikan rakenteista ja niiden kyvystä tarjota hyvä elämä kaikille.
			</p>
			<p>
				Koht<i>uus</i> edistää kohtuutalouden tietoa ja toimintaa. Yhdistys toimii rahatalouden ulkopuolella
				mutta kapitalistisessa yhteiskunnassamme yksilöt tarvitsevat silti rahaa elämiseen, minkä vuoksi
				raha-asioissa toimimme yksilöinä yhdistyksen ulkopuolella.
			</p>
		</ContentBlock>
		<ContentBlock color="plain">
			<People>
				<Person id="timo" name="Timo Tiuraniemi">
					<p>
						Timo on filosofiataustainen ohjelmoija ja aktivisti. Hän on kiinnostunut avoimen
						lähdekoodin ohjelmistoista ja teknologianfilosofiasta sekä niiden suhteesta
						degrowth-ajatteluun. Timo vastaa tämän sivuston teknisestä ylläpidosta.
					</p>
					<p>
						sähköposti: <a href="mailto:timo.tiuraniemi@kohtuus.org">timo.tiuraniemi@kohtuus.org</a
						><br />
						kotisivu: <a href="https://tiuraniemi.org">tiuraniemi.org</a><br />
					</p>
				</Person>
				<Person id="timo" name="Timo Tiuraniemi">
					<p>
						Timo on filosofiataustainen ohjelmoija ja aktivisti. Hän on kiinnostunut avoimen
						lähdekoodin ohjelmistoista ja teknologianfilosofiasta sekä niiden suhteesta
						degrowth-ajatteluun. Timo vastaa tämän sivuston teknisestä ylläpidosta.
					</p>
					<p>
						sähköposti: <a href="mailto:timo.tiuraniemi@kohtuus.org">timo.tiuraniemi@kohtuus.org</a
						><br />
						kotisivu: <a href="https://tiuraniemi.org">tiuraniemi.org</a><br />
					</p>
				</Person>
				<Person id="timo" name="Timo Tiuraniemi">
					<p>
						Timo on filosofiataustainen ohjelmoija ja aktivisti. Hän on kiinnostunut avoimen
						lähdekoodin ohjelmistoista ja teknologianfilosofiasta sekä niiden suhteesta
						degrowth-ajatteluun. Timo vastaa tämän sivuston teknisestä ylläpidosta.
					</p>
					<p>
						sähköposti: <a href="mailto:timo.tiuraniemi@kohtuus.org">timo.tiuraniemi@kohtuus.org</a
						><br />
						kotisivu: <a href="https://tiuraniemi.org">tiuraniemi.org</a><br />
					</p>
				</Person>
				<Person id="timo" name="Timo Tiuraniemi">
					<p>
						Timo on filosofiataustainen ohjelmoija ja aktivisti. Hän on kiinnostunut avoimen
						lähdekoodin ohjelmistoista ja teknologianfilosofiasta sekä niiden suhteesta
						degrowth-ajatteluun. Timo vastaa tämän sivuston teknisestä ylläpidosta.
					</p>
					<p>
						sähköposti: <a href="mailto:timo.tiuraniemi@kohtuus.org">timo.tiuraniemi@kohtuus.org</a
						><br />
						kotisivu: <a href="https://tiuraniemi.org">tiuraniemi.org</a><br />
					</p>
				</Person>
				<Person id="timo" name="Timo Tiuraniemi">
					<p>
						Timo on filosofiataustainen ohjelmoija ja aktivisti. Hän on kiinnostunut avoimen
						lähdekoodin ohjelmistoista ja teknologianfilosofiasta sekä niiden suhteesta
						degrowth-ajatteluun. Timo vastaa tämän sivuston teknisestä ylläpidosta.
					</p>
					<p>
						sähköposti: <a href="mailto:timo.tiuraniemi@kohtuus.org">timo.tiuraniemi@kohtuus.org</a
						><br />
						kotisivu: <a href="https://tiuraniemi.org">tiuraniemi.org</a><br />
					</p>
				</Person>
			</People>
        </ContentBlock>
        <ContentBlock color="green">
            <div class="front-content" >
                <h3>Haluatko tietää lisää?</h3>
                <p>
                    Läheetä sähköpostia osoitteeseen:
                </p>
                <p>
                    <a href="mailto:info@kohtuus.org" style="color: white;">info@kohtuus.org</a>
                </p>
            </div>
        </ContentBlock>
        

	</Content>
</section>
