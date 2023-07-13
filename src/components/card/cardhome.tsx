import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CgArrowTopRightO, CgChevronLeft, CgChevronRight } from "react-icons/cg";
import React, { useState } from 'react';

const Consultation = () => {

    const [activePage, setActivePage] = useState(0);

    const handleNavbarClick = (index: number) => {
        setActivePage(index);
    };

    // const handleNext = () => {
    //     setActivePage(() => () % );
    // };

    // const handlePrev = () => {
    //     setActivePage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
    // };
    return (
        <>
            <div className="relative mt-10 xl:mt-[100px] ">
                <div className="p-4 w-[400px] text-center mx-auto ">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-[#002157]">Kenapa harus konsultasi di Konseling Satir</h3>
                </div>
                <div className="flex justify-evenly gap-10 flex-wrap mt-7 ">
                    <div className=" w-[300px] h-[380px] shadow-lg rounded-md ">
                        <img src='./images/home.webp' alt="" className=" w-[100%]  mb-[25px]" />
                        <div className=" w-full h-[200px] px-2 ">
                            <h3 className="text-xl  mb-[15px]  ">Judul</h3>
                            <p className="text-lg ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-[300px] h-[380px] shadow-lg rounded-md ">
                        <img src='./images/home.webp' alt="" className=" w-[100%]  mb-[25px]" />
                        <div className=" w-full h-[200px] px-2 ">
                            <h3 className="text-xl  mb-[15px]  ">Judul</h3>
                            <p className="text-lg ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-[300px] h-[380px] shadow-lg rounded-md ">
                        <img src='./images/home.webp' alt="" className=" w-[100%]  mb-[25px]" />
                        <div className=" w-full h-[200px] px-2 ">
                            <h3 className="text-xl  mb-[15px]  ">Judul</h3>
                            <p className="text-lg ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='flex items-center justify-center'>
                <div className='relative bottom-[410px]'>
                    <div className='lg:relative lg:right-[720px] sm-440:relative sm-440:right-[190px] sm-440:bottom-[120px]'>
                        <button
                            className="lg:mt-10 lg:ml-5 lg:text-[24px] lg:p-5 text-[#002157] rounded-md cursor-pointer duration-500"
                            onClick={handlePrev}
                        >
                            <CgChevronLeft />
                        </button>
                    </div>
                    <div className='lg:relative sm-440:relative lg:left-[720px] sm-440:left-[190px] sm-440:bottom-[150px] lg:bottom-[70px]'>
                        <button
                            className="lg:ml-5 lg:text-[24px] lg:p-5 text-[#002157] rounded-md cursor-pointer duration-500"
                            onClick={handleNext}
                        >
                            <CgChevronRight />
                        </button>
                    </div>
                </div>
            </div> */}
        </>
    )
}


export default Consultation;