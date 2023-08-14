import './homeDoorsProcducts.scss';
import { useEffect, useState } from 'react';
import { data, categories } from '../../assets/data/data';
import content from '../../Localization/content';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import { FreeMode, Autoplay } from "swiper";

function HomeDoorsProcducts({ lang }) {
	// const [SlidesCount, setSlidesCount] = useState(4)
	const [category, setCategory] = useState(3);
	const [door, setDoor] = useState([]);

	// useEffect(() => {
	//     if (window.innerWidth < 450) {
	//         setSlidesCount(2);
	//     } else if (window.innerWidth < 500) {
	//         setSlidesCount(2);
	//     } else if (window.innerWidth < 800) {
	//         setSlidesCount(3)
	//     } else {
	//         setSlidesCount(4)
	//     }
	// }, [])

	useEffect(() => {
		setDoor(data.filter((e) => e.category_id === category).slice(0, 4));
	}, [category]);

	return (
		<section className='products'>
			<div className='container'>
				<h2 className='products__headding'>
					{content[lang].main.product_heading}
				</h2>

				<ul className='products-list__category__list'>
					{categories.map((e, i) => (
						<li
							key={i}
							className={
								e.id === category
									? 'products-list__category__item products-list__category__item--selected'
									: 'products-list__category__item'
							}
							onClick={() => setCategory(e.id)}>
							{e.category_name}
						</li>
					))}
				</ul>

				<ul
					// slidesPerView={SlidesCount}
					// spaceBetween={15}
					// freeMode={true}
					// autoplay={{
					//     delay: 3000,
					//     disableOnInteraction: false,
					// }}
					// modules={[FreeMode, Autoplay]}
					className='products__list'>
					{door.map((e, i) => (
						<li className='products__item' key={i}>
							<div className='products__item__box'>
								<img
									className='products__image'
									src={e.image}
									alt='bathroom things'
									width={300}
									height={210}
								/>
							</div>
							<h4 className='products__item__title'>{e.title}</h4>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default HomeDoorsProcducts;
