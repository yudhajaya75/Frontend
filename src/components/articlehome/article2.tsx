import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Articel = () => {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4001/articel-card';
    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setContent(response.data.data)
        })
    }, [])
    console.log(content);


    return (
        <div className="lg:mt-[100px] relative p-2">
            <h2 className="text-5xl lg:text-3xl text-center font-semibold text-[#002157]">Artikel</h2>
            <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px] ">

                {
                    content.slice(0, ).map((res: any) => (
                        <div className="h-[270px] relative text-justify" key={res.id}>
                            <a href="blog3">
                                <img src={res.image_articel} alt="" className=" w-[350px] h-[270px]" />
                            </a>
                            <div dangerouslySetInnerHTML={{__html: res.body}} className="line-clamp-4 w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]"  >
                            </div>
                        </div>
                    ))
                }

            

            </div>

            <div className="bg-[#002157] w-[200px] h-[40px] text-slate-100 font-semibold rounded-[5px] shadow-lg mx-auto mt-10 lg:mt-[80px] text-center pt-[8px]">
                <a href="home2" >Lihat semua artikel</a>
            </div>
        </div>
    )
}





export default Articel;