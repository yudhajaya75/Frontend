import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../blog/slider.css'
import { Skeleton } from '@mui/material';
import useArticleData from '../../hooks/useArticleData';

const BeritaBaru = () => {
    const { content, loading } = useArticleData()
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
                    <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                        {content.slice(0, 9).map((res: any, index: number) => (
                            <div className='flex' key={index}>
                                <div className='relative top-[120px] mx-10'>
                                    <a href={`/blog/${res.attributes.slug}`}>
                                        <img className='h-[400px] w-[500px] shadow-lg rounded-md bg-cover' src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`} alt='' />
                                    </a>
                                    <div className='md:w-[400px] w-[330px] md:h-[400px] h-[300px] md:text-[25px] text-[15px] bg-cover border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                                        <p className='font-bold line-clamp-3'>{res.attributes.title}</p>
                                        <p className='relative top-4 line-clamp-3' dangerouslySetInnerHTML={{ __html: res.attributes.body }}>
                                        </p>
                                        <div className='flex gap-5 relative md:top-10 top-14 md:left-[280px] left-[230px] z-10'>
                                            <a href="#">
                                                <img src="../images/bookmark.webp" className='w-[10px] md:w-[20px]' alt="" />
                                            </a>
                                            <a href="#">
                                                <img src="../images/share.webp" className='w-[15px] md:w-[25px]' alt="" />
                                            </a>
                                        </div>
                                        <div className='relative md:bottom-[20px] bottom-0 md:top-[0px] top-10 left-0 md:text-[20px] text-[15px]'>
                                            <p className='font-bold'>{res.attributes.eye}</p>
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

export default BeritaBaru;  
