import CardComponent from './cardComponent';
import { Skeleton } from '@mui/material';
import useCardPelatihan from '../../hooks/useCardPelatihan';

const CardPelatihan = () => {
    const { content, loading } = useCardPelatihan()

    return (
        <>
            <div className='flex flex-wrap justify-center gap-10 mt-20 ml-14'>
                {loading ? (
                    <div className="flex justify-evenly flex-wrap gap-10 mt-[50px]">
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
                    <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px] z-50 sm-440:pr-14 lg:pr-0">
                        {content.map((res: any, index: number) => (
                            <CardComponent
                                key={index}
                                id={res.id}
                                title={res.attributes.title}
                                price={res.price ? res.price : ''}
                                body={res.attributes.body}
                                image={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
                                slug={res.attributes.slug}
                                link='webinardetail'
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
export default CardPelatihan;
