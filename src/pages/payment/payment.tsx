import Navbar from "../../components/navbar/navbar"
import Teks from "../../components/teks/tekspayment"
import Payment from "../../components/payment/payment"

const payment = (props: { email: string }) => {
    return (
        <>
            <Navbar accountEmail={props.email} />
            <Teks />
            <Payment />
        </>
    )
}

export default payment