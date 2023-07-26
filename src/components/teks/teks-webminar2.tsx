import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Text = () => {
    return (
        <>
            <div className='teks'>
                <h1 className='font-bold left-[80px]
            text-[19px] relative top-[100px]
            text-[#002157] max-w-[300px] text-center
            '>Hubungi kami melalui Whatsapp</h1>
                <div className="flex items-center justify-center relative top-[120px]">
                    <Link to="https://wa.me/6285718053834" target='_blank'><img className='w-[50px]' src="/images/wa.webp" alt="" /></Link>
                </div>
            </div>
        </>
    )
}

const Text1 = () => {
    return (
        <div className='p-10 font-sans font-bold 
        sm:text-left text-4xl sm:text-3xl text-[#074288]'>
            <div className='relative top-[300px]'>
                <h5 className='text-center relative bottom-[100px]'>
                    Hubungi kami melalui Whatsapp
                </h5>
                <div className="flex items-center justify-center relative bottom-20">
                    <Link to="https://wa.me/6285718053834" target='_blank'><img className='w-[50px]' src="/images/wa.webp" alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

const Founding = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth <= 440 ? <Text /> : <Text1 />;
};

export default Founding;
