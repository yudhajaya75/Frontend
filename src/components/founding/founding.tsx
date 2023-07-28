import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../founding/slider.css'
import axios from 'axios';

const Team = () => {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4001/founder-card';
    useEffect(() => {
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])

    return (


        <div className='flex justify-evenly mt-20 flex-wrap'>

            {
                content.map((res: any) => (
                    <div className='w-[220px] text-[#002157] p-2'>
                        <img src={res.image} className='' />
                        <p className='font-bold'>{res.name}</p>
                        <p className='  '>{res.title}</p>
                    </div>
                ))
            }

        </div>
    );
};



export default Team;  