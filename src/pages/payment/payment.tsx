import Navbar from "../../components/navbar/navbar"
import Teks from "../../components/teks/tekspayment"
import Payment from "../../components/payment/payment"
import Disc from "../../components/disc/disc"
import Footer from "../../components/footer/footer"
import { useParams } from "react-router-dom"
import useCard from "../../hooks/useCard"

const Payment2 = (props: { email: string }) => {
    const { content } = useCard()
    const { slug } = useParams()
    const payment: any = content?.filter((item: any) => item.slug == slug)[0];

    return (
        <>
            <div className='mx-auto max-w-[1910px] relative'>
                <Navbar accountEmail={props.email} />
                <Teks
                    title={payment?.attributes.category} />
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

export default Payment2