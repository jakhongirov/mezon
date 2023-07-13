import './categoriesList.scss';
import { categories, data, types } from '../../assets/data/data';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import OrderModal from '../orderModal/orderModal';
import PhotoModal from '../photoModal/photoModal';

function CategoriesList({ lang }) {
	const navigate = useNavigate();
	const [type, setType] = useState(1);
	const [products, setProducts] = useState([]);
	const [doorCategory, setDoorCategory] = useState(false);
	const [show, setShow] = useState(false);
	const [photo, setPhoto] = useState(false);
	const [id, setId] = useState();

	useEffect(() => {
		if (type === 1) {
			setDoorCategory(!doorCategory);
		} else {
			setProducts(data.filter((e) => e.type_id === type));
			setDoorCategory(false);
			setTimeout(() => {
				let box = document.querySelector('.box');
				box.classList.remove('box--animation');
			}, 1000);
		}
	}, [type]);

	return (
		<section className='categoriesList'>
			<div className='container'>
				<ul className='categories__list'>
					{types.map((e, i) => (
						<li
							key={i}
							className={
								e.id === type
									? 'categories__item categories__item--selected'
									: 'categories__item'
							}
							onClick={() => {
								setType(e.id);
								let box = document.querySelector('.box');
								box.classList.add('box--animation');
							}}>
							<img
								className='categories__item__icon'
								src={e.icon}
								alt={e.type_name}
								width={55}
								height={50}
							/>
							<div className='categories__item__box'>
								<h3 className='categories__item__title'>{e[lang]}</h3>
							</div>
						</li>
					))}
				</ul>

				<div className='box box--animation'>
					<ul
						className={
							!doorCategory
								? 'products__list'
								: 'categoriesList__list--none'
						}>
						{products.map((e, i) => (
							<li className='products__item' key={i}>
								<div className='products__item__box'>
									<img
										className='products__image'
										src={e.image}
										alt={e.title}
										width={300}
										height={210}
										onClick={() => {
											setId(e.id);
											setPhoto(!photo);
										}}
									/>
								</div>
								<h4 className='products__item__title'>{e.title}</h4>
								<button
									className='products__item__btn'
									onClick={() => setShow(true)}>
									{lang == 'ru' ? 'Заказать' : 'Buyurtma'}
								</button>
							</li>
						))}
					</ul>

					<ul
						className={
							doorCategory
								? 'categoriesList__list'
								: 'categoriesList__list--none'
						}>
						{categories?.map((e, i) => (
							<li key={i} className='categoriesList__item'>
								<div className='categoriesList__item__img-box'>
									<img
										src={
											data
												.reverse()
												.filter((p) => p.category_id == e.id)[2]
												?.image
										}
										alt={`${e.category_name} doors`}
										width={300}
										height={500}
									/>
								</div>
								<div className='categoriesList__item__info'>
									<h3 className='categoriesList__item__title'>
										{e.category_name}
									</h3>
									<button
										className='categoriesList__item__btn'
										onClick={() =>
											navigate(`/products/${e.category_name}`)
										}>
										{lang == 'ru' ? 'Смотреть' : "Ko'rish"}
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>

			<OrderModal lang={lang} show={show} setShow={setShow} />
			<PhotoModal show={photo} setShow={setPhoto} id={id} />
		</section>
	);
}

export default CategoriesList;
