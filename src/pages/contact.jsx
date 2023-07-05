import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import ContactIntro from "../components/contactIntro/contactIntro"
import ContactInfo from "../components/contactInfo/contactInfo"
import SendMessage from "../components/sendMessage/sendMessage"

function ContactPage() {
    return (
        <>
            <Header />

            <main className="main">
                <ContactIntro />
                <ContactInfo />
                <SendMessage />
            </main>

            <Footer />
        </>
    )
}

export default ContactPage