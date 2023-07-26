import Navbar from "../../components/navbar/navbar"
import Teks from "../../components/teks/tekspayment"
import Payment from "../../components/payment/payment"
import Disc from "../../components/disc/disc"
import Footer from "../../components/footer/footer"

const payment = (props: { email: string }) => {
    return (
        <>
            <div className='mx-auto max-w-[1910px] relative'>
                <Navbar accountEmail={props.email} />
                <Teks />
                <Payment />
                <div className="relative top-[120px]">
                    <Disc />
                </div>
                <div className="relative top-[200px]">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default payment