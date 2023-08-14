import { useEffect, useState } from 'react';
import './productsList.scss';
import { categories, data } from '../../assets/data/data';
import OrderModal from '../orderModal/orderModal';
import PhotoModal from '../photoModal/photoModal';
import { useNavigate } from 'react-router-dom';
import content from '../../Localization/content';

function ProductsList({ lang, category_name }) {
	const [products, setPorducts] = useState([]);
	const [show, setShow] = useState(false);
	const [photo, setPhoto] = useState(false);
	const [id, setId] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		const category = categories.find(
			(e) => e.category_name === category_name,
		);
		const FilteredProducts = data.filter(
			(e) => e.category_id === category.id,
		);
		setPorducts(FilteredProducts);
	}, [category_name]);

	return (
		<section className='productsList'>
			<div className='container'>
				<button className='productsList__btn' onClick={() => navigate(-1)}>
					<svg
						fill='#202020'
						xmlns='http://www.w3.org/2000/svg'
						width='50'
						height='50'
						viewBox='0 0 55 55'
						id='arrow'>
						<path d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z'></path>
					</svg>
				</button>
				<h2 className='productsList_heading'>{category_name}</h2>

				<ul className='productsList__list'>
					{products.map((e, i) => (
						<li className='productsList__item' key={i}>
							<img
								src={e.image}
								alt={e.title}
								width={300}
								height={500}
								onClick={() => {
									setId(e.id);
									setPhoto(!photo);
								}}
							/>
							<h3 className='productsList__item__title'>
								Модель №{++i}
							</h3>
							<button
								className='productsList__item__btn'
								onClick={() => setShow(true)}>
								{content[lang].main.products.btn}
							</button>
						</li>
					))}
				</ul>
			</div>

			<OrderModal lang={lang} show={show} setShow={setShow} />
			<PhotoModal lang={lang} show={photo} setShow={setPhoto} id={id} />
		</section>
	);
}

export default ProductsList;
