import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../blog/slider.css'
import axios from 'axios';
import { Skeleton } from '@mui/material';

const Blog = () => {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const url = 'http://localhost:4001/articel-card/populate';

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setContent(response.data.data);
                setTimeout(() => setLoading(false), 4000);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(content)
    return (
        <div className='relative'> {/* Remove unnecessary wrapping div */}
            {loading ? (
                <div className="flex flex-col justify-between relative right-[400px] top-20">
                    {[...Array(3)].map((_, index) => (
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
                <div className='absolute'>
                    {content.slice(0, 4).map((res: any, index: number) => (
                        <div key={index} className='flex flex-col justify-between'>
                            <div className='relative left-[1000px] bottom-[2270px]'>
                                <a href="blog3"><img className='h-[250px] w-[400px]' src={res.image_articel} alt='' /></a>
                                <div className='w-[400px] z-10 relative left-[13px] bottom-[-40px]'>
                                    <p className='font-bold text-[25px] relative left-[-12px]' dangerouslySetInnerHTML={{ __html: res.body }}></p>
                                    <div className='relative bottom-[100px] left-[-12px] text-[#8B8B8B]'>
                                        <p>02 Hours ago</p>
                                    </div>
                                    <div className='relative top-[-10px] left-[-10px]'>
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
