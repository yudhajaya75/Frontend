import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';

const Registration = () => {
    const [content, setContent] = useState<any>();
    const [contents, setContents] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const galleryResponse = await axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/gallery-home`);
                setContents(galleryResponse.data.data);

                const urlResponse = await axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/home-page`);
                setContent(urlResponse.data.data);

                setLoading(false);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        const delay = 4000; // 1 second delay
        const timeoutId = setTimeout(fetchData, delay);

        return () => clearTimeout(timeoutId);
    }, []);
    console.log(content)

    return (
        <div>
            {loading ? (
                <div>
                    <Skeleton variant="rectangular" width={1600} height={500} />
                </div>
            ) : (
                <div>
                    <div className="md:w-[250px] md:h-[250px] xl:w-[500px] relative lg:left-[60%] lg:top-[15%]">
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
                            {contents.map((res: any) => (
                                <SwiperSlide key={res.id}>
                                    <div className="relative left-[40px] lg:top-[60px] sm-440:top-[-20px] sm-440:w-[200px] sm-440:hidden sm:hidden md:hidden lg:block lg:w-[400px] lg:h-[500px] rounded">
                                        <img src={res.image} alt="background-people" className='w-full h-[400px]' style={{ borderRadius: '10%' }} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div>
                            <img className="absolute -z-10 right-0 lg:top-[10px] sm-440:top-[-20px] sm-440:w-[200px] sm-440:hidden sm:hidden md:hidden lg:block lg:w-[500px] lg:h-[500px]" src='./images/bgpeople.webp' alt="background-people" />
                        </div>
                    </div>
                    <div className='mt-20 '>
                        <div>
                            <img className=" w-full h-[500px] lg:h-[800px] absolute -top-10 -z-30" src={content.url} alt="backgroundS" />
                            <div className="w-full h-[300px] p-2 lg:h-[400px] flex justify-around mt-20 lg:m-0">
                                <div className=' h-[120px] relative bottom-[150px] right-[350px] lg:w-[500px] lg:flex flex-col gap-8'>
                                    <h1 className="text-base sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#002157]">{content.header}</h1>
                                    <p className=" font-extralight text-xs sm:text-lg md:text-xl lg:text-3xl text-[#5B5B5B]">{content.desc}</p>
                                    <div className='mt-5 lg:mt-0'>
                                        <div className="bg-[#002157] hover:bg-[#286cdb] rounded-lg  py-2 px-8 sm:w-[200px] lg:w-[220px]">
                                            <a className=" text-slate-100 lg:text-xl sm-440:text-[15px] font-bold " href="/signup">Daftar Sekarang</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Registration;
