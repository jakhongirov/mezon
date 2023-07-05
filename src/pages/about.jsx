import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import AboutIntro from '../components/aboutIntro/aboutIntro';
import Company from '../components/company/company';
import Team from '../components/team/team';

function AboutPage() {
	return (
		<>
			<Header />

			<main className='main'>
				<AboutIntro />
				<Company />
				<Team />
			</main>

			<Footer />
		</>
	);
}

export default AboutPage;
