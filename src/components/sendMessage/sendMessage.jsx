import './sendmessage.scss';
import content from '../../Localization/content';

function SendMessage({ lang }) {
	const sendMessageBot = (e) => {
		e.preventDefault();
		const { name, phone, message } = e.target.elements;
		const token = '6024173886:AAHkifTWBAvWb67LHyZzA5-yiFpko0lrJys';
		const chat_id = -1001663976347;
		const text = `
            name: ${name.value} %0A phone: ${phone.value} %0A message: ${message.value}
        `;

		const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

		let api = new XMLHttpRequest();
		api.open('GET', url, true);
		api.send();

		name.value = null;
		phone.value = null;
		message.value = null;
	};

	return (
		<section className='send-message'>
			<div className='container'>
				<p className='send-message__title'>
					{lang == 'ru'
						? 'ДОБРО ПОЖАЛОВАТЬ В КОМПАНИЮ'
						: 'KOMPANIYAGA XUSh KELIBSIZ'}
				</p>
				<h2 className='send-message__headding'>
					{content[lang].footer.form_title}
				</h2>

				<form className='send-message__form' onSubmit={sendMessageBot}>
					<div className='send-message__input-box'>
						<input
							className='send-message__input-name'
							type='text'
							name='name'
							placeholder={content[lang].input.name}
							required
						/>
						<input
							className='send-message__input-phone'
							type='text'
							name='phone'
							placeholder={content[lang].input.phone}
							required
						/>
					</div>

					<textarea
						className='send-message__input-message'
						placeholder={content[lang].input.message}
						name='сообщение'
						cols='0'
						rows='10'
						required></textarea>

					<button className='send-message__btn'>
						{content[lang].input.btn}
						<svg
							fill='#fff'
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='25'
							viewBox='0 0 55 55'
							id='arrow'>
							<path d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z'></path>
						</svg>
					</button>
				</form>
			</div>
		</section>
	);
}

export default SendMessage;
