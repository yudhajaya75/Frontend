import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Skeleton } from '@mui/material';
import useArticlePopularData from '../../hooks/useArticlePopularData';
import useArticleData from '../../hooks/useArticleData';

const Blog = () => {

    const { content, loading } = useArticleData()
    const { popular, loadings } = useArticlePopularData()

    return (
        <>
            <div className='mx-auto w-[1300px]'>
                {loading ? (
                    <div className="flex flex-col justify-between relative left-[50px] top-20">
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
                    <>
                        <div className='relative z-10'>
                            <div className='relative top-14 mx-[60px] md:mx-[60px] text-[15px] md:text-[20px]'>
                                <p className='relative top-6 md:top-7 font-bold left-[0px] text-[#002157]'>Berita Terbaru</p>
                                <a className='text-[#002157] font-bold relative left-[200px] top-1 md:top-0 md:left-[300px] z-10' href="/beritabaru">See more...</a>
                            </div>
                            {content.slice(0, 3).map((res: any, index: number) => (
                                <div key={index} className='grid grid-cols-1 content-start h-auto relative mx-auto ' >
                                    <div className='relative left-[50px] top-[120px]'>
                                        <a href={`/blog/${res.attributes.slug}`}>
                                            <img className='h-[250px] w-[300px] md:w-[430px] md:h-[400px] aspect-auto object-cover' src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`} alt='' />
                                        </a>
                                        <div className='w-[270px] h-[200px] md:w-[400px] md:h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[80px] md:bottom-[200px]'>
                                            <p className='font-bold text-[12px] md:text-[25px] line-clamp-3'>{res.attributes.title}</p>
                                            <p className='relative top-4 text-[10px] md:text-[25px] line-clamp-3' dangerouslySetInnerHTML={{ __html: res.attributes.body }}>
                                            </p>
                                            <div className='flex gap-5 relative top-10 left-[180px] md:left-[280px] z-10'>
                                                <a href="#">
                                                    <img src="../images/bookmark.webp" className='w-[10px] md:w-[20px]' alt="" />
                                                </a>
                                                <a href="#">
                                                    <img src="../images/share.webp" className='w-[15px] md:w-[25px]' alt="" />
                                                </a>
                                            </div>
                                            <div className='relative top-6 text-[10px] md:text-[20px] left-[100px] md:top-5 md:left-[130px] text-[#8B8B8B]'>
                                                <p>06 Maret 2023</p>
                                            </div>
                                            <div className='relative bottom-[0px] md:bottom-[20px] left-0 text-[10px] md:text-[20px]'>
                                                <p className='font-bold'>{res.attributes.eye}</p>
                                                <p className='text-[#8B8B8B]'>People Saw</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-l-2 h-[780px] absolute hidden md:block  left-[42%] bottom-[0px]'>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
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
                        <div className='relative md:-mt-[1480px] mt-[500px] md:bottom-0 bottom-[400px] md:right-0 right-[330px] z-30'>
                            <div className='mr-[200px] md:mr-[0px] md:mt-[0px] mt-[400]'>
                                <div className='relative text-center md:bottom-[900px] bottom-0 md:left-7 left-0 font-bold text-[20px] text-[#002157]'>
                                    <p>Category Artikel baru</p>
                                </div>
                                {content.slice(0, 9).map((res: any, index: number) => (
                                    <div key={index} className='grid grid-cols-1 content-start mx-auto '>
                                        <div className='relative left-0 md:left-[100px] bottom-0 md:bottom-[870px]'>
                                            <div className='w-[400px] h-[200px] p-5 z-10 rounded-lg z-10'>
                                                <div className=''>
                                                    <a href={`/blog/${res.attributes.slug}`}
                                                        className='text-[30px] font-semibold line-clamp-3'>{res.attributes.title}</a>
                                                    <div className='relative top-5 left-[0px]'>
                                                        <p className='text-[#8B8B8B]'>06 Maret 2023</p>
                                                        <hr className='relative top-3' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-l-2 h-[2380px] absolute hidden md:block left-[125%] bottom-[350px]'></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className='relative'>
                    {loadings ? (
                        <>
                            <div className="flex flex-col justify-between relative left-[1050px] bottom-[3350px]">
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
                        </>
                    ) : (
                        <>
                            <div className='relative md:-mt-[1500px] mt-[2450px] md:bottom-[360px] bottom-[400px] md:right-0 right-[980px] z-20'>
                                <div className='relative bottom-[390px] md:right-[100px] right-[150px] md:mx-[60px] text-[15px] md:text-[20px] float-right'>
                                    <p className='relative top-6 md:top-7 font-bold left-[0px] text-[#002157]'>Berita Popular</p>
                                    <a className='text-[#002157] font-bold relative left-[200px] top-1 md:top-0 md:left-[300px] z-10' href="/beritapopulate">See more...</a>
                                </div>
                                <div className='mt-[-2000px]'>
                                    {popular.slice(0, 4).map((res: any, index: number) => (
                                        <div key={index} className='flex flex-col justify-between'>
                                            <div className='relative left-[1000px] bottom-[280px]'>
                                                <a href={`/blog/${res.attributes.slug}`}>
                                                    <img className='h-[250px] w-[400px] rounded-lg bg-cover' src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`} alt='' />
                                                </a>
                                                <div className='w-[400px] z-10 relative left-[13px] bottom-[-40px]'>
                                                    <p className='font-bold text-[25px] relative left-[-12px] line-clamp-3' dangerouslySetInnerHTML={{ __html: res.attributes.body }}></p>
                                                    <div className='relative bottom-[20px] pt-10 left-[-10px]'>
                                                        <p className='font-bold text-[25px]'>{res.attributes.eye}</p>
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
                        </>
                    )}
                </div>
            </div>
            <div className='-mt-[500px]'></div>
        </>
    );
};


export default Blog;