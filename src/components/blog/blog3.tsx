import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../blog/slider.css'
import { Skeleton } from '@mui/material';
import useArticlePopularData from '../../hooks/useArticlePopularData';

const Blog = () => {

    const { content, loading } = useArticlePopularData()

    return (
        <div className='relative'>
            {loading ? (
                <div className="flex flex-col justify-between relative left-[550px] bottom-[3350px]">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="w-[300px] my-5 shadow-lg rounded-md">
                            <Skeleton variant="rectangular" width={300} height={180} />
                            <div className="w-full p-6">
                                <Skeleton variant="text" width={200} height={32} />
                                <Skeleton variant="text" width={250} height={72} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='relative'>
                    <div className='mt-[-2000px]'>
                        {content.slice(0, 4).map((res: any, index: number) => (
                            <div key={index} className='flex flex-col justify-between'>
                                <div className='relative left-[1000px] bottom-[280px]'>
                                    <a href={`/blog/${res.slug}`}>
                                        <img className='h-[250px] w-[400px] rounded-lg bg-cover' src={res.image_articel} alt='' />
                                    </a>
                                    <div className='w-[400px] z-10 relative left-[13px] bottom-[-40px]'>
                                        <p className='font-bold text-[25px] relative left-[-12px] line-clamp-3' dangerouslySetInnerHTML={{ __html: res.body }}></p>
                                        <div className='relative bottom-[140px] left-[-12px] text-[#8B8B8B]'>
                                            <p>02 Hours ago</p>
                                        </div>
                                        <div className='relative bottom-[20px] left-[-10px]'>
                                            <p className='font-bold text-[25px]'>{res.eye}</p>
                                            <p className='text-[#8B8B8B]'>People Saw</p>
                                        </div>
                                        <div className='flex gap-5 relative bottom-[55px] left-[325px] w-[100px]'>
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
                        ))}
                    </div>
                </div>
            )}
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

    return windowWidth <= 440 ? <Mobile /> : <Blog />;
};

const Mobile = () => {
    const { content, loading } = useArticlePopularData()

    return (
        <>
            <div className='relative'>
                {loading ? (
                    <div className="flex flex-col justify-between relative left-[550px] bottom-[3350px]">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="w-[300px] my-5 shadow-lg rounded-md">
                                <Skeleton variant="rectangular" width={300} height={180} />
                                <div className="w-full p-6">
                                    <Skeleton variant="text" width={200} height={32} />
                                    <Skeleton variant="text" width={250} height={72} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='relative'>
                        <div className='mt-[-750px]'>
                            {content.slice(0, 4).map((res: any, index: number) => (
                                <div key={index} className='flex flex-col justify-between'>
                                    <div className='relative left-[300px] bottom-[70px]'>
                                        <a href={`/blog/${res.slug}`}>
                                            <img className='h-[100px] w-[130px] rounded-lg' src={res.image_articel} alt='' />
                                        </a>
                                        <div className='w-[130px] z-10 relative left-[13px] top-[20px]'>
                                            <p className='font-bold text-[10px] relative left-[-12px] line-clamp-3' dangerouslySetInnerHTML={{ __html: res.body }}></p>
                                            <div className='relative bottom-[80px] left-[-12px] text-[10px] text-[#8B8B8B]'>
                                                <p>02 Hours ago</p>
                                            </div>
                                            <div className='relative bottom-[15px] left-[-10px]'>
                                                <p className='font-bold text-[14px]'>{res.eye}</p>
                                                <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                                            </div>
                                            <div className='flex gap-5 relative bottom-[45px] left-[70px] w-[50px]'>
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
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Founding;  
