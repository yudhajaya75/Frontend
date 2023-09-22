import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Banner from "../../components/banner/banwebminar3";
import Teks4 from "../../components/teks/teks-webinar5";
import Teks3 from "../../components/teks/teks-kata-mereka";
import Sosmed from "../../components/sosmed/Founding";
import Footer from "../../components/footer/footwebminar";
import TextHeadingComponent from "../../components/teks/TextHeadingComponent";
import { ButtonPesan } from "../../components/button/ButtonPesan";
import TextDescComponent from "../../components/teks/TextDescComponent";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Purchase from "../../components/purchase/purchase";
import GlobalLayout from "../../layouts/GlobalLayout";
import LayoutWithBanner from "../../layouts/LayoutWithBanner";

const WebinarDetail = (props: { email: string }) => {
  const [content, setContent] = useState<any>();
  const { id } = useParams();
  const isLoggedIn = props.email !== "";

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/products/${id}?populate[0]=product_variants.features&populate[1]=image`,
        {
          method: "GET",
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setContent(response.data.data);
      });
  }, []);
  console.log("test", content);

  return (
    <LayoutWithBanner
      bgImage={"bg-webinarDetail"}
      firstElement={undefined}
      secondElement={undefined}
    >
      <div className="flex justify-center flex-col gap-y-10 my-20">
        {isLoggedIn ? (
          <>
            <div className="mb-10">
              <TextHeadingComponent heading="Pelatihan Belajar Life Planning untuk Gen Z" />
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-5">
              {content?.attributes.product_variants.data.map(
                (res: any, index: number) => (
                  <Purchase
                    key={index}
                    title={res.attributes.title}
                    content={res.attributes.content}
                    desc={res.attributes.desc}
                    price={res.attributes.price}
                    features={res.attributes.features}
                    isPopular={res.attributes.isPopuler}
                    id={res.id}
                  />
                )
              )}
            </div>
          </>
        ) : (
          <>
            <TextHeadingComponent heading={content?.attributes.title} />
            <ButtonPesan accountEmail={props.email} />
          </>
        )}
      </div>
      <TextDescComponent
        title="Pelatihan ini ?"
        body={content?.attributes.body}
      />
      <Teks3 />
      <Sosmed />
    </LayoutWithBanner>
  );
};

export default WebinarDetail;
