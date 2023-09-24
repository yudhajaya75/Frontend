import { useNavigate, useParams } from "react-router-dom";

import Teks from "../../components/teks/tekspayment";
import Disc from "../../components/disc/disc";
import useCard from "../../hooks/useCard";
import GlobalLayout from "../../layouts/GlobalLayout";
import FormPayment from "../../components/payment/payment-v2/formPayment";
import { getTokenAuth } from "../../helper/helper";
import Swal from "sweetalert2";

const Payment2 = (props: { email: string }) => {
  const loggedIn = getTokenAuth();
  const navigation = useNavigate();

  if (!loggedIn) {
    Swal.fire({
      title: "Please login!",
      icon: "info",
    });
    navigation("/login");
  }

  const { content } = useCard();
  const { slug } = useParams();
  const payment: any = content?.filter((item: any) => item.slug === slug)[0];

  return (
    <>
      <GlobalLayout>
        <Teks title={payment?.attributes.category} />
        <FormPayment />
        <div className="mt-36">
          <Disc />
        </div>
      </GlobalLayout>
    </>
  );
};

export default Payment2;
