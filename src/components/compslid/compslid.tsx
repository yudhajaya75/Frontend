import { Skeleton } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useCompanySlide from "../../hooks/useCompanySlide";

function Compslid() {
    const { content, loading } = useCompanySlide();

    return (
        <div className='py-10 mx-[100px]'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {loading ? (
                    <SwiperSlide>
                        <div className="flex gap-10 mt-[50px] ml-[-100px]">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="w-[350px] shadow-lg rounded-md">
                                    <Skeleton variant="rectangular" width={350} height={180} />
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ) : (
                    content.map((res: any, index: number) => (
                        <SwiperSlide key={index}>
                            <div className="">
                                <img src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`} className="w-full h-[200px]" alt="" />
                            </div>
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </div>
    );
}

export default Compslid;
