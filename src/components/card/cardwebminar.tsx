import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../card/cardwebminar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';


const Card = () => {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/products?category=webinar`)
            .then((response) => {
                setContent(response.data.data);
                setTimeout(() => setLoading(false), 4000);
            })
    }, [])
    console.log(content);

    return (
        <div className='flex flex-wrap justify-center gap-10 mt-20 ml-14'>
            {loading ? (
                <div className="flex justify-evenly gap-y-5 mt-[200px] flex-wrap">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="w-[300px] shadow-lg rounded-md">
                            <Skeleton variant="rectangular" width={300} height={180} />
                            <div className="w-full p-6">
                                <Skeleton variant="text" width={200} height={32} />
                                <Skeleton variant="text" width={250} height={72} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px] ">
                    {content.map((res: any) => (
                        <div className='shadow-lg w-[320px]  rounded-lg overflow-hidden' key={res.id} >
                            <div className='w-full h-[207px] '>
                                <img src={res.image} alt='/' className='h-full w-full' />
                            </div>
                            <div className='p-2'>
                                <div className='flex gap-4 mt-[-50px] ml-4 text-[#4B465C]'>
                                    <div className='bg-white  rounded-full px-2 py-1 ' >{res.day}</div>
                                    <div className='bg-white  rounded-full px-2 py-1 '>{res.minute}</div>
                                    <div className='bg-white  rounded-full px-2 py-1 '>{res.sec}</div>
                                </div>
                                <div className='ml-3 my-5 flex flex-col gap-y-3'>
                                    <h3 className='text-xl font-semibold text-[#002157]'>{res.title}</h3>
                                    <p className='text-[#4B465C]'>{res.price}</p>
                                </div>
                                <a href={`/webinar/${res.slug}`}>
                                    <div className='bg-[#002157] text-white font-semibold p-[10px] text-center rounded-md w-[90%] mx-auto'>
                                        <button className='button-webminar'>Lihat Detail</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))
                    }
                </div>
            )}
        </div>
    );
};

export default Card;