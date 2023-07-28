import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CgArrowTopRightO, CgChevronLeft, CgChevronRight } from "react-icons/cg";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Consultation = () => {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4001/slider-section-info';
        useEffect(() =>{
        axios.get(url)
        .then((response) => {
            setContent(response.data.data);
        })
    }, [])

    return (
        <>
            <div className="relative mt-10 xl:mt-[100px] ">
                <div className="p-4 w-[400px] text-center mx-auto ">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-[#002157] ">Kenapa harus konsultasi di Konseling Satir</h3>
                </div>
                <div className="flex justify-evenly  gap-y-5 mt-20 flex-wrap">
                {
                    content.map((res: any) => (
                            <div className=" w-[300px] shadow-lg rounded-md">
                                <img src={res.image_slider} alt="" className=" w-[100%] h-[180px]" />
                                <div className=" w-full p-6  ">
                                    <h3 className="text-xl  mb-[15px]  ">{res.title}.</h3>
                                    <p className="text-lg text-justify line-clamp-4">{res.desc}</p>
                                </div>
                            </div>

                        ))
                }   
                </div>

            </div>
        </>
    )
}


export default Consultation;