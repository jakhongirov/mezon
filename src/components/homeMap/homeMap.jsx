import './homeMap.scss'

function HomeMap() {
    return (
        <section className="home-map">
            {/* <div className="container"> */}
            <iframe
                className='home__map'
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5994.28136955771!2d69.33225!3d41.305803!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzIwLjkiTiA2OcKwMTknNTYuMSJF!5e0!3m2!1sen!2s!4v1686595851706!5m2!1sen!2s"
                loading="lazy"
                style={{ "border": 'none' }}
            ></iframe>
            {/* </div> */}
        </section>
    )
}

export default HomeMap