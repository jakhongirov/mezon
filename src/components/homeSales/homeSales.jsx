import './homeSales.scss';
import Pdf from '../../assets/images/Mezon door catalogue.pdf';

function HomeSales() {
	return (
		<section className='home-sales'>
			<div className='container'>
				<div className='home-sales__box'>
					<p className='home-sales__text'>Скачайте наш каталог</p>
					<a
						className='home-sales__btn'
                        href={Pdf}
						download='Example-PDF-document'
						target='_blank'
						rel='noopener noreferrer'>
						скачать каталог
					</a>
				</div>
			</div>
		</section>
	);
}

export default HomeSales;
