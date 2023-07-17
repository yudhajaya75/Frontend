import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/cardwebminar.css';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

interface WebminarData {
    heading: string;
    subheading: string;
    time: string;
    image: string;
    title: string;
    price: string;
    link: string;
}

const Founding: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const webminarData: WebminarData[] = [
        {
            heading: '2 Day',
            subheading: '02 Min',
            time: '59 Sec',
            image: '/images/webcard.webp',
            title: 'Webinar Belajar Life Planning untuk Gen Z',
            price: 'Rp 375.000',
            link: '/webinar2'
        },
        {
            heading: '2 Day',
            subheading: '02 Min',
            time: '59 Sec',
            image: '/images/webcard2.webp',
            title: 'Webinar Belajar Life Planning untuk Gen Z',
            price: 'Rp 375.000',
            link: '/webinar2'
        },
        {
            heading: '2 Day',
            subheading: '02 Min',
            time: '59 Sec',
            image: '/images/webcard3.webp',
            title: 'Webinar Belajar Life Planning untuk Gen Z',
            price: 'Rp 375.000',
            link: '/webinar2'
        },
        {
            heading: '2 Day',
            subheading: '02 Min',
            time: '59 Sec',
            image: '/images/webcard4.webp',
            title: 'Webinar Belajar Life Planning untuk Gen Z',
            price: 'Rp 375.000',
            link: '/webinar2'
        },
        {
            heading: '2 Day',
            subheading: '02 Min',
            time: '59 Sec',
            image: '/images/webcard5.webp',
            title: 'Webinar Belajar Life Planning untuk Gen Z',
            price: 'Rp 375.000',
            link: '/webinar3'
        },
        {
            heading: '2 Day',
            subheading: '02 Min',
            time: '59 Sec',
            image: '/images/webcard6.webp',
            title: 'Webinar Belajar Life Planning untuk Gen Z',
            price: 'Rp 375.000',
            link: '/webinar3'
        },
        {
            heading: '2 Day',
            subheading: '02 Min',
            time: '59 Sec',
            image: '/images/webcard7.webp',
            title: 'Webinar Belajar Life Planning untuk Gen Z',
            price: 'Rp 375.000',
            link: '/webinar3'
        },
        {
            heading: '2 Day',
            subheading: '02 Min',
            time: '59 Sec',
            image: '/images/webcard8.webp',
            title: 'Webinar Belajar Life Planning untuk Gen Z',
            price: 'Rp 375.000',
            link: '/webinar3'
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth <= 440 ? (
        <ImageSlider webminarData={webminarData} />
    ) : (
        <Card webminarData={webminarData} />
    );
};

const Card: React.FC<{ webminarData: WebminarData[] }> = ({ webminarData }) => {
    return (
        <div className='webminar-card'>
            {webminarData.map((data: WebminarData, index: number) => (
                <div className='card-webminar' key={index}>
                    <div className='image-webminar'>
                        <div className='heading-teks'>{data.heading}</div>
                        <div className='headingg-teks'>{data.subheading}</div>
                        <div className='headinggg-teks'>{data.time}</div>
                        <img src={data.image} alt='/' />
                    </div>
                    <div className='card-title-webminar'>
                        <h3 className='text-webminar'>{data.title}</h3>
                    </div>
                    <div className='card-body-webminar'>
                        <p className='text-webminar'>{data.price}</p>
                    </div>
                    <div className='btn-webminar'>
                        <a href={data.link}>
                            <button className='button-webminar'>Lihat Detail</button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};


const ImageSlider: React.FC<{ webminarData: WebminarData[] }> = ({ webminarData }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const settings = {
        dots: true,
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
                    dots: true
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? webminarData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === webminarData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='container-slider' style={{ padding: '20px' }}>
            <Slider {...settings}>
                {webminarData.map((data: WebminarData, index: number) => (
                    <div className='w-[1400px] p-10 ml-50 grid grid-cols-4 gap-4 relative top-100' key={index}>
                        <div className='w-340 rounded-lg overflow-hidden shadow-md'>
                            <div className='flex justify-center'>
                                <div className='absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800'>
                                    <p>{data.heading}</p>
                                </div>
                                <div className='absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800'>
                                    <p>{data.subheading}</p>
                                </div>
                                <div className='absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800'>
                                    <p>{data.time}</p>
                                </div>
                                <img className='overflow-hidden h-200' src={data.image} alt='/' />
                            </div>
                            <div className='card-title-webminar'>
                                <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>{data.title}</h3>
                            </div>
                            <div className='card-body-webminar'>
                                <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                    {data.price}
                                </p>
                            </div>
                            <div className='btn-webminar'>
                                <a href={data.link}><button className='bg-blue-800 text-white font-bold px-10 py-2 rounded-lg'>Lihat Detail</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className='flex items-center justify-center z-10'>
                <div className='relative bottom-[0px]'>
                    <div className='relative right-[200px] bottom-[300px]'>
                        <button
                            className="mt-10 ml-5 text-[24px] p-5 text-[#002157] cursor-pointer duration-500"
                            style={{}}
                            onClick={handlePrev}
                        >
                            <CgChevronLeft />
                        </button>
                    </div>
                    <div className='relative left-[180px] bottom-[363px]'>
                        <button
                            className="ml-5 text-[24px] p-5 text-[#002157] rounded-md cursor-pointer duration-500"
                            onClick={handleNext}
                        >
                            <CgChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founding;
