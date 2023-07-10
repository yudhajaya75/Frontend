import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/cardwebminar.css';
import axios from 'axios';

const Card = () => {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4000/product';
        useEffect(() =>{
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])

    return (
        <>
            <div className='webminar-card'>
                
                {
                    content.map((res: any) => (
                        <div className="card-webminar">
                            <div className="image-webminar" key={res.id}>
                                <div className="heading-teks">
                                    <p>{res.day}</p>
                                </div>
                                <div className="headingg-teks">
                                    <p>{res.minute}</p>
                                </div>
                                <div className="headinggg-teks">
                                    <p>{res.second}</p>
                                </div>
                                <img src={res.image_product} alt="/" />
                            </div>
                            <div className="card-title-webminar">
                                <h3 className='text-webminar'>{res.title}</h3>
                            </div>
                            <div className="card-body-webminar">
                                <p className='text-webminar'>
                                    {res.price}
                                </p>
                            </div>
                            <div className="btn-webminar">
                                <a href="/webinar2"><button className="button-webminar">Lihat Detail</button></a>
                            </div>
                        </div>

                    ))
                }

                {/* <div className="card-webminar">
                    <div className="image-webminar">
                        <div className="heading-teks2">
                            <p>2 Day</p>
                        </div>
                        <div className="headingg-teks2">
                            <p>02 Min</p>
                        </div>
                        <div className="headinggg-teks2">
                            <p>59 Sec</p>
                        </div>
                        <img src='/images/webcard2.webp' alt="/" />
                    </div>
                    <div className="card-title-webminar">
                        <h3 className='text-webminar'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                    </div>
                    <div className="card-body-webminar">
                        <p className='text-webminar'>
                            Rp 375.000
                        </p>
                    </div>
                    <div className="btn-webminar">
                        <a href="/webinar2"><button className="button-webminar">Lihat Detail</button></a>
                    </div>
                </div>
                <div className="card-webminar">
                    <div className="image-webminar">
                        <div className="heading-teks3">
                            <p>2 Day</p>
                        </div>
                        <div className="headingg-teks3">
                            <p>02 Min</p>
                        </div>
                        <div className="headinggg-teks3">
                            <p>59 Sec</p>
                        </div>
                        <img src='/images/webcard3.webp' alt="/" />
                    </div>
                    <div className="card-title-webminar">
                        <h3 className='text-webminar'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                    </div>
                    <div className="card-body-webminar">
                        <p className='text-webminar'>
                            Rp 375.000
                        </p>
                    </div>
                    <div className="btn-webminar">
                        <a href="/webinar2"><button className="button-webminar">Lihat Detail</button></a>
                    </div>
                </div>
                <div className="card-webminar">
                    <div className="image-webminar">
                        <div className="heading-teks4">
                            <p>2 Day</p>
                        </div>
                        <div className="headingg-teks4">
                            <p>02 Min</p>
                        </div>
                        <div className="headinggg-teks4">
                            <p>59 Sec</p>
                        </div>
                        <img src='/images/webcard4.webp' alt="/" />
                    </div>
                    <div className="card-title-webminar">
                        <h3 className='text-webminar'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                    </div>
                    <div className="card-body-webminar">
                        <p className='text-webminar'>
                            Rp 375.000
                        </p>
                    </div>
                    <div className="btn-webminar">
                        <a href="/webinar2"><button className="button-webminar">Lihat Detail</button></a>
                    </div>
                </div>
                <div className="card-webminar">
                    <div className="image-webminar">
                        <div className="heading-teks5">
                            <p>2 Day</p>
                        </div>
                        <div className="headingg-teks5">
                            <p>02 Min</p>
                        </div>
                        <div className="headinggg-teks5">
                            <p>59 Sec</p>
                        </div>
                        <img src='/images/webcard5.webp' alt="/" />
                    </div>
                    <div className="card-title-webminar">
                        <h3 className='text-webminar'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                    </div>
                    <div className="card-body-webminar">
                        <p className='text-webminar'>
                            Rp 375.000
                        </p>
                    </div>
                    <div className="btn-webminar">
                        <a href="/webinar3"><button className="button-webminar">Lihat Detail</button></a>
                    </div>
                </div>
                <div className="card-webminar">
                    <div className="image-webminar">
                        <div className="heading-teks6">
                            <p>2 Day</p>
                        </div>
                        <div className="headingg-teks6">
                            <p>02 Min</p>
                        </div>
                        <div className="headinggg-teks6">
                            <p>59 Sec</p>
                        </div>
                        <img src='/images/webcard6.webp' alt="/" />
                    </div>
                    <div className="card-title-webminar">
                        <h3 className='text-webminar'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                    </div>
                    <div className="card-body-webminar">
                        <p className='text-webminar'>
                            Rp 375.000
                        </p>
                    </div>
                    <div className="btn-webminar">
                        <a href="/webinar3"><button className="button-webminar">Lihat Detail</button></a>
                    </div>
                </div>
                <div className="card-webminar">
                    <div className="image-webminar">
                        <div className="heading-teks7">
                            <p>2 Day</p>
                        </div>
                        <div className="headingg-teks7">
                            <p>02 Min</p>
                        </div>
                        <div className="headinggg-teks7">
                            <p>59 Sec</p>
                        </div>
                        <img src='/images/webcard7.webp' alt="/" />
                    </div>
                    <div className="card-title-webminar">
                        <h3 className='text-webminar'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                    </div>
                    <div className="card-body-webminar">
                        <p className='text-webminar'>
                            Rp 375.000
                        </p>
                    </div>
                    <div className="btn-webminar">
                        <a href="/webinar3"><button className="button-webminar">Lihat Detail</button></a>
                    </div>
                </div>
                <div className="card-webminar">
                    <div className="image-webminar">
                        <div className="heading-teks8">
                            <p>2 Day</p>
                        </div>
                        <div className="headingg-teks8">
                            <p>02 Min</p>
                        </div>
                        <div className="headinggg-teks8">
                            <p>59 Sec</p>
                        </div>
                        <img src='/images/webcard8.webp' alt="/" />
                    </div>
                    <div className="card-title-webminar">
                        <h3 className='text-webminar'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                    </div>
                    <div className="card-body-webminar">
                        <p className='text-webminar'>
                            Rp 375.000
                        </p>
                    </div>
                    <div className="btn-webminar">
                        <a href="/webinar3"><button className="button-webminar">Lihat Detail</button></a>
                    </div> 
                </div> */}
            </div>
        </>

    );
};

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

//     return windowWidth <= 440 ? <ImageSlider /> : <Card />;
// };


// const ImageSlider = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         Array,
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
//         <div className="container-slider" style={{ padding: '20px' }}>
//             <Slider {...settings}>
//                 <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
//                     <div className="w-340 rounded-lg overflow-hidden shadow-md">
//                         <div className="flex justify-center">
//                             <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>2 Day</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>02 Min</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>59 Sec</p>
//                             </div>
//                             <img className='overflow-hidden h-200' src='/images/webcard.webp' alt="/" />
//                         </div>
//                         <div className="card-title-webminar">
//                             <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
//                         </div>
//                         <div className="card-body-webminar">
//                             <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
//                                 Rp 375.000
//                             </p>
//                         </div>
//                         <div className="btn-webminar">
//                             <a href="/webinar2"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
//                     <div className="w-340 rounded-lg overflow-hidden shadow-md">
//                         <div className="flex justify-center">
//                             <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>2 Day</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>02 Min</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>59 Sec</p>
//                             </div>
//                             <img className='overflow-hidden h-200' src='/images/webcard2.webp' alt="/" />
//                         </div>
//                         <div className="card-title-webminar">
//                             <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
//                         </div>
//                         <div className="card-body-webminar">
//                             <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
//                                 Rp 375.000
//                             </p>
//                         </div>
//                         <div className="btn-webminar">
//                             <a href="/webinar2"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
//                     <div className="w-340 rounded-lg overflow-hidden shadow-md">
//                         <div className="flex justify-center">
//                             <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>2 Day</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>02 Min</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>59 Sec</p>
//                             </div>
//                             <img className='overflow-hidden h-200' src='/images/webcard3.webp' alt="/" />
//                         </div>
//                         <div className="card-title-webminar">
//                             <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
//                         </div>
//                         <div className="card-body-webminar">
//                             <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
//                                 Rp 375.000
//                             </p>
//                         </div>
//                         <div className="btn-webminar">
//                             <a href="/webinar2"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
//                     <div className="w-340 rounded-lg overflow-hidden shadow-md">
//                         <div className="flex justify-center">
//                             <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>2 Day</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>02 Min</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>59 Sec</p>
//                             </div>
//                             <img className='overflow-hidden h-200' src='/images/webcard4.webp' alt="/" />
//                         </div>
//                         <div className="card-title-webminar">
//                             <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
//                         </div>
//                         <div className="card-body-webminar">
//                             <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
//                                 Rp 375.000
//                             </p>
//                         </div>
//                         <div className="btn-webminar">
//                             <a href="/webinar2"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
//                     <div className="w-340 rounded-lg overflow-hidden shadow-md">
//                         <div className="flex justify-center">
//                             <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>2 Day</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>02 Min</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>59 Sec</p>
//                             </div>
//                             <img className='overflow-hidden h-200' src='/images/webcard5.webp' alt="/" />
//                         </div>
//                         <div className="card-title-webminar">
//                             <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
//                         </div>
//                         <div className="card-body-webminar">
//                             <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
//                                 Rp 375.000
//                             </p>
//                         </div>
//                         <div className="btn-webminar">
//                             <a href="/webinar3"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
//                     <div className="w-340 rounded-lg overflow-hidden shadow-md">
//                         <div className="flex justify-center">
//                             <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>2 Day</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>02 Min</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>59 Sec</p>
//                             </div>
//                             <img className='overflow-hidden h-200' src='/images/webcard6.webp' alt="/" />
//                         </div>
//                         <div className="card-title-webminar">
//                             <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
//                         </div>
//                         <div className="card-body-webminar">
//                             <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
//                                 Rp 375.000
//                             </p>
//                         </div>
//                         <div className="btn-webminar">
//                             <a href="/webinar3"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
//                     <div className="w-340 rounded-lg overflow-hidden shadow-md">
//                         <div className="flex justify-center">
//                             <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>2 Day</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>02 Min</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>59 Sec</p>
//                             </div>
//                             <img className='overflow-hidden h-200' src='/images/webcard7.webp' alt="/" />
//                         </div>
//                         <div className="card-title-webminar">
//                             <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
//                         </div>
//                         <div className="card-body-webminar">
//                             <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
//                                 Rp 375.000
//                             </p>
//                         </div>
//                         <div className="btn-webminar">
//                             <a href="/webinar3"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
//                     <div className="w-340 rounded-lg overflow-hidden shadow-md">
//                         <div className="flex justify-center">
//                             <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>2 Day</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>02 Min</p>
//                             </div>
//                             <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
//                                 <p>59 Sec</p>
//                             </div>
//                             <img className='overflow-hidden h-200' src='/images/webcard8.webp' alt="/" />
//                         </div>
//                         <div className="card-title-webminar">
//                             <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
//                         </div>
//                         <div className="card-body-webminar">
//                             <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
//                                 Rp 375.000
//                             </p>
//                         </div>
//                         <div className="btn-webminar">
//                             <a href="/webinar3"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
//                         </div>
//                     </div>
//                 </div>
//             </Slider>
//         </div>
//     );
// };

export default Card;
//  Founding;
