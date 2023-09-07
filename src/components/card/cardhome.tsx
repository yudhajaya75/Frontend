import { Skeleton } from '@mui/material';
import useCardHome from '../../hooks/useCardHome';

const Consultation = () => {
    const { content, loading } = useCardHome()

    return (
        <>
            {loading ? (
                <div className="flex justify-evenly gap-y-5 mt-[200px] flex-wrap">
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
                <div className="relative mt-10 xl:mt-[100px] ">
                    <div className="p-4 w-[400px] text-center mx-auto ">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-[#002157] ">Kenapa harus konsultasi di Konseling Satir</h3>
                    </div>
                    <div className="flex justify-evenly gap-y-5 mt-20 flex-wrap">
                        {content.map((res: any, index: number) => (
                            <div key={index}>
                                <div className="w-[350px] h-[400px] shadow-lg rounded-md">
                                    <img src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`} alt="" className="w-[100%] h-[180px]" />
                                    <div className="w-full p-6">
                                        <h3 className="text-xl mb-[15px]">{res.attributes.title}.</h3>
                                        <p className="text-lg text-start">{res.attributes.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Consultation;
