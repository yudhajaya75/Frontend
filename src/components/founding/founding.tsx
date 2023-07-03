import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../founding/slider.css'

const Team = () => {
    return (
        <div className=''>
            <div className='w-[220px] mt-20'>
                <img className='ml-[40px]' src='./images/CEO.webp' alt='' />
                <p className='ml-[40px] text-[#002157]'>
                    <p className='font-bold'>Fajar Rahardian Siddiq</p> Founder & CEO
                </p>
            </div>
            <div className='w-[220px] mt-[-150px] ml-[450px]'>
                <img className='ml-[-80px]' src='./images/CTO.webp' alt='' />
                <p className='ml-[-80px] text-[#002157]'>
                    <p className='font-bold'>Maulana Abdullah</p>Co-founder & CTO
                </p>
            </div>
            <div className='w-[220px] mt-[-450px] ml-[900px]'>
                <img className='ml-[-170px]' src='./images/psikolog.webp' alt='' />
                <p className='ml-[-170px] text-[#002157]'>
                    <p className='font-bold'>Robi Hardiana</p>Psikolog Univ. Gajah Mada
                </p>
            </div>
            <div className='w-[220px] mt-[-170px] ml-[1350px]'>
                <img className='ml-[-250px]' src='./images/psikolog2.webp' alt='' />
                <p className='ml-[-250px] text-[#002157]'>
                    <p className='font-bold'>M Pijar </p>Psikolog Univ. Gajah Mada
                </p>
            </div>
        </div>
    );
};

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

    return windowWidth <= 440 ? <Mobile /> : <Team />;
};

const Mobile = () => {
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
        <div className='slider-container'>
            <Slider {...settings}>
                <div>
                    <img src="./images/CEO.webp" alt="" />
                    <p className='text-[#002157] text-center p-10'>
                        <p className='font-bold'>Fajar Rahardian Siddiq</p> Founder & CEO
                    </p>
                </div>
                <div>
                    <img src="./images/CTO.webp" alt="" />
                    <p className='text-[#002157] text-center p-10'>
                        <p className='font-bold'>Maulana Abdullah</p>Co-founder & CTO
                    </p>
                </div>
                <div>
                    <img src="./images/psikolog.webp" alt="" />
                    <p className='text-[#002157] text-center p-10'>
                        <p className='font-bold'>Maulana Abdullah</p>Co-founder & CTO
                    </p>
                </div>
                <div>
                    <img src="./images/psikolog2.webp" alt="" />
                    <p className='text-[#002157] text-center p-10'>
                        <p className='font-bold'>M Pijar </p>Psikolog Univ. Gajah Mada
                    </p>
                </div>
            </Slider>
        </div>
    );
};


export default Founding;  
