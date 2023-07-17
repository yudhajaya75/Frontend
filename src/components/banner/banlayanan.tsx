import React from 'react';

const banner2 = () => {
    return (
        <div className='w-full'>
            <img className='lg:w-full sm-440:w-full lg:h-[550px] sm-440:h-[160px] object-cover lg:mt-[-0px] lg:z-10' src="./images/banner2.webp" alt="" />
            <div className='absolute top-24 left-0 w-full h-screen'>
                <div className='absolute top-1 w-full h-full justify-center'>
                    <div className='md:left-[6%] absolute sm-440:left-[-50px] max-w-[900px] m-auto lg:mt-[250px] sm-440:mt-[70px]'>
                        <h1 className='font-bold text-4xl lg:text-left sm-440:text-left sm-440:ml-20 
                        md:text-6xl  z-10 text-white sm-440:text-[15px] '>Konsultasi</h1>
                        <p className=' lg:max-w-[900px] sm-440:max-w-[220px] lg:text-left sm-440:text-left drop-shadow-2xl 
                        lg:py-8 sm-440:py-0 md:text-4xl z-10 text-white sm-440:text-[11px] ml-20 '>apa itu Layanan Konseling individu
                            pasangan & keluarga dan untuk siapa. title bebas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default banner2;
