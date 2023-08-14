import { Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [content, setContent] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/konsultasi-page`)
            .then((response) => {
                setContent(response.data.data);
                setTimeout(() => setLoading(false), 4000);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }, []);
    console.log(content)

    return (
        <div className='w-full'>
            {loading ? (
                <div className='relative top-[0px]'>
                    <Skeleton variant="rectangular" width={1600} height={500} />
                </div>
            ) : (
                <div>
                    <img className='lg:w-full sm-440:w-full lg:h-[550px] sm-440:h-[160px] object-cover lg:mt-[-0px] lg:z-10' src={content.url} alt="" />
                    <div className='absolute top-24 left-0 w-full h-screen'>
                        <div className='absolute top-1 w-full h-full justify-center'>
                            <div className='md:left-[6%] absolute sm-440:left-[-50px] max-w-[900px] m-auto lg:mt-[170px] sm-440:mt-[70px]'>
                                <h1 className='font-bold text-4xl lg:text-left sm-440:text-left sm-440:ml-20 
                        md:text-6xl  z-10 text-white sm-440:text-[15px] '>{content.header}</h1>
                                <p className=' lg:max-w-[900px] sm-440:max-w-[220px] lg:text-left sm-440:text-left drop-shadow-2xl 
                        lg:py-8 sm-440:py-0 md:text-4xl z-10 text-white sm-440:text-[11px] ml-20 '>{content.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Banner;
