import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CgArrowTopRightO, CgChevronLeft, CgChevronRight } from "react-icons/cg";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Consultation = () => {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4001/slider-section-info';
    useEffect(() => {
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



// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import React, { useState, useEffect } from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';


// const Consultation = () => {
//     return (
//         <>
//             <div className="relative mt-10 xl:mt-[100px] font-mont">
//                 <div className="p-4 w-[400px] text-center mx-auto ">
//                     <h3 className="text-2xl lg:text-3xl font-bold text-[#002157]">Kenapa harus konsultasi di Konseling Satir</h3>
//                 </div>
//                 <div className="max-w-[1246px] flex justify-evenly gap-10 mx-auto mt-7 ">
//                     <div className=" min-w-[25%] h-[380px] shadow-lg rounded-md ">
//                         <img src='./images/home.webp' alt="" className=" w-[100%]  mb-[25px]" />
//                         <div className=" w-full h-[200px] px-6 ">
//                             <h3 className="text-xl  mb-[15px] font-bold">Judul 1</h3>
//                             <p className="text-[18px] ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
//                         </div>
//                     </div>
//                     <div className="hidden md:block min-w-[25%] h-[380px] shadow-lg rounded-md ">
//                         <img src='./images/home.webp' alt="" className=" w-[100%]  mb-[25px]" />
//                         <div className=" w-full h-[200px] px-6 ">
//                             <h3 className="text-xl  mb-[15px] font-bold">Judul 2</h3>
//                             <p className="text-[18px] ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
//                         </div>
//                     </div>
//                     <div className="hidden md:block min-w-[25%] h-[380px] shadow-lg rounded-md ">
//                         <img src='./images/home.webp' alt="" className=" w-[100%]  mb-[25px]" />
//                         <div className=" w-full h-[200px] px-6 ">
//                             <h3 className="text-xl  mb-[15px] font-bold">Judul 3</h3>
//                             <p className="text-[18px] ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// const Founding = () => {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return windowWidth <= 440 ? <Mobile /> : <Consultation />;
// };

// const Mobile = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const data = [
//         {
//             imgUrl: './images/home.webp',
//             title: 'Judul1',
//             description: 'Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.'
//         },
//         {
//             imgUrl: './images/home.webp',
//             title: 'Judul2',
//             description: 'Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.'
//         },
//         {
//             imgUrl: './images/home.webp',
//             title: 'Judul3',
//             description: 'Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.'
//         }

//     ];

//     const handlePrev = () => {
//         setCurrentIndex(prevIndex => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
//     };

//     const currentItem = data[currentIndex];

//     return (
//         <>
//             <div>
//                 <div className='relative'>
//                     <div className="p-4 w-[400px] text-center mx-auto relative top-[100px]">
//                         <h3 className="text-2xl lg:text-3xl font-semibold text-[#002157]">Kenapa harus konsultasi di Konseling Satir</h3>
//                     </div>
//                     <div className='grid grid-cols-1 content-start w-[1300px] h-auto relative top-[150px]'>
//                         <div className=" w-[300px] h-[380px] shadow-lg rounded-md relative left-[70px]">
//                             <img src={currentItem.imgUrl} alt="" className=" w-[100%]  mb-[25px]" />
//                             <div className=" w-full h-[200px] px-2 ">
//                                 <h3 className="text-xl  mb-[15px]  ">{currentItem.title}</h3>
//                                 <p className="text-lg ">{currentItem.description}</p>
//                             </div>
//                         </div>

//                         <div className='flex items-center justify-center z-10'>
//                             <div className='relative bottom-[300px]'>
//                                 <div className='lg:relative lg:right-[720px] sm-440:relative sm-440:right-[625px] sm-440:top-[90px]
//                                  '>
//                                     <button
//                                         className="lg:mt-10 lg:ml-5 lg:text-[24px] lg:p-5 text-[#002157] cursor-pointer duration-500"
//                                         style={{}}
//                                         onClick={handlePrev}
//                                     >
//                                         <CgChevronLeft />
//                                     </button>
//                                 </div>
//                                 <div className='lg:relative sm-440:relative lg:left-[720px] lg:bottom-[190px] sm-440:-left-[240px] sm-440:top-[63px]'>
//                                     <button
//                                         className="lg:ml-5 lg:text-[24px] lg:p-5 text-[#002157] rounded-md cursor-pointer duration-500"
//                                         onClick={handleNext}
//                                     >
//                                         <CgChevronRight />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Founding;  