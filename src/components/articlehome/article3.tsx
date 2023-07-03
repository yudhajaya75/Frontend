import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Founding = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth <= 440 ? <ImageSlider /> : <Articel />;
};

const Articel = () => {
    return (
        <div className="lg:mt-[100px] relative p-2">
            <h2 className="text-5xl lg:text-3xl text-center font-semibold text-[#002157]">Artikel</h2>
            <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px]">
                <div className="h-[270px] relative  ">
                    <img src='./images/home5.webp' alt="" className=" w-[350px] h-[270px]" />
                    <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                        <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="h-[270px] relative hidden md:block ">
                    <img src='./images/home6.webp' alt="" className=" w-[350px] h-[270px]" />
                    <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                        <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="h-[270px] relative hidden md:block">
                    <img src='./images/home7.webp' alt="" className=" w-[350px] h-[270px]" />
                    <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                        <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="h-[270px] relative hidden md:block">
                    <img src='./images/home8.webp' alt="" className=" w-[350px] h-[270px]" />
                    <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                        <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>

            <div className="bg-[#002157] w-[200px] h-[40px] text-slate-100 font-semibold rounded-[5px] shadow-lg mx-auto mt-10 lg:mt-[80px] text-center pt-[8px]">
                <a href="home2" >Lihat semua artikel</a>
            </div>
            <div className='pb-[200px]'></div>
        </div>
    )
}

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
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

    return (
        <>
            <h2 className="text-5xl lg:text-3xl text-center font-semibold text-[#002157]">Artikel</h2>
            <Slider {...settings}>
                <div className="lg:mt-[100px] relative p-2">
                    <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px]">
                        <div className="h-[270px] relative  ">
                            <img src='./images/home5.webp' alt="" className=" w-[350px] h-[270px]" />
                            <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                                <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="h-[270px] relative hidden md:block ">
                            <img src='./images/home6.webp' alt="" className=" w-[350px] h-[270px]" />
                            <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                                <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="h-[270px] relative hidden md:block">
                            <img src='./images/home7.webp' alt="" className=" w-[350px] h-[270px]" />
                            <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                                <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="h-[270px] relative hidden md:block">
                            <img src='./images/home8.webp' alt="" className=" w-[350px] h-[270px]" />
                            <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                                <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-[#002157] w-[200px] h-[40px] text-slate-100 font-semibold rounded-[5px] shadow-lg mx-auto mt-10 lg:mt-[80px] text-center pt-[8px]">
                        <a href="home2" >Lihat semua artikel</a>
                    </div>
                </div>
            </Slider>
            {/* <div div className="flex top-[120%] left-3 w-[95%] justify-between absolute md:hidden text-[#002157]">
                <SlArrowLeft size={23} />
                <SlArrowRight size={23} />
            </div> */}
        </>
    );
};



export default Founding;