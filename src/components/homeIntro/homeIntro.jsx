import './homeIntro.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import content from '../../Localization/content';

import img1 from '../../assets/images/31.png';
import img2 from '../../assets/images/53.png';
import img3 from '../../assets/images/64.png';
import img4 from '../../assets/images/97.png';
import img5 from '../../assets/images/118.png';

const data = [
	{
		id: 3,
		title: 'Neo Classic doors',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate assumenda, sint commodi eos consectetur voluptates corrupti beatae quidem ipsam?',
		image: img3,
		bg: '#bdbcbc8f',
	},
	{
		id: 2,
		title: 'Classic doors',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate assumenda, sint commodi eos consectetur voluptates corrupti beatae quidem ipsam?',
		image: img2,
		bg: '#7972723f',
	},
	{
		id: 1,
		title: 'Hi-Tech doors',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate assumenda, sint commodi eos consectetur voluptates corrupti beatae quidem ipsam?',
		image: img1,
		bg: '#9290902c',
	},
	{
		id: 4,
		title: 'Luxury doors',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate assumenda, sint commodi eos consectetur voluptates corrupti beatae quidem ipsam?',
		image: img4,
		bg: '#4444441a',
	},
	{
		id: 5,
		title: 'Exlusive doors',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate assumenda, sint commodi eos consectetur voluptates corrupti beatae quidem ipsam?',
		image: img5,
		bg: '#a9a8a8aa',
	},
];

function HomeIntro({ lang }) {
	const [products, setProducts] = useState(data);
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = products.length - 1;

		if (index > lastIndex) {
			setIndex(0);
		}

		if (index < 0) {
			setIndex(lastIndex);
		}
	}, [index, products]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 4995);
		return () => clearInterval(slider);
	});

	const next = () => {
		const lastIndex = products.length - 1;
		if (index == lastIndex) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	};

	const back = () => {
		const lastIndex = products.length - 1;

		if (index == 0) {
			setIndex(lastIndex);
		} else {
			setIndex(index - 1);
		}
	};

	return (
		<>
			<section className='home-intro'>
				{/* <div className="container"> */}
				<div className='home-intro__box'>
					<div className='home-intro__left'>
						<h1 className='home-intro__heading'>
							{products[index]?.title}
						</h1>
						<p className='home-intro__desc'>{products[index]?.text}</p>
						<button
							className='home-intro__btn'
							onClick={() => navigate('/categories')}>
							{content[lang].main.intro_btn}
						</button>
					</div>

					<div className='home-intro__left__bg-box'></div>
					<div
						className='home-intro__bg-box'
						style={{ backgroundColor: products[index]?.bg }}></div>

					<div className='home-intro__right'>
						<img
							className='home-intro__right__image'
							src={products[index]?.image}
							alt='Amazing Places'
							width={200}
							height={500}
							loading='lazy'
						/>
					</div>

					<div className='home-intro__right__btn-box'>
						<button
							className='home-intro__right__btn-prev'
							onClick={back}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'>
								<path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
							</svg>
						</button>
						<button
							className='home-intro__right__btn-next'
							onClick={next}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'>
								<path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
							</svg>
						</button>
					</div>
				</div>
				{/* </div> */}
			</section>
		</>
	);
}

export default HomeIntro;
