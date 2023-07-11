import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaShare } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <div className='relative'>
                <div className='grid grid-cols-1 content-start w-[1300px] relative '>
                    <div className='absolute left-[530px] bottom-[1650px]'>
                        <div className='w-[400px] h-[400px] p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <a href="#"><p className='text-[30px] font-semibold'>Konseling Satir Indonesia Baru meresmikan gedung baru loh?</p></a>
                            <div className='relative top-5 left-[0px]'>
                                <p className='text-[#8B8B8B]'>06 Maret 2023</p>
                                <hr className='relative top-3' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute left-[530px] bottom-[1450px]'>
                        <div className='w-[400px] h-[400px] p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <a href="#"><p className='text-[30px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                            <div className='relative top-5 left-[0px]'>
                                <p className='text-[#8B8B8B]'>06 Maret 2023</p>
                                <hr className='relative top-3' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute left-[530px] bottom-[1250px]'>
                        <div className='w-[400px] h-[400px] p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <a href="#"><p className='text-[30px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                            <div className='relative top-5 left-[0px]'>
                                <p className='text-[#8B8B8B]'>06 Maret 2023</p>
                                <hr className='relative top-3' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute left-[530px] bottom-[1050px]'>
                        <div className='w-[400px] h-[400px] p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <a href="#"><p className='text-[30px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                            <div className='relative top-5 left-[0px]'>
                                <p className='text-[#8B8B8B]'>06 Maret 2023</p>
                                <hr className='relative top-3' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute left-[530px] bottom-[850px]'>
                        <div className='w-[400px] h-[400px] p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <a href="#"><p className='text-[30px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                            <div className='relative top-5 left-[0px]'>
                                <p className='text-[#8B8B8B]'>06 Maret 2023</p>
                                <hr className='relative top-3' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute left-[530px] bottom-[650px]'>
                        <div className='w-[400px] h-[400px] p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <a href="#"><p className='text-[30px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                            <div className='relative top-5 left-[0px]'>
                                <p className='text-[#8B8B8B]'>06 Maret 2023</p>
                                <hr className='relative top-3' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute left-[530px] bottom-[450px]'>
                        <div className='w-[400px] h-[400px] p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <a href="#"><p className='text-[30px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                            <div className='relative top-5 left-[0px]'>
                                <p className='text-[#8B8B8B]'>06 Maret 2023</p>
                                <hr className='relative top-3' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute left-[530px] bottom-[250px]'>
                        <div className='w-[400px] h-[400px] p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <a href="#"><p className='text-[30px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                            <div className='relative top-5 left-[0px]'>
                                <p className='text-[#8B8B8B]'>06 Maret 2023</p>
                                <hr className='relative top-3' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute left-[530px] bottom-[50px]'>
                        <div className='w-[400px] h-[400px] p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <a href="#"><p className='text-[30px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                            <div className='relative top-5 left-[0px]'>
                                <p className='text-[#8B8B8B]'>06 Maret 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-l-2 h-[2289px] absolute left-[73%] bottom-[0px]'>
                    </div>
                </div>
            </div>
        </>
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

    return windowWidth <= 440 ? <Mobile /> : <Blog />;
};

const Mobile = () => {
    return (
        <>
            <div className='-ml-6'>
                <div className='absolute'>
                    <div className='grid grid-cols-1 content-start '>
                        <div className='absolute left-[170px] bottom-[560px]'>
                            <div className='w-[130px] p-5 relative left-[13px] bottom-[205px] z-10'>
                                <a href="#"><p className='text-[7px] font-semibold'>Konseling Satir Indonesia Baru meresmikan gedung baru loh?</p></a>
                                <div className='relative top-2 left-[0px]'>
                                    <p className='text-[#8B8B8B] text-[6px]'>06 Maret 2023</p>
                                    <hr className='relative top-2' />
                                </div>
                            </div>
                        </div>
                        <div className='absolute left-[170px] bottom-[560px] z-10'>
                            <div className='w-[130px] p-5 relative left-[13px] bottom-[140px]'>
                                <a href="#"><p className='text-[7px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                                <div className='relative top-2 left-[0px]'>
                                    <p className='text-[#8B8B8B] text-[6px]'>06 Maret 2023</p>
                                    <hr className='relative top-2' />
                                </div>
                            </div>
                        </div>
                        <div className='absolute left-[170px] bottom-[560px] z-10'>
                            <div className='w-[130px] p-5 relative left-[13px] bottom-[77px]'>
                                <a href="#"><p className='text-[7px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                                <div className='relative top-2 left-[0px]'>
                                    <p className='text-[#8B8B8B] text-[6px]'>06 Maret 2023</p>
                                    <hr className='relative top-2' />
                                </div>
                            </div>
                        </div>
                        <div className='absolute left-[170px] bottom-[560px] z-10'>
                            <div className='w-[130px] p-5 relative left-[13px] bottom-[10px]'>
                                <a href="#"><p className='text-[7px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                                <div className='relative top-2 left-[0px]'>
                                    <p className='text-[#8B8B8B] text-[6px]'>06 Maret 2023</p>
                                    <hr className='relative top-2' />
                                </div>
                            </div>
                        </div>
                        <div className='absolute left-[170px] bottom-[560px] z-10'>
                            <div className='w-[130px] p-5 relative left-[13px] bottom-[-55px]'>
                                <a href="#"><p className='text-[7px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                                <div className='relative top-2 left-[0px]'>
                                    <p className='text-[#8B8B8B] text-[6px]'>06 Maret 2023</p>
                                    <hr className='relative top-2' />
                                </div>
                            </div>
                        </div>
                        <div className='absolute left-[170px] bottom-[560px] z-10'>
                            <div className='w-[130px] p-5 relative left-[13px] bottom-[-120px]'>
                                <a href="#"><p className='text-[7px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                                <div className='relative top-2 left-[0px]'>
                                    <p className='text-[#8B8B8B] text-[6px]'>06 Maret 2023</p>
                                    <hr className='relative top-2' />
                                </div>
                            </div>
                        </div>
                        <div className='absolute left-[170px] bottom-[560px] z-10'>
                            <div className='w-[130px] p-5 relative left-[13px] bottom-[-187px]'>
                                <a href="#"><p className='text-[7px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                                <div className='relative top-2 left-[0px]'>
                                    <p className='text-[#8B8B8B] text-[6px]'>06 Maret 2023</p>
                                    <hr className='relative top-2' />
                                </div>
                            </div>
                        </div>
                        <div className='absolute left-[170px] bottom-[560px] z-10'>
                            <div className='w-[130px] p-5 relative left-[13px] bottom-[-255px]'>
                                <a href="#"><p className='text-[7px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                                <div className='relative top-2 left-[0px]'>
                                    <p className='text-[#8B8B8B] text-[6px]'>06 Maret 2023</p>
                                    <hr className='relative top-2' />
                                </div>
                            </div>
                        </div>
                        <div className='absolute left-[170px] bottom-[560px] z-10'>
                            <div className='w-[130px] p-5 relative left-[13px] bottom-[-320px]'>
                                <a href=""> <p className='text-[7px] font-semibold'>Lorem Ipsum has been the industry's standard dummy text.</p></a>
                                <div className='relative top-2 left-[0px]'>
                                    <p className='text-[#8B8B8B] text-[6px]'>06 Maret 2023</p>
                                    <hr className='relative top-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-l-2 h-[860px] absolute left-[64%] top-[140px]'>
                </div>
            </div>
        </>
    );
};

export default Founding;  
