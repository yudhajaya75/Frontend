import Navbar from "../../components/navbar/navbar";
import Teks from "../../components/teks/tekspayment";
import Payment from "../../components/payment/payment";
import Disc from "../../components/disc/disc";
import Footer from "../../components/footer/footer";
import { useParams } from "react-router-dom";
import useCard from "../../hooks/useCard";
import GlobalLayout from "../../layouts/GlobalLayout";
import FormPayment from "../../components/payment/payment-v2/formPayment";

const Payment2 = (props: { email: string }) => {
  const { content } = useCard();
  const { slug } = useParams();
  const payment: any = content?.filter((item: any) => item.slug == slug)[0];

  return (
    <>
      <GlobalLayout accountEmail={""}>
        <Teks title={payment?.attributes.category} />
        {/* <Payment /> */}
        <FormPayment />
        <div className="mt-36">
          <Disc />
        </div>
      </GlobalLayout>
    </>
  );
};

export default Payment2;
