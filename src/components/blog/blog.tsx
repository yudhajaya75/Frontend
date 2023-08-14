import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const Blog = () => {
    const [count, setCount] = useState(0);
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/articel-card`)
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
        <>
            <div>
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
                    <div className='relative z-10'>
                        {content.slice(0, 3).map((res: any, index: number) => (
                            <div key={index} className='grid grid-cols-1 content-start w-[1300px] h-auto relative' >
                                <div className='relative left-[50px] top-[120px]'>
                                    <a href={`/blog/${res.slug}`}>
                                        <img className='h-[400px] w-[430px] ' src={res.image_articel} alt='' />
                                    </a>
                                    <div className='w-[400px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                                        <p className='font-bold text-[25px] line-clamp-3'>{res.title}</p>
                                        <p className='relative top-4 text-[25px] line-clamp-3' dangerouslySetInnerHTML={{ __html: res.body }}>
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
                                        <div className='relative bottom-[20px] left-0'>
                                            <p className='font-bold text-[20px]'>{res.eye}</p>
                                            <p className='text-[#8B8B8B]'>People Saw</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-l-2 h-[780px] absolute left-[42%] bottom-[0px]'>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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
    const [count, setCount] = useState(0);
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/articel-card`)
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
        <>
            <div>
                {loading ? (
                    <div className="flex justify-evenly mt-10 flex-wrap">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="w-[300px] shadow-lg rounded-md">
                                <Skeleton variant="rectangular" width={300} height={180} />
                                <div className="w-full p-6">
                                    <Skeleton variant="text" width={200} height={32} />
                                    <Skeleton variant="text" width={250} height={72} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='-ml-3'>
                        {content.slice(0, 3).map((res: any, index: number) => (
                            <div className='grid grid-cols-1 content-start h-auto' key={index}>
                                <div className=' relative left-[30px] top-[50px]'>
                                    <a href="/beritabaru">
                                        <img className='h-[122px] w-[137px]' src={res.image_articel} alt='' />
                                    </a>
                                    <div className='w-[130px] h-[170px] border-2 bg-white p-3 rounded-lg z-10 relative left-[3px] bottom-[50px]'>
                                        <p className='font-bold text-[10px] line-clamp-3'>{res.title}</p>
                                        <p className='relative top-4 text-justify text-[10px] line-clamp-3' dangerouslySetInnerHTML={{ __html: res.body }}>
                                        </p>
                                        <div className='flex gap-3 relative top-7 left-[70px] w-[30px] z-10'>
                                            <a href="#">
                                                <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                            </a>
                                            <a href="#">
                                                <img src="../images/share.webp" className='w-[25px]' alt="" />
                                            </a>
                                        </div>
                                        <div className='relative top-2 left-[20px] text-[#8B8B8B]'>
                                            <p className='text-[8px]'>06 Maret 2023</p>
                                        </div>
                                        <div className='relative bottom-[5px] left-0'>
                                            <p className='font-bold text-[10px]'>{res.eye}</p>
                                            <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-l-2 h-[1050px] absolute left-[38%] top-[140px]'></div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Founding;