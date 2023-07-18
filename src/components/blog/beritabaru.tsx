import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaShare } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../blog/slider.css'

const Blog2 = () => {
    const [count, setCount] = useState(0);

    const handleImageClick = () => {
        setCount(count + 1)
    };
    return (
        <div>
            <div className='grid grid-cols-3 gap-14 content-start w-[1300px]'>
                <div className=' relative left-[150px] top-[100px] '>
                    <a href="blog3"><img className='h-[380px]' src='./images/blog.webp' alt='' onClick={handleImageClick} /></a>
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[260px] z-10'>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[15px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[20px]' alt="" />
                            </a>
                        </div>
                        <div className='relative top-3 text-[#8B8B8B] left-[130px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-5 left-0'>
                            <p className='font-bold text-[25px]'>{count}</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[100px] '>
                    <a href="blog3"><img className='h-[380px]' src='./images/blog.webp' alt='' onClick={handleImageClick} /></a>
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[260px] z-10'>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[15px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[20px]' alt="" />
                            </a>
                        </div>
                        <div className='relative top-3 text-[#8B8B8B] left-[130px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-5 left-0'>
                            <p className='font-bold text-[25px]'>{count}</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[100px] '>
                    <a href="blog3"><img className='h-[380px]' src='./images/blog.webp' alt='' onClick={handleImageClick} /></a>
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[260px] z-10'>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[15px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[20px]' alt="" />
                            </a>
                        </div>
                        <div className='relative top-3 text-[#8B8B8B] left-[130px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-5 left-0'>
                            <p className='font-bold text-[25px]'>{count}</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[100px] '>
                    <a href="blog3"><img className='h-[380px]' src='./images/blog.webp' alt='' onClick={handleImageClick} /></a>
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[260px] z-10'>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[15px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[20px]' alt="" />
                            </a>
                        </div>
                        <div className='relative top-3 text-[#8B8B8B] left-[130px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-5 left-0'>
                            <p className='font-bold text-[25px]'>{count}</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[100px] '>
                    <a href="blog3"><img className='h-[380px]' src='./images/blog.webp' alt='' onClick={handleImageClick} /></a>
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[260px] z-10'>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[15px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[20px]' alt="" />
                            </a>
                        </div>
                        <div className='relative top-3 text-[#8B8B8B] left-[130px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-5 left-0'>
                            <p className='font-bold text-[25px]'>{count}</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[100px] '>
                    <a href="blog3"><img className='h-[380px]' src='./images/blog.webp' alt='' onClick={handleImageClick} /></a>
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[260px] z-10'>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[15px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[20px]' alt="" />
                            </a>
                        </div>
                        <div className='relative top-5 left-[130px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative top-[0px] left-0'>
                            <p className='font-bold text-[25px]'>{count}</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[100px] '>
                    <a href="blog3"><img className='h-[380px]' src='./images/blog.webp' alt='' onClick={handleImageClick} /></a>
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[260px] z-10'>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[15px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[20px]' alt="" />
                            </a>
                        </div>
                        <div className='relative top-3 text-[#8B8B8B] left-[130px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-5 left-0'>
                            <p className='font-bold text-[25px]'>{count}</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[100px] '>
                    <a href="blog3"><img className='h-[380px]' src='./images/blog.webp' alt='' onClick={handleImageClick} /></a>
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[260px] z-10'>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[15px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[20px]' alt="" />
                            </a>
                        </div>
                        <div className='relative top-3 text-[#8B8B8B] left-[130px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-5 left-0'>
                            <p className='font-bold text-[25px]'>{count}</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[100px] '>
                    <a href="blog3"><img className='h-[380px]' src='./images/blog.webp' alt='' onClick={handleImageClick} /></a>
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[260px] z-10'>
                            <a href="#">
                                <img src="../images/bookmark.webp" className='w-[15px]' alt="" />
                            </a>
                            <a href="#">
                                <img src="../images/share.webp" className='w-[20px]' alt="" />
                            </a>
                        </div>
                        <div className='relative top-3 text-[#8B8B8B] left-[130px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-5 left-0'>
                            <p className='font-bold text-[25px]'>100k</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
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

    return windowWidth <= 440 ? <Mobile /> : <Blog2 />;
};

const Mobile = () => {
    return (
        <>
            <div className='grid grid-cols-2 gap-4 w-[620px]'>
                <div className='relative bottom-6 left-[30px]'>
                    <div className='relative top-[100px]'>
                        <a href="blog3"><img className='h-[150px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-2 relative top-2 left-[93px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[10px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[15px]' alt="" />
                                </a>
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[50px] text-[#8B8B8B]'>06 Maret <br />2023</p>
                            </div>
                            <div className='relative bottom-[32px] right-2'>
                                <p className='font-bold text-[8px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[8px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-6 left-[-80px]'>
                    <div className='relative top-[100px]'>
                        <a href="blog3"><img className='h-[150px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-2 relative top-2 left-[93px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[10px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[15px]' alt="" />
                                </a>
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[50px] text-[#8B8B8B]'>06 Maret <br />2023</p>
                            </div>
                            <div className='relative bottom-[32px] right-2'>
                                <p className='font-bold text-[8px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[8px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[30px]'>
                    <div className='relative top-[100px]'>
                        <a href="blog3"><img className='h-[150px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-2 relative top-2 left-[93px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[10px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[15px]' alt="" />
                                </a>
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[50px] text-[#8B8B8B]'>06 Maret <br />2023</p>
                            </div>
                            <div className='relative bottom-[32px] right-2'>
                                <p className='font-bold text-[8px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[8px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[-80px]'>
                    <div className='relative top-[100px]'>
                        <a href="blog3"><img className='h-[150px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-2 relative top-2 left-[93px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[10px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[15px]' alt="" />
                                </a>
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[50px] text-[#8B8B8B]'>06 Maret <br />2023</p>
                            </div>
                            <div className='relative bottom-[32px] right-2'>
                                <p className='font-bold text-[8px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[8px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[30px]'>
                    <div className='relative top-[100px]'>
                        <a href="blog3"><img className='h-[150px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-2 relative top-2 left-[93px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[10px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[15px]' alt="" />
                                </a>
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[50px] text-[#8B8B8B]'>06 Maret <br />2023</p>
                            </div>
                            <div className='relative bottom-[32px] right-2'>
                                <p className='font-bold text-[8px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[8px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[-80px]'>
                    <div className='relative top-[100px]'>
                        <a href="blog3"><img className='h-[150px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-2 relative top-2 left-[93px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[10px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[15px]' alt="" />
                                </a>
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[50px] text-[#8B8B8B]'>06 Maret <br />2023</p>
                            </div>
                            <div className='relative bottom-[32px] right-2'>
                                <p className='font-bold text-[8px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[8px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[30px]'>
                    <div className='relative top-[100px]'>
                        <a href="blog3"><img className='h-[150px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-2 relative top-2 left-[93px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[10px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[15px]' alt="" />
                                </a>
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[50px] text-[#8B8B8B]'>06 Maret <br />2023</p>
                            </div>
                            <div className='relative bottom-[32px] right-2'>
                                <p className='font-bold text-[8px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[8px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[-80px]'>
                    <div className='relative top-[100px]'>
                        <a href="blog3"><img className='h-[150px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-2 relative top-2 left-[93px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[10px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[15px]' alt="" />
                                </a>
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[50px] text-[#8B8B8B]'>06 Maret <br />2023</p>
                            </div>
                            <div className='relative bottom-[32px] right-2'>
                                <p className='font-bold text-[8px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[8px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[30px]'>
                    <div className='relative top-[100px]'>
                        <a href="blog3"><img className='h-[150px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-2 relative top-2 left-[93px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[10px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[15px]' alt="" />
                                </a>
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[50px] text-[#8B8B8B]'>06 Maret <br />2023</p>
                            </div>
                            <div className='relative bottom-[32px] right-2'>
                                <p className='font-bold text-[8px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[8px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[-80px]'>
                    <div className='relative top-[100px]'>
                        <a href="blog3"><img className='h-[150px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-2 relative top-2 left-[93px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[10px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[15px]' alt="" />
                                </a>
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[50px] text-[#8B8B8B]'>06 Maret <br />2023</p>
                            </div>
                            <div className='relative bottom-[32px] right-2'>
                                <p className='font-bold text-[8px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[8px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Founding;  
