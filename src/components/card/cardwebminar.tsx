import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../card/cardwebminar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Card= () => {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4001/product';
        useEffect(() =>{
        axios.get(url)
        .then((response) => {
            setContent( response.data.data );
        })
    }, [])
    console.log(content);
    
    return (
        <div className='flex flex-wrap justify-center gap-10 mt-20'>
                {
                    content.map(( res:any ) => (
                        <div className='shadow-lg w-[340px]  rounded-lg overflow-hidden' key={res.id} >
                            <div className='w-full h-[207px] '>
                                <img src={res.image} alt='/' className='h-full w-full' />
                            </div>
                            <div className='p-2'>
                                <div className='flex gap-4 mt-[-50px] ml-4 text-[#4B465C]'>
                                    <div className='bg-white  rounded-full px-2 py-1 ' >{res.day}</div>
                                    <div className='bg-white  rounded-full px-2 py-1 '>{res.minute}</div>
                                    <div className='bg-white  rounded-full px-2 py-1 '>{res.second}</div>
                                </div>
                                <div className='ml-3 my-5 flex flex-col gap-y-3'>
                                    <h3 className='text-xl font-semibold text-[#002157]'>{res.title}</h3>
                                    <p className='text-[#4B465C]'>{res.price}</p>
                                </div>
                                <Link to={`/webinar/${res.slug}`}>
                                    <div className='bg-[#002157] text-white font-semibold p-[10px] text-center rounded-md w-[90%] mx-auto'>
                                        <button className='button-webminar'>Lihat Detail</button>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    ))
                }
        </div>
    );
};



export default Card;
