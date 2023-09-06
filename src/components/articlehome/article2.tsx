import { Skeleton } from '@mui/material';
import useArticleData from '../../hooks/useArticleData';

const Articel = () => {
    const { content, loading } = useArticleData();

    return (
        <div className="lg:mt-[100px] relative p-2">
            <h2 className="text-5xl lg:text-3xl text-center font-semibold text-[#002157]">Artikel</h2>

            {loading ? (
                <div className="flex justify-evenly gap-y-5 mt-[200px] flex-wrap">
                    {[...Array(4)].map((_, index) => (
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
                <div>
                    <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px] ">
                        {
                            content.slice(0, 4).map((res: any) => (
                                <div className="h-[270px] relative text-justify" key={res.id}>
                                    <a href={`/blog/${res.slug}`}>
                                        <img src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`} alt="" className=" w-[350px] h-[270px]" />
                                    </a>
                                    <div dangerouslySetInnerHTML={{ __html: res.attributes.body }} className="line-clamp-4 w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]"  >
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}
            <div className="bg-[#002157] w-[200px] h-[40px] text-slate-100 font-semibold rounded-[5px] shadow-lg mx-auto mt-10 lg:mt-[80px] text-center pt-[8px]">
                <a href="home2" >Lihat semua artikel</a>
            </div>
        </div>
    )
}





export default Articel;