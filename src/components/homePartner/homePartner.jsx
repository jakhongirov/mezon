import './homePartner.scss';
import { useEffect, useState } from 'react';

import Gross from '../../assets/images/gross.svg';

const partnersData = [
	{
		id: 1,
		image: 'https://www.agb.it/getmedia/fde84511-dad7-4fc1-8af7-4e8bc8eea78e/agb_r_1.aspx',
	},
	{
		id: 2,
		image: 'https://www.blum.com/corporate/layout/facelift/images/ci/logo.svg.svg',
	},
	{
		id: 3,
		image: 'https://www.belenco.com/images/logo.png',
	},

	// {
	//     id: 4,
	//     image: "https://drile-be87.kxcdn.com/drile/wp-content/uploads/2015/01/logo-1-180x70.png",
	// },
	// {
	//     id: 5,
	//     image: "https://drile-be87.kxcdn.com/drile/wp-content/uploads/2015/01/logo-5-180x70.png",
	// },
];

const clientData = [
	{
		id: 1,
		image: Gross,
	},
	{
		id: 2,
		image: 'https://tezinfo.uz/uploads/companies/luGFdloLsZ.png',
	},
	{
		id: 3,
		image: 'https://bellissimo.uz/images/logo.png',
	},
	{
		id: 4,
		image: 'data:image/jpeg;base64,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',
	},
	// {
	//     id: 5,
	//     image: "https://drile-be87.kxcdn.com/drile/wp-content/uploads/2015/01/logo-5-180x70.png",
	// },
];

function HomePartner() {
	const [partner, setPartner] = useState(partnersData);
	const [client, setClient] = useState(clientData);

	var reveals = document.querySelectorAll('.reveal');
	function reveal() {
		var reveals = document.querySelectorAll('.reveal');

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add('active');
			} else {
				reveals[i].classList.remove('active');
			}
		}
	}

	window.addEventListener('scroll', reveal);

	return (
		<section className='home-partner'>
			<div className='container reveal'>
				<h2 className='home-partner__heading'>Наши партнёры</h2>

				<ul className='mySwiper home-partner__slider'>
					{partner.map((e, i) => (
						<li className='home-partner__slider__item' key={i}>
							<img
								className=''
								src={e.image}
								alt={'image'}
								width={150}
								height={210}
							/>
						</li>
					))}
				</ul>

				<h2 className='home-partner__heading'>Наши клиенты</h2>

				<ul className='mySwiper home-partner__slider'>
					{client.map((e, i) => (
						<li className='home-partner__slider__item' key={i}>
							<img
								className='home-partner__slider__item'
								src={e.image}
								alt={'image'}
								width={150}
								height={210}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default HomePartner;
