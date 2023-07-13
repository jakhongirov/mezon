import './contactIntro.scss';
import { Link } from 'react-router-dom';
import content from '../../Localization/content';

import Arrow from '../../assets/images/contact-arrow.svg';

function ContactIntro({ lang }) {
	return (
		<section className='contact-intro'>
			<div className='container'>
				<div className='contact-intro__model'>
					<div className='contact-intro__box'>
						<h1 className='contact-intro__heading'>
							{content[lang].header.links.contact}
						</h1>
						<p className='contact-intro__path'>
							<Link className='contact-intro__link' to={'/'}>
								{content[lang].header.links.home}
							</Link>
							<img
								className='contact-intro__arrow'
								src={Arrow}
								alt='arrow icon'
								width={7}
								height={9}
							/>
							<span>{content[lang].header.links.contact}</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactIntro;
