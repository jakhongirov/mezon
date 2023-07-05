import { useParams } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ProductsList from '../components/productsList/productsList';

function ProductsPage() {
	const { category_name } = useParams();

	return (
		<>
			<Header />

			<main className='main'>
				<ProductsList category_name={category_name} />
			</main>

			<Footer />
		</>
	);
}

export default ProductsPage;
