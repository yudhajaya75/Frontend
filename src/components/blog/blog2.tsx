import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Skeleton } from '@mui/material';
import UseArticle from '../../hooks/UseArticle';

const Blog = () => {
    const { content, loading } = UseArticle()

    return (
        <>
            <div className='flex justify-center items-center'>
                {loading ? (
                    <div className="flex flex-col justify-between relative left-20 bottom-[1010px]">
                        {[...Array(9)].map((_, index) => (
                            <div key={index} className="w-[300px] my-10 shadow-lg rounded-md">
                                <Skeleton variant="rectangular" width={300} height={180} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='absolute'>
                        <div className='mt-[-1100px]'>
                            <p className='relative text-center bottom-[900px] left-7 font-bold text-[20px] text-[#002157]'>Category Artikel baru</p>
                            {content.slice(0, 9).map((res: any, index: number) => (
                                <div key={index} className='flex flex-col justify-between'>
                                    <div className='relative left-[100px] bottom-[870px]'>
                                        <div className='w-[400px] h-[200px] p-5 z-10 rounded-lg z-10'>
                                            <div className=''>
                                                <a href="/blog3" className='text-[30px] font-semibold line-clamp-3'>{res.title}</a>
                                                <div className='relative top-5 left-[0px]'>
                                                    <p className='text-[#8B8B8B]'>06 Maret 2023</p>
                                                    <hr className='relative top-3' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-l-2 h-[2380px] absolute left-[125%] bottom-[350px]'></div>
                                </div>
                            ))}
                        </div>
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
    const { content, loading } = UseArticle()

    console.log(content);
    return (
        <>
            <div className='flex justify-center items-center'>
                {loading ? (
                    <div className="flex flex-col justify-between relative left-20 bottom-[1010px]">
                        {[...Array(9)].map((_, index) => (
                            <div key={index} className="w-[300px] my-10 shadow-lg rounded-md">
                                <Skeleton variant="rectangular" width={300} height={180} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='absolute'>
                        <div className='mt-[-850px]'>
                            {content.slice(0, 7).map((res: any, index: number) => (
                                <div key={index} className='flex flex-col justify-between'>
                                    <div className='relative left-[8px] bottom-[0px]'>
                                        <div className='w-[140px] h-[110px] p-5 rounded-lg'>
                                            <div className=''>
                                                <a href="/blog3" className='text-[9px] font-semibold line-clamp-3'>{res.title}</a>
                                                <div className='relative top-5 left-[0px]'>
                                                    <p className='text-[#8B8B8B] text-[6px]'>06 Maret 2023</p>
                                                    <hr className='relative top-3' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-l-2 h-[1050px] absolute left-[100%] bottom-[-170px]'></div>
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
