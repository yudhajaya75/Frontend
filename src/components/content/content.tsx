import React, { useState, useEffect } from 'react';
import '../content/responsive.css'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const imageSlide = [
    {
        url: '../images/home9.webp'
    },
    {
        url: '../images/blog7.webp'
    },
    {
        url: '../images/blog6.webp'
    },
]


let count: number = 0;
const Content = () => {

    useEffect(() => {
        starSlider()
    }, [])

    const starSlider = () => {
        setInterval(() => {
            nextSlide();

        }, 4000)
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const imageLength = imageSlide.length;
        count = (currentIndex + imageLength - 1) % imageLength
        setCurrentIndex(count)
    }

    const nextSlide = () => {
        count = (count + 1) % imageSlide.length
        setCurrentIndex(count)
    }

    return (
        <section className='mt-5 lg:mt-0'>
            <div className="w-full flex flex-row-reverse justify-center">
                <div className='w-full md:w-[40%] flex flex-col gap-1 lg:gap-10 lg:ml-10'>
                    <h3 className="text-lg font-semibold text-[#002157] sm:text-xl md:text-2xl lg:text-3xl">Tentang Konseling Satir</h3>
                    <p className="font-extralight text-xs text-[#5B5B5B] sm:text-base md:text-lg lg:text-xl">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="bg-[#002157] w-[120px] flex rounded-md py-2 sm:w-[300px] lg:w-[480px] mx-auto mt-2 hover:bg-[#286cdb]">
                        <a className=" text-slate-100 text-xs sm:text-base lg:text-xl font-bold m-auto" href="#">Daftar Konseling</a>
                    </div>
                </div>
                <div className="w-[350px] h-[120px] relative px-5 flex items-center justify-center mt-5 sm:w-[500px] sm:h-[200px] md:mt-0 lg:w-[680px] lg:h-[350px]">
                    <div style={{ backgroundImage: `url(${imageSlide[currentIndex].url})` }} className='w-full h-full rounded-lg bg-center bg-cover duration-500'></div>
                    <div className='hidden absolute group-cover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer md:text-3xl'>
                        <BsChevronCompactLeft onClick={prevSlide} />
                    </div>
                    <div className='hidden absolute group-cover:block  top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer md:text-3xl'>
                        <BsChevronCompactRight onClick={nextSlide} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content;
