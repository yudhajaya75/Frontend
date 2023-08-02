import React, { useEffect, useState } from 'react';
import '../banner/bnabout.css'
import axios from 'axios';

const Banner = () => {
    const [content, setContent] = useState<any>();
    const url = 'http://localhost:4001/about-page';

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setContent(response.data.data);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }, []);

    if (!content) {
        return <div>Loading...</div>;
    }

    console.log(content)

    return (
        <div className='w-full'>
            <img className='w-full h-[800px] object-cover mt-[-100px] z-10' src={content.url} alt="" />
            <div className='absolute top-24 left-0 w-full h-screen'>
                <img className='h-[600px] relative float-right mr-[50px] mt-[100px]' style={{ maxWidth: '17%', height: 'auto' }} src="./images/bgabout1.webp" alt="" />
                <img className='h-[300px] relative float-right mr-[50px] mt-[100px]' style={{ maxWidth: '10%', height: 'auto' }} src="./images/bgabout1.webp" alt="" />
                <div className='absolute top-1 w-full h-full justify-center'>
                    <div className='md:left-[10%] max-w-[800px] m-auto absolute mt-[250px]'>
                        <h1 className='font-bold text-4xl text-center sm:text-left md:text-6xl z-10 text-[#002157]'>{content.header}</h1>
                        <p className='max-w-[600px] text-center sm:text-left drop-shadow-2xl py-10 text-4xl z-10 text-[#5b5b5b]'>{content.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
