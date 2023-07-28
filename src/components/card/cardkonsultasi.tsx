import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardComponent from './cardComponent';
import axios from 'axios';

const CardKonsultasi = () => {
    const [content, setContent] = useState<any>([])
    const url = 'http://localhost:4001/konsultasi-card';
        useEffect(() =>{
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])
    
    return (
        <>
            <div className='flex justify-center flex-wrap gap-10 mx-auto '>
            {
                content.map((res: any) => (
                    <CardComponent 
                    title={res.title}
                    price={res.price}
                    body={res.body}
                    image={res.image}
                    slug={res.slug}
                    link='konsultasi'
                    />
                ))
            }
            </div>
        </>
    )
}

export default CardKonsultasi;