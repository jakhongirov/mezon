import './company.scss';
import Logo from '../../assets/images/2023-06-23 16.08.38.jpg';
import content from '../../Localization/content';

function Company({ lang }) {
	return (
		<section className='company'>
			<div className='container'>
				<div className='company__left-box'>
					<img src={Logo} alt='logo' width={550} height={550} />
				</div>

				<div className='company__right-box'>
					<h2 className='company__heading'>
						{content[lang].main.about.heading}
					</h2>

					<p className='company__info'>{content[lang].main.about.desc}</p>
				</div>
			</div>
		</section>
	);
}

export default Company;
