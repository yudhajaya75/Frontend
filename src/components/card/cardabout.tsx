import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/cardabout.css';


const Cards = () => {

    const cards = [
        {
            title: 'Webinar',
            image: './images/webminar.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.asdasdas',
            link: '/webinar'
        },
        {
            title: 'Layanan konseling individu pasangan & keluarga',
            image: './images/layanan.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.asdasdas',
            link: '/layanan'
        },
        {
            title: 'Pelatihan',
            image: './images/pelatihan.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.asdasdas',
            link: '/pelatihan'
        },
        {
            title: 'Konsultasi',
            image: './images/konsultasi.webp',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.asdasdas',
            link: '/konsultasi'
        }
    ];
    return (
        <div className='cardabt'>
            {cards.map((card, index) => (
                <div className='cardab' key={index}>
                    <div className='card-about'>
                        <div className='cardbd'>
                            <img className='card-img' src={card.image} alt='logo' />
                            <div className='card-body'>
                                <h3 className='card-title'>{card.title}</h3>
                                <p className='card-text'>{card.text}</p>
                                <a href={card.link}>
                                    <button className='card-cta'>Lihat Selengkapnya</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
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
    const cards = [
        {
            image: './images/webminar.webp',
            title: 'Webinar',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: '/layanan/webminar'
        },
        {
            image: './images/layanan.webp',
            title: 'Layanan konseling individu pasangan & keluarga',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: '/layanan/webminar'
        },
        {
            image: './images/pelatihan.webp',
            title: 'Pelatihan',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: '/layanan/webminar'
        },
        {
            image: './images/konsultasi.webp',
            title: 'Konsultasi',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            link: '/layanan/webminar'
        }
    ];
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
                {cards.map((card, index) => (
                    <div className='p-10' key={index}>
                        <div className='border border-gray-300 rounded-lg'>
                            <img className='h-[300px] w-[410px]' src={card.image} alt='logo' />
                            <div className='card-body'>
                                <h3 className='relative bottom-2 text-center font-bold text-xl'>{card.title}</h3>
                                <p className='card-text'>{card.text}</p>
                                <Link to={card.link}>
                                    <div className='flex items-center justify-center'>
                                        <button className='px-8 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600 transition-colors duration-200 ease-in-out'>
                                            Lihat Selengkapnya
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default Founding;
