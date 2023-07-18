import Navbar from "../../components/navbar/navbar"
import Paket from "../../components/paket/paket"
import Teks from "../../components/teks/paket"
import Background from "../../components/background/background"
import Disc from "../../components/disc/disc"
import Footer from "../../components/footer/footer"

const paket = (props: { email: string }) => {
    return (
        <>
            <div className='mx-auto max-w-[1800px] relative'>
                <Navbar accountEmail={props.email} />
                <div className="bg-[#efefef] relative h-[100px]">
                    <Background />
                </div>
                <div className="relative bottom-[70px]">
                    <Teks />
                    <div className="relative left-[20px] lg:flex lg:justify-center lg:items-center lg:mr-[230px]">
                        <Paket />
                    </div>
                </div>
                <div className="relative bottom-[250px]">
                    <Disc />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default paket

// 