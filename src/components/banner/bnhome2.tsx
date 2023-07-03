import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Registration = () => {

    return (
        <div className='mt-20 '>
            <img className=" w-full h-[500px] lg:h-[500px] absolute -top-10 -z-30" src='http://localhost:3000/images/banhome.webp' alt="backgroundS" />
            <div className="w-full  h-[300px] p-2 lg:h-[700px] flex justify-around mt-20 lg:m-0">
                <div className='mt-[10px] text-center lg:w-[900px]'>
                    <h1 className="text-base sm:text-1xl md:text-2xl lg:text-5xl font-bold text-[#002157] sm-440:text-[20px]">Semua layanan konseling satir</h1>
                </div>
            </div>
        </div>

    )
}

export default Registration;