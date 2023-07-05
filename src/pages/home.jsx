import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import HomeIntro from "../components/homeIntro/homeIntro"
import HomeDoorsProcducts from "../components/homeDoorsProcducts/homeDoorsProcducts"
import HomeCategories from "../components/homeCategories/homeCategories"
import HomeSales from "../components/homeSales/homeSales"
import HomePartner from "../components/homePartner/homePartner"
import HomeMap from "../components/homeMap/homeMap"

import call from '../assets/images/phone.svg'
import message from '../assets/images/message.svg'

function HomePage() {
    return (
        <>
            <Header />

            <main className="main">
                <HomeIntro />
                <HomeDoorsProcducts />
                <HomeCategories />
                <HomeSales />
                <HomePartner />
                <HomeMap />


                <div className="message_box">
                    <a href="https://t.me/mezon_support_bot" target={"_blank"}>
                        <img src={message} width={70} height={60} />
                    </a>
                </div>

                <div className="call_box">
                    <a href="tel:+998770807030">
                        <img src={call} width={60} height={60} />
                    </a>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default HomePage