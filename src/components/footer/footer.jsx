import { Link } from 'react-router-dom';
import './footer.scss';
import content from '../../Localization/content';

import Logo from '../../assets/images/logo.png';
import Instagram from '../../assets/images/instagram.svg';
import Telegram from '../../assets/images/telegram.svg';
import Facebook from '../../assets/images/facebook.svg';
// import Youtube from '../../assets/images/youtube.svg'
import Email from '../../assets/images/email.svg';

function Footer({ lang }) {
	const sendMessageBot = (e) => {
		e.preventDefault();
		const { name, phone } = e.target.elements;
		const token = '6024173886:AAHkifTWBAvWb67LHyZzA5-yiFpko0lrJys';
		const chat_id = -1001663976347;
		const text = `
                name: ${name.value} %0A phone: ${phone.value}
            `;

		const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

		let api = new XMLHttpRequest();
		api.open('GET', url, true);
		api.send();

		name.value = null;
		phone.value = null;
		console.log('Message sent');
	};

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__box'>
					<ul className='footer__left__list'>
						<li className='footer__left__item'>
							<Link to={'/'}>
								<img
									className='logo'
									src={Logo}
									alt='logo'
									width={80}
									height={80}
								/>
							</Link>
						</li>

						<li className='footer__left__item'>
							<svg
								width='24'
								height='24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M5.737 4.044C4.829 5.035 3.985 6.274 4 7.952c.016 1.74.962 4.23 4.39 7.658s5.918 4.374 7.658 4.39c1.679.015 2.917-.83 3.908-1.737l-3.141-3.14-1.25 1.25a1 1 0 0 1-1.13.198c-1.645-.768-3.097-1.718-4.194-2.805-1.612-1.595-2.476-3.32-2.84-4.265a1 1 0 0 1 .227-1.066l1.25-1.25-3.141-3.14zM4.35 2.597c.755-.81 1.996-.771 2.734-.033l3.262 3.262c.75.75.75 1.968 0 2.718l-.824.825a10.88 10.88 0 0 0 2.125 2.976c.767.76 1.791 1.478 3.009 2.107l.799-.799c.75-.75 1.968-.75 2.718 0l3.262 3.262c.738.738.777 1.98-.033 2.734-1.128 1.052-2.872 2.374-5.373 2.35-2.488-.022-5.451-1.371-9.054-4.975C3.372 13.421 2.023 10.458 2 7.97 1.977 5.47 3.3 3.725 4.351 2.597z'
									fill='#000'
								/>
							</svg>
							<a
								className='footer__left__item__link'
								href='tel:+998770807030'>
								+998 77 080 70 30
							</a>
						</li>
						<li className='footer__left__item'>
							<svg
								width='24'
								height='24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M5.737 4.044C4.829 5.035 3.985 6.274 4 7.952c.016 1.74.962 4.23 4.39 7.658s5.918 4.374 7.658 4.39c1.679.015 2.917-.83 3.908-1.737l-3.141-3.14-1.25 1.25a1 1 0 0 1-1.13.198c-1.645-.768-3.097-1.718-4.194-2.805-1.612-1.595-2.476-3.32-2.84-4.265a1 1 0 0 1 .227-1.066l1.25-1.25-3.141-3.14zM4.35 2.597c.755-.81 1.996-.771 2.734-.033l3.262 3.262c.75.75.75 1.968 0 2.718l-.824.825a10.88 10.88 0 0 0 2.125 2.976c.767.76 1.791 1.478 3.009 2.107l.799-.799c.75-.75 1.968-.75 2.718 0l3.262 3.262c.738.738.777 1.98-.033 2.734-1.128 1.052-2.872 2.374-5.373 2.35-2.488-.022-5.451-1.371-9.054-4.975C3.372 13.421 2.023 10.458 2 7.97 1.977 5.47 3.3 3.725 4.351 2.597z'
									fill='#000'
								/>
							</svg>
							<a
								className='footer__left__item__link'
								href='tel:+998938087030'>
								+998 938 08 70 30
							</a>
						</li>
						<li className='footer__left__item'>
							<img src={Email} alt='Email icon' width={20} height={24} />
							<a
								className='footer__left__item__link'
								href='mailto:mezonmebel@inbox.ru'>
								mezonmebel@inbox.ru
							</a>
						</li>

						<li className='footer__left__item'>
							<div className='footer__left__item__box'>
								<a
									className='footer__left__item__box__link'
									href='https://instagram.com/mezon_eshiklari?igshid=OGQ5ZDc2ODk2ZA=='
									target='_blank'>
									<img
										src={Instagram}
										alt='Instagram icon'
										width={20}
										height={30}
									/>
								</a>
								<a
									className='footer__left__item__box__link'
									href='https://t.me/Mezon_eshiklari'
									target='_blank'>
									<img
										src={Telegram}
										alt='Telegram icon'
										width={20}
										height={30}
									/>
								</a>
								<a
									className='footer__left__item__box__link'
									href='https://www.facebook.com/profile.php?id=100093465972312&mibextid=LQQJ4d'
									target='_blank'>
									<img
										src={Facebook}
										alt='Facebook icon'
										width={20}
										height={30}
									/>
								</a>
								{/* <a className='footer__left__item__box__link' href="https://youtube.com/" target="_blank">
                                    <img src={Youtube} alt="Youtube icon" width={24} height={30} />
                                </a> */}
							</div>
						</li>
					</ul>

					<ul className='footer__right__list'>
						<li className='footer__right__item'>
							<h3 className='footer__right__item__title'>
								{content[lang].footer.quick_link}
							</h3>
						</li>
						<li className='footer__right__item'>
							<Link className='footer__right__item__link' to={'/about'}>
								{content[lang].header.links.about}
							</Link>
						</li>
						<li className='footer__right__item'>
							<Link
								className='footer__right__item__link'
								to={'/categories'}>
								{content[lang].header.links.catalog}
							</Link>
						</li>
						<li className='footer__right__item'>
							<Link
								className='footer__right__item__link'
								to={'/contact'}>
								{content[lang].header.links.contact}
							</Link>
						</li>
					</ul>

					<div className='footer__form-box'>
						<h3 className='footer__form__title'>
							{content[lang].footer.form_title}
						</h3>
						<form onSubmit={sendMessageBot}>
							<input
								className='footer__input-name'
								type='text'
								name='name'
								placeholder={content[lang].input.name}
								required
							/>
							<input
								className='footer__input-name'
								type='text'
								name='phone'
								placeholder={content[lang].input.phone}
								required
							/>
							<button className='footer__form-btn'>
								{content[lang].input.btn}
							</button>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
