import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaShare } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../blog/slider.css'

const Blog = () => {
    const [count, setCount] = useState(0);

    const handleImageClick = () => {
        setCount(count + 1)
    };
    return (
        <>
            <div className='relative'>
                <div className='grid grid-cols-1 content-start absolute left-[1000px] top-[-2290px] '>
                    <div className=' relative left-[-10px] top-[70px]' style={{ width: '400px' }}>
                        <a href="blog3"><img className='h-[250px] w-[400px]' src='./images/blog4.webp' alt='' onClick={handleImageClick} /></a>
                        <div className='w-[400px] z-10 relative left-[13px] bottom-[-40px]'>
                            <p className='font-bold text-[25px] relative left-[-12px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div className='relative bottom-[100px] left-[-12px] text-[#8B8B8B]'>
                                <p>02 Hours ago</p>
                            </div>
                            <div className='relative top-[-10px] left-[-10px]'>
                                <p className='font-bold text-[25px]'>{count}</p>
                                <p className='text-[#8B8B8B]'>People Saw</p>
                            </div>
                            <div className='flex gap-5 relative bottom-[55px] left-[325px] w-[100px] '>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[20px]' alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[-10px] top-[120px]' style={{ width: '400px' }}>
                        <a href="blog3"><img className='h-[250px] w-[400px]' src='./images/blog5.webp' alt='' onClick={handleImageClick} /></a>
                        <div className='w-[400px] z-10 relative left-[13px] bottom-[-40px]'>
                            <p className='font-bold text-[25px] relative left-[-12px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div className='relative bottom-[100px] left-[-12px] text-[#8B8B8B]'>
                                <p>02 Hours ago</p>
                            </div>
                            <div className='relative top-[-10px] left-[-10px]'>
                                <p className='font-bold text-[25px]'>{count}</p>
                                <p className='text-[#8B8B8B]'>People Saw</p>
                            </div>
                            <div className='flex gap-5 relative bottom-[55px] left-[325px] w-[100px] '>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[20px]' alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[-10px] top-[170px]' style={{ width: '400px' }}>
                        <a href="blog3"><img className='h-[250px] w-[400px]' src='./images/blog6.webp' alt='' onClick={handleImageClick} /></a>
                        <div className='w-[400px] z-10 relative left-[13px] bottom-[-40px]'>
                            <p className='font-bold text-[25px] relative left-[-12px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div className='relative bottom-[100px] left-[-12px] text-[#8B8B8B]'>
                                <p>02 Hours ago</p>
                            </div>
                            <div className='relative top-[-10px] left-[-10px]'>
                                <p className='font-bold text-[25px]'>{count}</p>
                                <p className='text-[#8B8B8B]'>People Saw</p>
                            </div>
                            <div className='flex gap-5 relative bottom-[55px] left-[325px] w-[100px] '>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[20px]' alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[-10px] top-[220px]' style={{ width: '400px' }}>
                        <a href="blog3"><img className='h-[250px] w-[400px]' src='./images/blog7.webp' alt='' onClick={handleImageClick} /></a>
                        <div className='w-[400px] z-10 relative left-[13px] bottom-[-40px]'>
                            <p className='font-bold text-[25px] relative left-[-12px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div className='relative bottom-[100px] left-[-12px] text-[#8B8B8B]'>
                                <p>02 Hours ago</p>
                            </div>
                            <div className='relative top-[-10px] left-[-10px]'>
                                <p className='font-bold text-[25px]'>{count}</p>
                                <p className='text-[#8B8B8B]'>People Saw</p>
                            </div>
                            <div className='flex gap-5 relative bottom-[55px] left-[325px] w-[100px] '>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[20px]' alt="" />
                                </a>
                            </div>
                        </div>
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
            <div className='grid grid-cols-1 content-start absolute left-[170px] top-[116px] -ml-5'>
                <div className=' relative left-[150px] top-[70px]'>
                    <a href="#"><img className='h-[80px] w-[110px]' src='./images/blog4.webp' alt='' /></a>
                    <div className='w-[100px] z-10 relative left-[13px] bottom-[-40px]'>
                        <p className='font-bold text-[7px] relative left-[-12px] bottom-5'>Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className='relative bottom-[65px] left-[-12px] text-[#8B8B8B] text-[7px]'>
                            <p>02 Hours ago</p>
                        </div>
                        <div className='relative bottom-[20px] left-[-12px]'>
                            <p className='font-bold text-[7px]'>100k</p>
                            <p className='text-[#8B8B8B] text-[7px]'>People Saw</p>
                        </div>
                        <div className='flex gap-2 relative bottom-12 left-[70px] w-[40px] '>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[8px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[10px]' alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[90px]'>
                    <a href="#"><img className='h-[80px] w-[110px]' src='./images/blog5.webp' alt='' /></a>
                    <div className='w-[100px] z-10 relative left-[13px] bottom-[-40px]'>
                        <p className='font-bold text-[7px] relative left-[-12px] bottom-5'>Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className='relative bottom-[65px] left-[-12px] text-[#8B8B8B] text-[7px]'>
                            <p>02 Hours ago</p>
                        </div>
                        <div className='relative bottom-[20px] left-[-12px]'>
                            <p className='font-bold text-[7px]'>100k</p>
                            <p className='text-[#8B8B8B] text-[7px]'>People Saw</p>
                        </div>
                        <div className='flex gap-2 relative bottom-12 left-[70px] w-[40px] '>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[8px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[10px]' alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[110px]'>
                    <a href="#"><img className='h-[80px] w-[110px]' src='./images/blog6.webp' alt='' /></a>
                    <div className='w-[100px] z-10 relative left-[13px] bottom-[-40px]'>
                        <p className='font-bold text-[7px] relative left-[-12px] bottom-5'>Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className='relative bottom-[65px] left-[-12px] text-[#8B8B8B] text-[7px]'>
                            <p>02 Hours ago</p>
                        </div>
                        <div className='relative bottom-[20px] left-[-12px]'>
                            <p className='font-bold text-[7px]'>100k</p>
                            <p className='text-[#8B8B8B] text-[7px]'>People Saw</p>
                        </div>
                        <div className='flex gap-2 relative bottom-12 left-[70px] w-[40px] '>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[8px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[10px]' alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[130px]'>
                    <a href="#"><img className='h-[80px] w-[110px]' src='./images/blog7.webp' alt='' /></a>
                    <div className='w-[100px] z-10 relative left-[13px] bottom-[-40px]'>
                        <p className='font-bold text-[7px] relative left-[-12px] bottom-5'>Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className='relative bottom-[65px] left-[-12px] text-[#8B8B8B] text-[7px]'>
                            <p>02 Hours ago</p>
                        </div>
                        <div className='relative bottom-[20px] left-[-12px]'>
                            <p className='font-bold text-[7px]'>100k</p>
                            <p className='text-[#8B8B8B] text-[7px]'>People Saw</p>
                        </div>
                        <div className='flex gap-2 relative bottom-12 left-[70px] w-[40px] '>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[8px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[10px]' alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Founding;  
