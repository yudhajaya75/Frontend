import React, { useEffect, useState, useRef } from 'react';
import '../intro/responsive.css';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const Content = () => {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4001/youtube';
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setContent(response.data.data);
            })
    }, [])
    console.log(content);

    return (
        <section className="mt-20 lg:mt-[200px] h-[500px] lg:h-[700px] sm:h-[780px] ">
            <h2 className="text-2xl lg:text-3xl text-center font-semibold text-[#002157]">Berkenalan dengan Konseling Satir</h2>
            <div className="relative mt-10 lg:mt-[100px]">
                <div>
                    <img src='../images/home3.webp' alt="garis-setengah-lingkaran" className="absolute w-[80%] top-[15%] lg:w-[750px] xl:top-[15%] 2xl:top-[15%]" />
                </div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        content.map((res: any) => (
                            <SwiperSlide>
                                <div key={res.id}
                                    className="absolute w-[95%] md:w-[80%] h-[200px] mt-[100px] left-[3%] md:left-[10%] sm:h-[300px] lg:h-[450px] lg:top-[15%] md:h-[350px] "
                                >
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${res.link}`}
                                        title={res.title}
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Content;
