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
                    dots: true,
                },
            },
        ],
    };

    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4001/personal-card';
    useEffect(() => {
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])

    return (
        <div style={{ position: 'relative', zIndex: '0', padding: '30px' }}>
            <Slider {...settings}>
                {
                    content.map((res: any) => (
                        <SocialMediaProfile
                            name={res.name}
                            subtitle={res.title}
                            bio={res.body}
                            image={res.image}
                            link1={res.medsos_1}
                            link2={res.medsos_2}
                        />

                    ))
                }

            </Slider>
        </div>
    );
};

export default Mobile