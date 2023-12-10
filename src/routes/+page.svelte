<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import LogoFi from '$lib/LogoFi.svelte';
	import Content from '$lib/Content.svelte';
	import ContentBlock from '$lib/ContentBlock.svelte';
	import People from '$lib/People.svelte';
	import Person from '$lib/Person.svelte';
	import { browser, dev } from '$app/environment';
	export const hydrate = dev;
	export const router = browser;
</script>

<svelte:head>
	<meta name="description" content="Kohtuus – Radikaalisti parempi yhteiskunta" />
	<meta property="og:url" content="https://kohtuus.org" />
	<meta property="og:image" content="https://kohtuus.org/fi_og.jpg" />
</svelte:head>

<section>
	<Hero>
		<div class="front-content logo-wrapper">
			<LogoFi />
		</div>
	</Hero>
	<Content>
		<ContentBlock color="green">
			<p>
				Kuvittele huominen, jossa olet osa elämän kiertokulkua ja luonnon hyvinvointi on myös sinun
				hyvinvointiasi. Et vie toisten mahdollisuuksia hyvään elämään lähellä etkä kaukana, nyt tai
				tulevaisuudessa. Kuulut valitsemaasi yhteisöön, joka välittää ja tukee. Olet osa
				demokraattista yhteiskuntaa, joka voi hallitusti hidastaa vauhtia jakamalla resurssit
				oikeudenmukaisesti.
			</p>
		</ContentBlock>
		<ContentBlock color="plain">
			<h3>Mikä on degrowth?</h3>
			<p>
				<b>Degrowth</b>-liike yhdistää tieteentekijöitä, aktivisteja, taiteilijoita ja ihmisiä,
				jotka ovat huolissaan maailman tilanteesta.
			</p>
			<p>
				<b>Degrowth</b> haastaa länsimaisen kehitysajattelun kolonialistiset rakenteet ja riippuvuuden
				jatkuvasta talouskasvusta.
			</p>
			<p>
				<b>Degrowth</b> luo demokraattista yhteiskuntaa, jossa jokaisella on mahdollisuus osallistua
				yhteisistä asioista päättämiseen.
			</p>
			<p>
				<b>Degrowth</b> ei ponnista tyhjästä. Maailmassa on monia vakiintuneita omavaraisuuteen pyrkiviä
				yhteisöjä ja radikaaleja liikkeitä, joista degrowth-ajattelu oppii ja joita se tukee.
			</p>
			<p>
				<b>Degrowth</b> merkitsee globaalissa pohjoisessa merkittävää poliittista ja taloudellista uudelleenjärjestelyä,
				jossa energian ja resurssien käyttö mitoitetaan maapallon kantokyvyn rajoihin.
			</p>
		</ContentBlock>
		<ContentBlock color="orange">
			<h3>Mikä on Kohtuus?</h3>
			<p>
				Kohtuus on ryhmä ja yhdistys, joka on kiinnostunut siitä, miten degrowth-ajatukset ilmenevät
				suomalaisessa keskustelussa. Ryhmä muotoitui lukupiiristä ja kokoonnumme yhä pohtimaan
				degrowth-aiheisia tekstejä, joita haluamme ymmärtää yhdessä. Tukemalla degrowth-ajattelua
				Suomessa haluamme herätellä kriittistä pohdintaa talouden ja politiikan rakenteista ja
				niiden kyvystä tarjota hyvä elämä kaikille.
			</p>
			<p>
				Keräämme, tuotamme ja välitämme tietoa ja ajatuksia, sekä osallistumme yhteiskunnalliseen
				toimintaan. Luomme tiloja, joissa ihmiset voivat kokoontua keskustelemaan.
			</p>
			<p>
				Kohtuus on yksi monista äänistä degrowth-liikkeessä, ja toimimme yhteistyössä muiden ryhmien
				kanssa Suomessa ja maailmalla. Suomessa degrowth-ajattelua on edistänyt jo pitkään <a
					href="https://kohtuusliike.fi/"
					style="color: #add8e6;">Kohtuusliike</a
				>.
			</p>
		</ContentBlock>
		<ContentBlock color="plain">
			<People>
				<Person id="ansku" name="Anna-Liisa Arjama">
					<p>
						Anna-Liisa on työskennellyt yli 20 vuotta erilaisissa rooleissa sote-palveluissa. Häntä
						kiinnostaa hoivatyön – ammattimaisen ja epämuodollisen – esiinnostaminen yhteiskunnassa.
						Anna-Liisa ei usko, että talouskasvun avulla voidaan ratkaista kaikkein
						haavoittuvammassa asemassa olevien ihmisten ongelmia.
					</p>
					<p>
						sähköposti: <a href="mailto:anna-liisa.arjama@kohtuus.org"
							>anna-liisa.arjama@kohtuus.org</a
						><br />
					</p>
				</Person>
				<Person id="elsa" name="Elsa Kivinen">
					<p>
						Elsa on kiinnostunut degrowthin teorian ja käytäntöjen risteymistä ja siitä, mikä saa
						ihmiset mukaan poliittiseen toimintaan. Hän toimii monissa yhteiskunnallisissa
						liikkeissä tiedonvälittäjänä. Strateginen ajattelu ja yhteiskunnallisten voimavarojen
						kasvattaminen ihmissuhteiden arvostamisen avulla motivoivat Elsaa.
					</p>
					<p>
						sähköposti: <a href="mailto:elsa.kivinen@kohtuus.org">elsa.kivinen@kohtuus.org</a>
					</p>
				</Person>
				<Person id="juha" name="Juha Soivio">
					<p>
						Juhan tausta on yhteiskuntatieteissä ja sosiaalialalla. Degrowth-ajattelussa Juhaa
						kiinnostaa eriarvoisuuden poistaminen ja sosiaalinen muutos. Juha on mielellään
						sillanrakentajana erilaisten toimijoiden välillä.
					</p>
					<p>
						sähköposti: <a href="mailto:juha.soivio@kohtuus.org">juha.soivio@kohtuus.org</a>
					</p>
				</Person>
				<Person id="katja" name="Katja Pellini">
					<p>
						Katja on kehitysyhteistyössä toimiva ekologi. Hän haluaa edistää kaikkien
						mahdollisuuksia osallistua demokraattiseen päätöksentekoon ja on kiinnostunut ihmisen
						luontosuhteesta. Katja opiskelee degrowth-maisteriohjelmassa Barcelonan autonomisessa
						yliopistossa.
					</p>
					<p>
						sähköposti: <a href="mailto:katja.pellini@kohtuus.org">katja.pellini@kohtuus.org</a><br
						/>
						blogi: <a href="https://ecologyalike.tumblr.com/">Ecology Alike</a><br />
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
			<div class="front-content">
				<h3>Haluatko tietää lisää?</h3>
				<p>Lähetä sähköpostia osoitteeseen:</p>
				<p>
					<a href="mailto:info@kohtuus.org" style="color: white;">info@kohtuus.org</a>
				</p>
			</div>
		</ContentBlock>
	</Content>
</section>
