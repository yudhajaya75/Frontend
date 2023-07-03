import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
    render() {
        var settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            centerMode: true,
            centerPadding: "0px",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: "20px",
                        slidesToShow: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 440,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: "20px",
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        };
        return (
            <div className='py-10'>
                <Slider {...settings}>
                    <div className='bg-cover'>
                        <img src="./images/company.webp" className='h-[250px]' alt="" />
                    </div>
                    <div className='bg-cover'>
                        <img src="./images/company.webp" className='h-[250px]' alt="" />
                    </div>
                    <div className='bg-cover'>
                        <img src="./images/company.webp" className='h-[250px]' alt="" />
                    </div>
                    <div className='bg-cover'>
                        <img src="./images/company.webp" className='h-[250px]' alt="" />
                    </div>
                    <div className='bg-cover'>
                        <img src="./images/company.webp" className='h-[250px]' alt="" />
                    </div>
                    <div className='bg-cover'>
                        <img src="./images/company.webp" className='h-[250px]' alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
};
