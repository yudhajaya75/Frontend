import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import SocialMediaProfile from "./sosmed";
import "./sosmed.css";
import usePersonalCard from "../../hooks/usePersonalCard";

const Mobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const { personalcard, loading } = usePersonalCard();

  return (
    <div style={{ position: "relative", zIndex: "0", padding: "30px" }}>
      <Slider {...settings}>
        {!personalcard ? (
          <div>No Data</div>
        ) : personalcard.map((res, index: number) => (
          <SocialMediaProfile
            key={index}
            name={res.attributes.name}
            subtitle={res.attributes.title}
            bio={res.attributes.body}
            image={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
            link1={res.attributes.medsos_1}
            link2={res.attributes.medsos_2}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Mobile;
