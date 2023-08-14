import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../blog/slider.css'
import axios from 'axios';
import { Skeleton } from '@mui/material';

const Blog2 = () => {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/articel-card/populate`)
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
                    <div className="flex flex-wrap">
                        {[...Array(9)].map((_, index) => (
                            <div key={index} className="w-[300px] flex w-[33.33%] mt-[150px] my-5 shadow-lg rounded-md">
                                <Skeleton variant="rectangular" width={300} height={180} />
                                <div className="w-full p-6">
                                    <Skeleton variant="text" width={200} height={32} />
                                    <Skeleton variant="text" width={250} height={72} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='flex flex-wrap'>
                        {content.slice(0, 9).map((res: any, index: number) => (
                            <div className='flex w-[33.33%]' key={index}>
                                <div className='relative left-[10px] top-[120px]'>
                                    <Link to="">
                                        <img className='h-[400px] w-[430px] shadow-lg rounded-md ' src={res.image_articel} alt='' />
                                    </Link>
                                    <div className='w-[400px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                                        <p className='font-bold text-[25px]'>{res.title}</p>
                                        <p className='relative top-4 text-[25px]' dangerouslySetInnerHTML={{ __html: res.body }}>
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

    return windowWidth <= 440 ? <Mobile /> : <Blog2 />;
};

const Mobile = () => {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/articel-card/populate`)
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
                    <div className="flex flex-wrap">
                        {[...Array(9)].map((_, index) => (
                            <div key={index} className="w-[300px] flex w-[33.33%] mt-[150px] my-5 shadow-lg rounded-md">
                                <Skeleton variant="rectangular" width={300} height={180} />
                                <div className="w-full p-6">
                                    <Skeleton variant="text" width={200} height={32} />
                                    <Skeleton variant="text" width={250} height={72} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='grid grid-cols-2 gap-2 max-w-[430px] relative bottom-[100px] my-[100px]'>
                        {content.map((res: any, index: number) => (
                            <div key={index}>
                                <div className='relative left-[10px] top-[120px]'>
                                    <Link to="/blog3">
                                        <img className='w-[200px] h-full  shadow-lg rounded-md' src={res.image_articel} alt='' />
                                    </Link>
                                    <div className='w-[190px] max-h-[220px] border-2 bg-white p-3 rounded-lg z-10 relative left-[5px] bottom-[50px]'>
                                        <p className='font-bold text-[12px]'>{res.title}</p>
                                        <p className='relative top-1 text-[12px]' dangerouslySetInnerHTML={{ __html: res.body }}>
                                        </p>
                                        <div className='flex gap-5 relative top-10 left-[110px] z-10'>
                                            <a href="#">
                                                <img src="../images/bookmark.webp" className='w-[10px]' alt="" />
                                            </a>
                                            <a href="#">
                                                <img src="../images/share.webp" className='w-[15px]' alt="" />
                                            </a>
                                        </div>
                                        <div className='relative text-[12px] bottom-1 left-[0px] text-[#8B8B8B]'>
                                            <p>06 Maret 2023</p>
                                        </div>
                                        <div className='relative top-[0px] left-0'>
                                            <p className='font-bold text-[12px]'>{res.eye}</p>
                                            <p className='text-[#8B8B8B] text-[12px]'>People Saw</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Founding;  
