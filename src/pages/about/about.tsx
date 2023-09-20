import "react-multi-carousel/lib/styles.css";

import Teks from "../../components/teks/teksabout";
import Card from "../../components/card/cardabout";
import Teks2 from "../../components/teks/teksabout-pendiri";
import Founding from "../../components/founding/founding";
import Compslid from "../../components/compslid/compslid";
import Tesk3 from "../../components/teks/teks-kerjasama";
import LayoutWithBanner from "../../layouts/LayoutWithBanner";
import useBanAbout from "../../hooks/useBanAbout";
import Heading from "../../components/global/Heading";

const About = (props: { email: string }) => {
  const { content } = useBanAbout();

  if (!content) return <div>No Data</div>;
  return (
    <LayoutWithBanner
      bgImage={"bg-About"}
      accountEmail={props.email}
      firstElement={
        <>
          <h1 className="text-5xl font-bold text-[#002157]">
            {content.attributes.header && content.attributes.header}
          </h1>
          <p className="font-extralight text-4xl text-[#5B5B5B]">
            {content.attributes.desc && content.attributes.desc}
          </p>
        </>
      }
      secondElement={
        <div className="w-[225px] h-[225px] sm:w-[325px] sm:h-[325px] xl:w-[425px] xl:h-[425px] rounded mx-auto">
          <img
            src="./images/Group 39.svg"
            alt="background-people"
            className="h-full w-full mt-10"
          />
        </div>
      }
    >
      <Teks />
      <Heading customClass="mb-16">Join Layanan kami yuk! Cek disini</Heading>
      <Card />
      <Teks2 />
      <div className="flex justify-center items-center mr-[10px]">
        <Founding />
      </div>
      <div className="relative top-[150px] left-4">
        <Tesk3 />
        <Compslid />
      </div>
    </LayoutWithBanner>
  );
};

export default About;
