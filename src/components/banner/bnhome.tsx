import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const imageSlide = [
    {
        url: '../images/CEO.webp'
    },
    {
        url: '../images/CTO.webp'
    },
    {
        url: '../images/people.webp'
    },
    {
        url: '../images/psikolog.webp'
    },
]

let count = 0;
const Registration = () => {

    useEffect(() => {
        starSlider()
    }, [])

    const starSlider = () => {
        setInterval(() => {
            nextSlide();

        }, 5000)
    }

    const [currentIndex, setCurrentIndex] = useState(0);


    const nextSlide = () => {
        count = (count + 1) % imageSlide.length
        setCurrentIndex(count)
    }

    const prevSlide = () => {
        const imageLength = imageSlide.length;
        count = (currentIndex + imageLength - 1) % imageLength
        setCurrentIndex(count)
    }

    return (
        <div className='mt-20 '>
            <img className=" w-full h-[500px] lg:h-[800px] absolute -top-10 -z-30" src='http://localhost:3000/images/banhome.webp' alt="backgroundS" />
            <div className="w-full  h-[300px] p-2 lg:h-[700px] flex justify-around mt-20 lg:m-0">
                <div className=' h-[120px] mt-[50px] lg:w-[500px] lg:flex flex-col gap-8'>
                    <h1 className="text-base sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#002157]  ">Konseling Satir Indonesia</h1>
                    <p className=" font-extralight text-xs sm:text-lg md:text-xl lg:text-3xl text-[#5B5B5B]">Berproses & Bertumbuh Menjadi<br />  Manusia Utuh</p>

                    <div className='sm-440:pt-6 lg:pt-0'>
                        <div className="bg-[#002157] hover:bg-[#286cdb] lg:w-[200px] sm-440:w-[140px] lg:h-[50px] sm-440:h-[30px] sm-440:py-0
                    sm-440:px-3 lg:flex rounded-xl lg:py-3">
                            <a className=" text-slate-100 lg:text-xl sm-440:text-[15px] font-bold m-auto" href="/signup">Daftar Sekarang</a>
                        </div>
                    </div>
                </div>
                <div className="w-[150px] h-[150px] md:w-[400px] md:h-[400px] lg:w-[400px] xl:w-[500px] relative lg:mr-10 lg:mt-0">
                    <img className="absolute -z-10 right-0 lg:top-[10px] sm-440:top-[-20px] sm-440:w-[200px] sm-440:h-[190px] lg:w-[500px] lg:h-[500px]" src='http://localhost:3000/images/bgpeople.webp' alt="background-people" />
                    <div style={{ backgroundImage: `url(${imageSlide[currentIndex].url})` }} className='w-full h-full lg:w-[400px] lg:h-[400px]  rounded-lg bg-center bg-cover duration-500 lg:mt-[60px] lg:ml-[50px] '></div>
                    <div className='hidden absolute group-cover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer md:text-3xl'>
                        <BsChevronCompactLeft onClick={prevSlide} />
                    </div>
                    <div className='hidden absolute group-cover:block  top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer md:text-3xl'>
                        <BsChevronCompactRight onClick={nextSlide} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Registration;