import Navbar from "../../components/navbar/navbar"
import Paket from "../../components/paket/paket"
import Teks from "../../components/teks/paket"
import Footer from "../../components/footer/footer"



const paket = (props: { email: string }) => {
    return (
        <>
            <Navbar accountEmail={props.email} />
            <Teks />
            <Paket />
            <Footer />
        </>
    )
}

export default paket