import './aboutIntro.scss'
import { Link } from 'react-router-dom'

import Arrow from '../../assets/images/contact-arrow.svg'

function AboutIntro() {
    return (
        <section className="about-intro">
            <div className='container'>
                <div className='about-intro__model'>
                    <div className='about-intro__box'>
                        <h1 className='about-intro__heading'>О нас</h1>
                        <p className='about-intro__path'>
                            <Link className='about-intro__link' to={'/'}>Главное</Link>
                            <img className='about-intro__arrow' src={Arrow} alt="arrow icon" width={7} height={9} />
                            <span>О нас</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutIntro