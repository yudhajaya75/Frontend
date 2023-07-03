import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blog = () => {
    return (
        <>
            <div className='relative'>
                <div className='grid grid-cols-1 content-start w-[1300px] h-auto relative '>
                    <div className=' relative left-[100px] top-[120px]'>
                        <a href="blog3"><img className='h-[380px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[400px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-5 relative top-10 left-[280px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[25px]' alt="" />
                                </a>
                            </div>
                            <div className='relative top-5 left-[150px] text-[#8B8B8B]'>
                                <p>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[0px] left-0'>
                                <p className='font-bold text-[25px]'>100k</p>
                                <p className='text-[#8B8B8B]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[100px] bottom-[20px]'>
                        <a href="blog3"><img className='h-[380px]' src='./images/blog2.webp' alt='' /></a>
                        <div className='w-[400px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-5 relative top-10 left-[280px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[25px]' alt="" />
                                </a>
                            </div>
                            <div className='relative top-5 left-[150px] text-[#8B8B8B]'>
                                <p>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[0px] left-0'>
                                <p className='font-bold text-[25px]'>100k</p>
                                <p className='text-[#8B8B8B]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[100px] bottom-[170px]'>
                        <a href="blog3"><img className='h-[380px]' src='./images/blog3.webp' alt='' /></a>
                        <div className='w-[400px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                            <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-5 relative top-10 left-[280px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[25px]' alt="" />
                                </a>
                            </div>
                            <div className='relative top-5 left-[150px] text-[#8B8B8B]'>
                                <p>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[0px] left-0'>
                                <p className='font-bold text-[25px]'>100k</p>
                                <p className='text-[#8B8B8B]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-l-2 h-[2289px] absolute left-[42%] top-[50px]'>
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
            <div className='-ml-3'>
                <div className='grid grid-cols-1 content-start h-auto'>
                    <div className=' relative left-[30px] top-[50px]'>
                        <a href="#"><img className='h-[122px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[130px] h-[170px] border-2 bg-white p-5 rounded-lg z-10 relative left-[3px] bottom-[50px]'>
                            <p className='font-bold text-[7px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative top-4 text-justify text-[5px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-3 relative top-7 left-[70px] w-[30px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[25px]' alt="" />
                                </a>
                            </div>
                            <div className='relative top-5 left-[30px] text-[#8B8B8B]'>
                                <p className='text-[4px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[10px] left-0'>
                                <p className='font-bold text-[5px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[5px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[30px] top-[20px]'>
                        <a href="#"><img className='h-[122px]' src='./images/blog2.webp' alt='' /></a>
                        <div className='w-[130px] h-[170px] border-2 bg-white p-5 rounded-lg z-10 relative left-[3px] bottom-[50px]'>
                            <p className='font-bold text-[7px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative top-4 text-justify text-[5px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-3 relative top-7 left-[70px] w-[30px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[25px]' alt="" />
                                </a>
                            </div>
                            <div className='relative top-5 left-[30px] text-[#8B8B8B]'>
                                <p className='text-[4px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[10px] left-0'>
                                <p className='font-bold text-[5px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[5px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[30px] bottom-[10px]'>
                        <a href="#"><img className='h-[122px]' src='./images/blog3.webp' alt='' /></a>
                        <div className='w-[130px] h-[170px] border-2 bg-white p-5 rounded-lg z-10 relative left-[3px] bottom-[50px]'>
                            <p className='font-bold text-[7px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative top-4 text-justify text-[5px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-3 relative top-7 left-[70px] w-[30px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[25px]' alt="" />
                                </a>
                            </div>
                            <div className='relative top-5 left-[30px] text-[#8B8B8B]'>
                                <p className='text-[4px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[10px] left-0'>
                                <p className='font-bold text-[5px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[5px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-l-2 h-[860px] absolute left-[38%] top-[140px]'>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Founding;  
