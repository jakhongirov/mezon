import './contactIntro.scss'
import { Link } from 'react-router-dom'

import Arrow from '../../assets/images/contact-arrow.svg'

function ContactIntro() {
    return (
        <section className="contact-intro">
            <div className="container">
                <div className='contact-intro__model'>
                    <div className='contact-intro__box'>
                        <h1 className='contact-intro__heading'>КОНТАКТ</h1>
                        <p className='contact-intro__path'>
                            <Link className='contact-intro__link' to={'/'}>ГЛАВНАЯ</Link>
                            <img className='contact-intro__arrow' src={Arrow} alt="arrow icon" width={7} height={9} />
                            <span>КОНТАКТ</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactIntro