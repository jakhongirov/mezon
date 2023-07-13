import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import AboutIntro from '../components/aboutIntro/aboutIntro';
import Company from '../components/company/company';
import Team from '../components/team/team';

function AboutPage({ lang, setLang }) {
	return (
		<>
			<Header lang={lang} setLang={setLang} />

			<main className='main'>
				<AboutIntro lang={lang} />
				<Company lang={lang} />
				<Team lang={lang} />
			</main>

			<Footer lang={lang} />
		</>
	);
}

export default AboutPage;
