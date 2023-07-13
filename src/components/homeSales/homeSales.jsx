import './homeSales.scss';
import Pdf from '../../assets/images/Mezon door catalogue.pdf';
import content from '../../Localization/content';

function HomeSales({ lang }) {
	return (
		<section className='home-sales'>
			<div className='container'>
				<div className='home-sales__box'>
					<p className='home-sales__text'>
						{content[lang].main.catalog_title}
					</p>
					<a
						className='home-sales__btn'
						href={Pdf}
						download='Example-PDF-document'
						target='_blank'
						rel='noopener noreferrer'>
						{content[lang].main.catalog_btn}
					</a>
				</div>
			</div>
		</section>
	);
}

export default HomeSales;
