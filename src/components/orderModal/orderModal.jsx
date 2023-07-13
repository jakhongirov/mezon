import './orderModal.scss';
import content from '../../Localization/content';

function OrderModal({ lang, show, setShow }) {
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
		setShow(false);
		console.log('Message sent');
	};

	return (
		<div className={show ? 'modal' : 'modal--close'}>
			<div className='modal__item'>
				<button className='modal__btn' onClick={() => setShow(false)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='#202020'
						x='0px'
						y='0px'
						width='23'
						height='22'
						viewBox='0 0 50 50'>
						<path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z' />
					</svg>
				</button>

				<form onSubmit={sendMessageBot}>
					<h2 className='modal__item__title'>
						{lang == 'ru' ? 'Оформить заказ' : 'Buyurma berish'}
					</h2>
					<input
						className='modal__input-name'
						type='text'
						name='name'
						placeholder={content[lang].input.name}
						required
					/>
					<input
						className='modal__input-name'
						type='text'
						name='phone'
						placeholder={content[lang].input.phone}
						required
					/>
					<button className='modal__form-btn'>
						{content[lang].input.btn}
					</button>
				</form>
			</div>
		</div>
	);
}

export default OrderModal;
