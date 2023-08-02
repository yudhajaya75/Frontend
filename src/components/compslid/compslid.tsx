import React, { Component, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

function Compslid() {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4001/gallery-company';

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

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setContent(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(content)

    return (
        <div className='py-10'>
            <Slider {...settings}>
                {content.map((res: any, index: number) => (
                    <div key={index} className='bg-cover h-[250px]'>
                        <img src={res.image} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}


export default Compslid

