import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../card/cardabout.css';
import { Skeleton } from '@mui/material';
import useCardHyperlink from '../../hooks/useCardHyperlink';

const Cards = () => {
    const { content, loading } = useCardHyperlink()

    return (
        <div className='cardabt'>
            <div className='flex justify-evenly mt-[50px] flex-wrap'>
                {loading ? (
                    <div className="flex justify-evenly mt-[50px] flex-wrap">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="w-[400px] sm:w-[500px] md:w-[600px] shadow-lg rounded-md">
                                <Skeleton variant="rectangular" width={600} height={180} />
                                <div className="w-full p-6">
                                    <Skeleton variant="text" width={500} height={32} />
                                    <Skeleton variant="text" width={550} height={72} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="font-extralight flex justify-evenly flex-wrap gap-10 ml-14 z-50 sm-440:pr-14 lg:pr-0">
                        {content.map((res: any, index: number) => (
                            <div className='cardab' key={index}>
                                <div className='lg:w-[600px] sm-440:w-96 rounded-md overflow-hidden shadow-lg'>
                                    <div className='flex flex-col md:flex-row border border-gray-300 rounded-md overflow-hidden'>
                                        <img className='lg:w-[220px] lg:h-[250px] md:w-1/3 object-cover' src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`} alt='logo' />
                                        <div className='w-full md:w-2/3 card-body p-4 md:p-6'>
                                            <h3 className='card-title'>{res.attributes.title}</h3>
                                            <p className='card-text' dangerouslySetInnerHTML={{ __html: res.attributes.body }}></p>
                                            <a href={res.attributes.link} className='ml-[100px] md:ml-[0px]'>
                                                <button className='p-2 md:p-2 bg-blue-500 text-white border-none rounded-md cursor-pointer transition-colors duration-200 ease-in-out hover:bg-blue-600'>Lihat Selengkapnya</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cards;
