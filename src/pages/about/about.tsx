<<<<<<< HEAD
import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/bnabout'
import Teks from '../../components/teks/teksabout'
import Teks1 from '../../components/teks/teksabout1'
import Card from '../../components/card/cardabout'
import Teks2 from '../../components/teks/teksabout-pendiri'
import Founding from '../../components/founding/founding'
import Compslid from '../../components/compslid/founding'
import Tesk3 from '../../components/teks/teks-kerjasama'
import Footer from '../../components/footer/footabout'
=======
import "react-multi-carousel/lib/styles.css";
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e

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
      bgImage={`${process.env.REACT_APP_UPLOAD_URL}${content?.attributes.image.data.attributes.url}`}
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
      secondElement
    >
      <Teks
        title={content.attributes.title && content.attributes.title}
        body={content.attributes.body && content.attributes.body}
      />
      <Heading customClass="mb-16">Join Layanan kami yuk! Cek disini</Heading>
      <Card />
      <Teks2 />
      <div className="flex justify-center items-center mr-[10px]">
        <Founding />
      </div>
      <div>
        <Tesk3 />
        <Compslid />
      </div>
    </LayoutWithBanner>
  );
};

export default About;
