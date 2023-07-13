import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ContactIntro from '../components/contactIntro/contactIntro';
import ContactInfo from '../components/contactInfo/contactInfo';
import SendMessage from '../components/sendMessage/sendMessage';

function ContactPage({ lang, setLang }) {
	return (
		<>
			<Header lang={lang} setLang={setLang} />

			<main className='main'>
				<ContactIntro lang={lang} />
				<ContactInfo lang={lang} />
				<SendMessage lang={lang} />
			</main>

			<Footer lang={lang} />
		</>
	);
}

export default ContactPage;
