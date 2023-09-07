import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import SocialMediaProfile from "./sosmed";
import './sosmed.css'

const Mobile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
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
                    dots: true,
                },
            },
        ],
    };

    const [content, setContent] = useState<any>([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/personal-cards?populate=*`)
            .then((response) => {
                setContent(response.data.data);
            })
    }, [])

    return (
        <div style={{ position: 'relative', zIndex: '0', padding: '30px' }}>
            <Slider {...settings}>
                {
                    content.map((res: any, index: number) => (
                        <SocialMediaProfile
                            key={index}
                            name={res.attributes.name}
                            subtitle={res.attributes.title}
                            bio={res.attributes.body}
                            image={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
                            link1={res.attributes.medsos_1}
                            link2={res.attributes.medsos_2}
                        />

                    ))
                }

            </Slider>
        </div>
    );
};

export default Mobile