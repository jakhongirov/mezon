import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CategoriesList from '../components/categoriesList/categoriesList';

function Categories({ lang, setLang }) {
	return (
		<>
			<Header lang={lang} setLang={setLang} />

			<main className='main'>
				<CategoriesList lang={lang} />
			</main>

			<Footer lang={lang} />
		</>
	);
}

export default Categories;
