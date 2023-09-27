import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Teks from "../../components/teks/teks-kata-mereka";
import Card from "../../components/card/cardhome";
import Sosmed from "../../components/sosmed/Founding";
import Youtube from "../../components/youtube/youtube";
import Article2 from "../../components/articlehome/article2";
import Questions from "../../components/questions/questions";
import AboutCard from "../../components/card/about-card";
import Layanan from "../../components/iconshome/Layanan";
import LayoutWithBanner from "../../layouts/LayoutWithBanner";
import useBanHome from "../../hooks/useBanHome";
import "swiper/swiper-bundle.min.css";
import Image from "../../components/global/Image";
import CLink from "../../components/button/CLink";

const Home = (props: { email: string }) => {
  const { banner, sliderhome } = useBanHome();

  return (
    <LayoutWithBanner
      bgImage={"bg-heroPattern"}
      accountEmail={props.email}
      firstElement={
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#002157]">
            {banner?.attributes.header}
          </h1>
          <p className="font-extralight text-3xl lg:text-4xl text-[#5B5B5B]">
            {banner?.attributes.desc}
          </p>
          <CLink url="/signup" customClass="w-fit text-3xl">
            Daftar Sekarang
          </CLink>
        </div>
      }
      secondElement={
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper bg-people bg-contain bg-no-repeat w-[300px] h-[300px]  sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] overflow-hidden"
        >
          {sliderhome &&
            sliderhome.map((res, index) => (
              <SwiperSlide key={index}>
                <div className="w-[225px] h-[225px] sm:w-[325px] sm:h-[325px] xl:w-[425px] xl:h-[425px] rounded mx-auto">
                  <Image
                    src={res.attributes.image.data.attributes.url}
                    alt="background-people"
                    customClass="h-full w-full mt-10 rounded-[10%]"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      }
    >
      <AboutCard />
      <Card />
      <Layanan />
      <div className="mt-20">
        <Teks />
      </div>
      <Sosmed />
      <Youtube />
      <Article2 />
      <Questions />
    </LayoutWithBanner>
  );
};

export default Home;
