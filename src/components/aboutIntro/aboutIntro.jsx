import './aboutIntro.scss';
import { Link } from 'react-router-dom';
import content from '../../Localization/content';

import Arrow from '../../assets/images/contact-arrow.svg';

function AboutIntro({ lang }) {
	return (
		<section className='about-intro'>
			<div className='container'>
				<div className='about-intro__model'>
					<div className='about-intro__box'>
						<h1 className='about-intro__heading'>
							{content[lang].header.links.about}
						</h1>
						<p className='about-intro__path'>
							<Link className='about-intro__link' to={'/'}>
								{content[lang].header.links.home}
							</Link>
							<img
								className='about-intro__arrow'
								src={Arrow}
								alt='arrow icon'
								width={7}
								height={9}
							/>
							<span>{content[lang].header.links.about}</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutIntro;
