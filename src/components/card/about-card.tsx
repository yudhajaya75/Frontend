import React from "react";
import Container from "../global/container";
import useCardPelatihan from "../../hooks/useCardPelatihan";
import useContentHome from "../../hooks/useContentHome";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Skeleton } from "@mui/material";
import "../youtube/responsive.css";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutCard = () => {
  const { tentangkonseling, loading } = useContentHome();

  return (
    <Container
      orientation="horizontal"
      isDebug
      firstElement={
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
          className="mySwiper"
        >
          {!tentangkonseling ? (
            <div>No Data</div>
          ) : (
            tentangkonseling.map((res) => (
              <SwiperSlide key={res.id}>
                <div>
                  <img
                    src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
                    className="w-full h-full lg:w-full lg:h-full rounded-lg bg-center bg-cover duration-500"
                    alt="Konseling Image"
                  />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      }
      secondElement={
        <div className="w-full  flex flex-col gap-1 lg:gap-10 ">
          <h3 className="text-lg font-semibold text-[#002157] sm-440:text-sm sm:text-xl md:text-2xl lg:text-3xl">
            Tentang Konseling Satir
          </h3>
          <p className="font-extralight text-xs text-[#5B5B5B] sm-440:text-sm sm:text-base md:text-lg lg:text-xl">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="bg-[#002157] w-[120px] flex rounded-md py-2 sm:w-[300px] lg:w-[480px] mx-auto mt-2 hover:bg-[#286cdb]">
            <a
              className=" text-slate-100 text-xs sm:text-base lg:text-xl font-bold m-auto"
              href="/signup"
            >
              Daftar Konseling
            </a>
          </div>
        </div>
      }
    />
  );
};

export default AboutCard;
