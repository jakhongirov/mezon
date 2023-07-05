import './contactInfo.scss'

import Address from '../../assets/images/address.svg'
import GetinTouch from '../../assets/images/get-in-touch.svg'
import Clock from '../../assets/images/clock.svg'

function ContactInfo() {
    return (
        <section className="contact">
            <div className="container">
                <h2 className='contact__heading'>
                    Свяжись с нами
                </h2>

                <p className='contact__text'>
                    Свяжитесь с нами, чтобы обсудить потребности ваших сотрудников в благополучии сегодня. Пожалуйста, позвоните нам, напишите нам по электронной почте или заполните контактную форму, и мы свяжемся с вами.
                </p>

                <ul className='contact__list'>
                    <li className='contact__item'>
                        <img className='contact__item__icon' src={Address} alt="address icon" width={70} height={70} />
                        <h4 className='contact__item__title'>
                            Адрес
                        </h4>
                        <p className='contact__item__text'>
                            Головной офис: Махтумкули улица, Ташкент, Mirzo Ulugbek, Ташкент, Узбекистан <br />
                        </p>
                    </li>

                    <li className='contact__item'>
                        <img className='contact__item__icon' src={GetinTouch} alt="address icon" width={40} height={40} />
                        <h4 className='contact__item__title'>
                            Связаться
                        </h4>
                        <p className='contact__item__text'>
                            Мобильный: +998 77 080 70 30 <br />
                            Мобильный: +998 93 808 70 30<br />
                            Электронная почта: mezonmebel@inbox.ru
                        </p>
                    </li>

                    <li className='contact__item'>
                        <img className='contact__item__icon' src={Clock} alt="address icon" width={70} height={70} />
                        <h4 className='contact__item__title'>
                            Часы работы
                        </h4>
                        <p className='contact__item__text'>
                            Понедельник-Пятница: 9:00-18:00  <br />
                            Суббота: с 9:00 до полудня <br />
                            <span>Воскресенье: выходной</span>
                        </p>
                    </li>
                </ul>

                <div className='contact__map-box'>
                    <iframe
                        className='contact__map'
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5994.28136955771!2d69.33225!3d41.305803!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzIwLjkiTiA2OcKwMTknNTYuMSJF!5e0!3m2!1sen!2s!4v1686595851706!5m2!1sen!2s"
                        loading="lazy"
                        style={{ "border": 'none' }}
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
