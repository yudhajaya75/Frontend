import Slider from "react-slick";
import { Skeleton } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCompanySlide from "../../hooks/useCompanySlide";
import { SwiperSlide } from "swiper/react";

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

    const { content, loading } = useCompanySlide();

    return (
        <div style={{ position: 'relative', zIndex: '0', padding: '30px' }}>
            <Slider {...settings}>
                {loading ? (
                    <div>
                        <Skeleton variant="rectangular" width={350} height={180} />
                    </div>
                ) : (
                    content.map((res: any, index: number) => (
                        <SwiperSlide key={index}>
                            <div className="">
                                <img src={res.image} className="w-full h-[200px]" alt="" />
                            </div>
                        </SwiperSlide>
                    ))
                )}
            </Slider>
        </div>
    );
};

export default Mobile;
