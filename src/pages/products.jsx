import { useParams } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ProductsList from '../components/productsList/productsList';

function ProductsPage({ lang, setLang }) {
	const { category_name } = useParams();

	return (
		<>
			<Header lang={lang} setLang={setLang} />

			<main className='main'>
				<ProductsList lang={lang} category_name={category_name} />
			</main>

			<Footer lang={lang} />
		</>
	);
}

export default ProductsPage;
