import React from 'react';

const banner = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-[600px] object-cover' src="http://localhost:3000/images/banpelatihan.webp" alt="" />
            <div className='absolute top-3 left-0 w-full h-screen'>
                <div className='absolute top-3 w-full h-full flex flex-col justify-center text-white'>
                    <div className='md:right-[10%] max-w-[800px] m-auto absolute mt-[200px]'>
                        <h1 className='font-bold text-4xl text-center sm:text-left md:text-6xl z-10'>Pelatihan</h1>
                        <p className='max-w-[600px] text-center sm:text-left drop-shadow-2xl py-10 text-3xl z-10'>
                            apa itu pelatihan dan untuk siapa.
                            <br />title bebas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default banner;
