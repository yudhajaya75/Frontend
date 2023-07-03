import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/cardabout.css';


const Cards = () => {
    return (
        <div className='cardabt'>
            <div className='cardab'>
                <div className='card-about'>
                    <div className='cardbd'>
                        <img className='card-img' src='./images/webminar.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='card-title'>Webinar</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.asdasdas</p>
                            <a href='/webinar'>
                                <button className='card-cta'>Lihat Selengkapnya</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardab'>
                <div className='card-about'>
                    <div className='cardbd'>
                        <img className='card-img' src='./images/layanan.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='card-title'>Layanan konseling individu pasangan & keluarga</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.asdasdas</p>
                            <a href='/layanan'>
                                <button className='card-cta'>Lihat Selengkapnya</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardab'>
                <div className='card-about'>
                    <div className='cardbd'>
                        <img className='card-img' src='./images/pelatihan.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='card-title'>Pelatihan</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.asdasdas</p>
                            <a href='/pelatihan'>
                                <button className='card-cta'>Lihat Selengkapnya</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardab'>
                <div className='card-about'>
                    <div className='cardbd'>
                        <img className='card-img' src='./images/konsultasi.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='card-title'>Konsultasi</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.asdasdas</p>
                            <a href='/konsultasi'>
                                <button className='card-cta'>Lihat Selengkapnya</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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

    return windowWidth <= 440 ? <ImageSlider /> : <Cards />;
};

const ImageSlider = () => {
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
                    dots: true,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <>
            <Slider {...settings}>
                <div className='p-10'>
                    <div className='border border-gray-300 rounded-lg'>
                        <img className='h-[300px] w-[410px]' src='./images/webminar.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='relative bottom-2 text-center font-bold text-xl'>Webinar</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to='/layanan/webminar'>
                                <div className='flex items-center justify-center'>
                                    <button className='px-8 py-2 bg-blue-500 text-white rounded-md focus:outline-none
                                 hover:bg-blue-600 transition-colors duration-200 ease-in-out'>Lihat Selengkapnya</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-10'>
                    <div className='border border-gray-300 rounded-lg'>
                        <img className='h-[300px] w-[410px]' src='./images/layanan.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='relative bottom-2 text-center font-bold text-xl'>Layanan konseling individu pasangan & keluarga</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to='/layanan/webminar'>
                                <div className='flex items-center justify-center'>
                                    <button className='px-8 py-2 bg-blue-500 text-white rounded-md focus:outline-none
                                 hover:bg-blue-600 transition-colors duration-200 ease-in-out'>Lihat Selengkapnya</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-10'>
                    <div className='border border-gray-300 rounded-lg'>
                        <img className='h-[300px] w-[410px]' src='./images/pelatihan.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='relative bottom-2 text-center font-bold text-xl'>Pelatihan</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to='/layanan/webminar'>
                                <div className='flex items-center justify-center'>
                                    <button className='px-8 py-2 bg-blue-500 text-white rounded-md focus:outline-none
                                 hover:bg-blue-600 transition-colors duration-200 ease-in-out'>Lihat Selengkapnya</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-10'>
                    <div className='border border-gray-300 rounded-lg'>
                        <img className='h-[300px] w-[410px]' src='./images/konsultasi.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='relative bottom-2 text-center font-bold text-xl'>Konsultasi</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to='/layanan/webminar'>
                                <div className='flex items-center justify-center'>
                                    <button className='px-8 py-2 bg-blue-500 text-white rounded-md focus:outline-none
                                 hover:bg-blue-600 transition-colors duration-200 ease-in-out'>Lihat Selengkapnya</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    );
};

export default Founding;
