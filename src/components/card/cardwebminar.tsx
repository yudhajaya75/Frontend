import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Skeleton } from '@mui/material';
import useCardWebinar from '../../hooks/useCardWebinar';


const Card = () => {
    const { content, loading, countdownTime } = useCardWebinar();

    return (
        <div className='flex flex-wrap justify-center gap-10 mt-20 ml-14'>
            {loading ? (
                <div className="flex justify-evenly gap-y-5 mt-[200px] flex-wrap">
                    {[...Array(8)].map((_, index) => (
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
                <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px] ">
                    {content.map((res: any, index: number) => (
                        <div className='shadow-lg w-[320px]  rounded-lg overflow-hidden' key={index}>
                            <div className='w-full h-[207px]' key={res.attributes.id}>
                                <img src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`} alt='/' className='h-full w-full' />
                            </div>
                            <div className='p-2'>
                                <div className='flex gap-4 mt-[-50px] ml-4 text-[#4B465C]'>
                                    <div className='flex gap-5 text-white font-semibold rounded-full px-2 py-1 mt-14' >
                                        {res.attributes.webinar && res.attributes.webinar.eventDuration ? (
                                            <>
                                                {res.attributes.webinar.eventDuration.split(',').map((res: string, index: number) => (
                                                    <div className='bg-blue-600 rounded-full px-2 py-1' key={index}>
                                                        {res}
                                                    </div>
                                                ))}
                                            </>
                                        ) : (
                                            <p>Duration Not Available</p>
                                        )}
                                    </div>
                                </div>
                                <div className='ml-3 my-5 flex flex-col gap-y-3'>
                                    <h3 className='text-xl font-semibold text-[#002157]'>{res.attributes.title}</h3>
                                    {res.attributes.webinar && res.attributes.webinar.webinarPrice !== null ? (
                                        <p className='text-[#4B465C]'>Rp. {res.attributes.webinar.webinarPrice}</p>
                                    ) : (
                                        <p className='text-[#4B465C]'>Webinar Price Not Available</p>
                                    )}
                                </div>
                                <a href={`/webinar/${res.id}`}>
                                    <div className='bg-[#002157] text-white font-semibold p-[10px] text-center rounded-md w-[90%] mx-auto'>
                                        <button className='button-webminar'>Lihat Detail</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Card;