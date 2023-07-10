import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import axios from "axios";

// const Founding = () => {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//         setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return windowWidth <= 440 ? <ImageSlider /> : <Consultation />;
// };

const Consultation = () => {
const [content, setContent] = useState<any>([]);
const url = 'http://localhost:4000/slider-section-info';
useEffect(() =>{
    axios.get(url).then((response) => {
        setContent(response.data.data);
    })
}, [])

console.log(content);

    return (
        <div className="relative mt-10 xl:mt-[100px] ">
            <div className="p-4 w-[400px] text-center mx-auto ">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#002157]">Kenapa harus konsultasi di Konseling Satir</h3>
            </div>
            <div className="flex justify-evenly gap-10 flex-wrap mt-7 ">
                {
                    content.map((res: any) => (
                        <div className="hidden md:block w-[300px] shadow-lg rounded-md ">
                            <img src={res.image_slider} alt="" className=" w-[100%]  mb-[25px] rounded-md" />
                            <div className=" w-full px-2 ">
                                <h3 className="text-xl  mb-[15px]  ">{res.title}</h3>
                                <p className="text-lg ">{res.desc}</p>
                            </div>
                        </div>   
                    ))
                }
                  
            

                {/* <div className="hidden md:block w-[300px] h-[380px] shadow-lg rounded-md ">
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
                </div> */}
            </div>
        </div>
    )
}

export default Consultation;



// const ImageSlider = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 440,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                 },
//             },
//         ],
//     };

//     const sliderRef = React.useRef<Slider>(null);
//     const goToPrevSlide = () => {
//         if (sliderRef.current) {
//             sliderRef.current.slickPrev();
//         }
//     };
//     const goToNextSlide = () => {
//         if (sliderRef.current) {
//             sliderRef.current.slickNext();
//         }
//     };

//     return (
//         <div>
//             <div className="p-4 w-[400px] text-center mx-auto">
//                 <h3 className="text-2xl lg:text-3xl font-semibold text-[#002157]">
//                     Kenapa harus konsultasi di Konseling Satir
//                 </h3>
//             </div>
//             <Slider {...settings}>
//                 <div className="relative top-2 right-2 p-5">
//                     <div className="w-[300px] h-[380px] shadow-lg rounded-md relative left-16">
//                         <img src="./images/home.webp" alt="" className="w-full mb-[25px]" />
//                         <div className="w-full h-[200px] px-2">
//                             <h3 className="text-xl mb-[15px]">Judul</h3>
//                             <p className="text-lg">
//                                 Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor
//                                 amet.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="relative top-2 right-2 p-5">
//                     <div className="w-[300px] h-[380px] shadow-lg rounded-md relative left-16">
//                         <img src="./images/home.webp" alt="" className="w-full mb-[25px]" />
//                         <div className="w-full h-[200px] px-2">
//                             <h3 className="text-xl mb-[15px]">Judul</h3>
//                             <p className="text-lg">
//                                 Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor
//                                 amet.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="relative top-2 right-2 p-5">
//                     <div className="w-[300px] h-[380px] shadow-lg rounded-md relative left-16">
//                         <img src="./images/home.webp" alt="" className="w-full mb-[25px]" />
//                         <div className="w-full h-[200px] px-2">
//                             <h3 className="text-xl mb-[15px]">Judul</h3>
//                             <p className="text-lg">
//                                 Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor
//                                 amet.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//             </Slider>
//             <div className="flex top-[120%] left-3 w-[95%] justify-between absolute md:hidden text-[#002157]">
//                 <button onClick={goToPrevSlide}>
//                     <SlArrowLeft size={23} />
//                 </button>
//                 <button onClick={goToNextSlide}>
//                     <SlArrowRight size={23} />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Founding;