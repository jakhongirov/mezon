import './company.scss';
import Logo from '../../assets/images/2023-06-23 16.08.38.jpg';

function Company() {
	return (
		<section className='company'>
			<div className='container'>
				<div className='company__left-box'>
					<img src={Logo} alt='logo' width={550} height={550} />
				</div>

				<div className='company__right-box'>
					<h2 className='company__heading'>ДОБРО ПОЖАЛОВАТЬ В КОМПАНИЮ</h2>

					<p className='company__info'>
						В 2014 году была основана компания «Элита», а в 2020 году она
						была переименована в «Мезон». Работали специалисты с 15-20
						летним стажем Преимущества компании «Мезон» – высокое
						качество, гарантия 5 лет, краткосрочная и своевременная
						подготовка заказа.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Company;
