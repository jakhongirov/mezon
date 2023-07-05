import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import CategoriesList from "../components/categoriesList/categoriesList"

function Categories() {
    return (
        <>
            <Header />

            <main className="main">
                <CategoriesList />
            </main>

            <Footer />
        </>
    )
}

export default Categories