import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import axios from 'axios';

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

//     return windowWidth <= 440 ? <ImageSlider /> : <Articel />;
// };

const Articel = () => {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4000/articel-card';
        useEffect(() =>{
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])



    return (
        <div className="lg:mt-[100px] relative p-2">
            <h2 className="text-5xl lg:text-3xl text-center font-semibold text-[#002157]">Artikel</h2>
            <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px]">

                {
                    content.map((res:any) => (
                        <div className="relative">
                            <a href="blog3"><img src={res.image_articel} alt="" className=" w-[350px] h-[270px]" /></a>
                            <div className="w-[100%] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                                <p>{res.desc}</p>
                            </div>
                        </div>
                    ))
                }
                {/* <div className="h-[270px] relative hidden md:block ">
                    <a href="blog3"><img src='./images/home6.webp' alt="" className=" w-[350px] h-[270px]" /></a>
                    <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                        <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="h-[270px] relative hidden md:block">
                    <a href="blog3"><img src='./images/home7.webp' alt="" className=" w-[350px] h-[270px]" /></a>
                    <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                        <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="h-[270px] relative hidden md:block">
                    <a href="blog3"><img src='./images/home8.webp' alt="" className=" w-[350px] h-[270px]" /></a>
                    <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                        <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> */}

            </div>

            <div className="bg-[#002157] w-[200px] h-[40px] text-slate-100 font-semibold rounded-[5px] shadow-lg mx-auto mt-10 lg:mt-[80px] text-center pt-[8px]">
                <a href="home2" >Lihat semua artikel</a>
            </div>
        </div>
    )
}

// const ImageSlider = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         // Fetch data from Strapi
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:1337/api/articel');
//                 setData(response.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchData();
//     }, []);
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

//     return (
//         <>
//             <h2 className="text-5xl lg:text-3xl text-center font-semibold text-[#002157]">Artikel</h2>
//             <Slider {...settings}>
//                 <div className="lg:mt-[100px] relative p-2">
//                     <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px]">
//                         <div className="h-[270px] relative  ">
//                             <a href="blog3"><img src='./images/home5.webp' alt="" className=" w-[350px] h-[270px]" /></a>
//                             <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
//                                 <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             </div>
//                         </div>
//                         <div className="h-[270px] relative hidden md:block ">
//                             <a href="blog3"><img src='./images/home6.webp' alt="" className=" w-[350px] h-[270px]" /></a>
//                             <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
//                                 <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             </div>
//                         </div>
//                         <div className="h-[270px] relative hidden md:block">
//                             <a href="blog3"> <img src='./images/home7.webp' alt="" className=" w-[350px] h-[270px]" /></a>
//                             <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
//                                 <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             </div>
//                         </div>
//                         <div className="h-[270px] relative hidden md:block">
//                             <a href="blog3"><img src='./images/home8.webp' alt="" className=" w-[350px] h-[270px]" /></a>
//                             <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
//                                 <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="bg-[#002157] w-[200px] h-[40px] text-slate-100 font-semibold rounded-[5px] shadow-lg mx-auto mt-10 lg:mt-[80px] text-center pt-[8px]">
//                         <a href="home2" >Lihat semua artikel</a>
//                     </div>
//                 </div>
//             </Slider>
//             <div className="flex top-[120%] left-3 w-[95%] justify-between absolute md:hidden text-[#002157]">
//                 <SlArrowLeft size={23} />
//                 <SlArrowRight size={23} />
//             </div>
//         </>
//     );
// };



export default  Articel;
// Founding;