import './homeCategories.scss';
import { data, types } from '../../assets/data/data';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Autoplay, Navigation } from 'swiper';
import Loader from '../loader/loader';

function HomeCategories() {
	const [SlidesCount, setSlidesCount] = useState(3);
	const [type, setType] = useState(1);
	const [products, setProducts] = useState([]);
	const [typeImg, setTypeImg] = useState({});
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 560) {
			setSlidesCount(1);
		} else if (window.innerWidth < 730) {
			setSlidesCount(2);
		} else if (window.innerWidth < 850) {
			setSlidesCount(2);
		} else {
			setSlidesCount(3);
		}
	}, []);

	useEffect(() => {
		setProducts(data.filter((e) => e.type_id == 1));
		setTypeImg(types.find((e) => e.id == 1));
	}, []);

	const handleFilter = (id) => {
		setType(id);
		setProducts(data.filter((e) => e.type_id == id));
		setTypeImg(types.find((e) => e.id == id));
		let img = document.querySelector('.categories__box__img');
		img.classList.add('categories__box__img--animation');
		setTimeout(() => {
			let img = document.querySelector('.categories__box__img');
			img.classList.remove('categories__box__img--animation');
		}, 1000);
		// setTimeout(() => {
		// 	setLoader(false);
		// }, 2000);
	};

	return (
		<section className='categories'>
			<div className='container'>
				<h2 className='categories__heading'>Категории</h2>

				<div className='categories__box'>
					<ul className='categories__list'>
						{types.map((e, i) => (
							<li
								key={i}
								className={
									e.id === type
										? 'categories__item categories__item--selected'
										: 'categories__item'
								}
								data-id={e.id}
								onClick={() => {
									handleFilter(e.id);
								}}>
								<img
									className='categories__item__icon'
									src={e.icon}
									alt={e.type_name}
									width={55}
									height={50}
									loading='lazy'
								/>
								<div className='categories__item__box'>
									<h3 className='categories__item__title'>
										{e.type_name}
									</h3>
								</div>
							</li>
						))}
					</ul>

					<img
						className='categories__box__img'
						src={typeImg?.image}
						alt={typeImg?.type_name}
						width={800}
						height={200}
						loading='lazy'
					/>
				</div>

				<Swiper
					slidesPerView={SlidesCount}
					spaceBetween={20}
					freeMode={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					navigation={true}
					modules={[FreeMode, Autoplay, Navigation]}
					className='mySwiper products__list'>
					{products.map((e, i) => (
						<SwiperSlide
							className={
								type === 1 ? 'products__item' : 'products__item__width'
							}
							key={i}>
							<div className='products__item__box'>
								<img
									className='products__image'
									src={e.image}
									alt={e.title}
									width={500}
									height={210}
									loading='lazy'
								/>
							</div>
							<h4 className='products__item__title'>{e.title}</h4>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<Loader status={loader} color={'rgba(0, 0, 0, 0.7)'} />
		</section>
	);
}

export default HomeCategories;
