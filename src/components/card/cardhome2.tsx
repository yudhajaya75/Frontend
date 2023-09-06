import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../card/cardhome2.css';

const Card = () => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <h1 className='relative bottom-[350px] left-[60px] font-bold text-[32px] text-[#002157]'>Webinar</h1>
            <p className='relative bottom-[350px] left-[60px] text-[23px] text-[#5B5B5B]'>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className='home2-card'>
                <div className="card-home2">
                    <div className="image-home2">
                        <div className="heading-home2">
                            <p>2 Day</p>
                        </div>
                        <div className="headingg-home2">
                            <p>02 Min</p>
                        </div>
                        <div className="headinggg-home2">
                            <p>59 Sec</p>
                        </div>
                        <img src='/images/webcard.webp' alt="/" />
                    </div>
                    <div className="card-title-home2">
                        <h3 className='text-home2'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                    </div>
                    <div className="card-body-home2">
                        <p className='text-home2'>
                            Rp 375.000
                        </p>
                    </div>
                    <div className="btn-home2">
                        <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                    </div>
                </div>
                <div className="card-home2">
                    <div className="image-home2">
                        <div className="heading2-home2">
                            <p>2 Day</p>
                        </div>
                        <div className="headingg2-home2">
                            <p>02 Min</p>
                        </div>
                        <div className="headinggg2-home2">
                            <p>59 Sec</p>
                        </div>
                        <img src='/images/webcard2.webp' alt="/" />
                    </div>
                    <div className="card-title-home2">
                        <h3 className='text-home2'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                    </div>
                    <div className="card-body-home2">
                        <p className='text-home2'>
                            Rp 375.000
                        </p>
                    </div>
                    <div className="btn-home2">
                        <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                    </div>
                </div>
                <div className="card-home2">
                    <div className="image-home2">
                        <div className="heading3-home2">
                            <p>2 Day</p>
                        </div>
                        <div className="headingg3-home2">
                            <p>02 Min</p>
                        </div>
                        <div className="headinggg3-home2">
                            <p>59 Sec</p>
                        </div>
                        <img src='/images/webcard3.webp' alt="/" />
                    </div>
                    <div className="card-title-home2">
                        <h3 className='text-home2'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                    </div>
                    <div className="card-body-home2">
                        <p className='text-home2'>
                            Rp 375.000
                        </p>
                    </div>
                    <div className="btn-home2">
                        <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                    </div>
                </div>
                <div className="card-home2">
                    <div className="image-home2">
                        <div className="heading4-home2">
                            <p>2 Day</p>
                        </div>
                        <div className="headingg4-home2">
                            <p>02 Min</p>
                        </div>
                        <div className="headinggg4-home2">
                            <p>59 Sec</p>
                        </div>
                        <img src='/images/webcard4.webp' alt="/" />
                    </div>
                    <div className="card-title-home2">
                        <h3 className='text-home2'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                    </div>
                    <div className="card-body-home2">
                        <p className='text-home2'>
                            Rp 375.000
                        </p>
                    </div>
                    <div className="btn-home2">
                        <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                    </div>
                </div>
            </div>
            <div className='relative top-[150px]'>
                <h1 className='relative bottom-[350px] left-[60px] font-bold text-[32px] text-[#002157]'>Pelatihan</h1>
                <p className='relative bottom-[350px] left-[60px] text-[23px] text-[#5B5B5B]'>
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className='home2-card'>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Pelatihan 1</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading2-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg2-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg2-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard2.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Pelatihan 2</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading3-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg3-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg3-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard3.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Pelatihan 3</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading4-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg4-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg4-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard4.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Pelatihan 4</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative top-[300px]'>
                <h1 className='relative bottom-[350px] left-[60px] font-bold text-[32px] text-[#002157]'>Layanan konseling individu pasangan & keluarga</h1>
                <p className='relative bottom-[350px] left-[60px] text-[23px] text-[#5B5B5B]'>
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className='home2-card'>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Layanan Konseling 1</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading2-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg2-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg2-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard2.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Layanan Konseling 2</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading3-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg3-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg3-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard3.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Layanan Konseling 3</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading4-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg4-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg4-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard4.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Layanan Konseling 4</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative top-[420px]'>
                <h1 className='relative bottom-[350px] left-[60px] font-bold text-[32px] text-[#002157]'>Konsultasi</h1>
                <p className='relative bottom-[350px] left-[60px] text-[23px] text-[#5B5B5B]'>
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className='home2-card'>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Konsultasi 1</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading2-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg2-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg2-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard2.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Konsultasi 2</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading3-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg3-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg3-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard3.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Konsultasi 3</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                    <div className="card-home2">
                        <div className="image-home2">
                            <div className="heading4-home2">
                                <p>2 Day</p>
                            </div>
                            <div className="headingg4-home2">
                                <p>02 Min</p>
                            </div>
                            <div className="headinggg4-home2">
                                <p>59 Sec</p>
                            </div>
                            <img src='/images/webcard4.webp' alt="/" />
                        </div>
                        <div className="card-title-home2">
                            <h3 className='text-home2'>Konsultasi 4</h3>
                        </div>
                        <div className="card-body-home2">
                            <p className='text-home2'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="button-home2">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[200px]'></div>
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

    return windowWidth <= 440 ? <ImageSlider /> : <Card />;
};


const ImageSlider = () => {
    const settings = {
        dots: false,
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
                    dots: false,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="container-slider" style={{ padding: '20px' }}>
            <h1 className='relative bottom-[10px] left-[10px] font-bold text-[32px] text-[#002157]'>Webinar</h1>
            <p className='relative bottom-[10px] left-[10px] text-[15px] text-[#5B5B5B]'>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <Slider {...settings}>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard2.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard3.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard4.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
            </Slider>
            <h1 className='relative bottom-[10px] left-[10px] font-bold text-[32px] text-[#002157]'>Pelatihan</h1>
            <p className='relative bottom-[10px] left-[10px] text-[15px] text-[#5B5B5B]'>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <Slider {...settings}>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Pelatihan 1</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard2.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Pelatihan 2</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard3.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Pelatihan 3</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard4.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Pelatihan 4</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
            </Slider>
            <h1 className='relative bottom-[10px] left-[10px] font-bold text-[32px] text-[#002157]'>Layanan konseling individu pasangan & keluarga</h1>
            <p className='relative bottom-[10px] left-[10px] text-[15px] text-[#5B5B5B]'>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <Slider {...settings}>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Layanan konseling 1</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard2.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Layanan konseling 2</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard3.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Layanan konseling 3</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard4.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Layanan konseling 4</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
            </Slider>
            <h1 className='relative bottom-[10px] left-[10px] font-bold text-[32px] text-[#002157]'>Konsultasi</h1>
            <p className='relative bottom-[10px] left-[10px] text-[15px] text-[#5B5B5B]'>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <Slider {...settings}>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Konsultasi 1</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard2.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Konsultasi 2</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard3.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Konsultasi 3</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard4.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Konsultasi 4</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-home2">
                            <a href="/webinar2"><button className="bg-blue-800 hover:bg-[#286cdb] text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Founding;
