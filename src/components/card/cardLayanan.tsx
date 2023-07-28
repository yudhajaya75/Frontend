import axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from "./cardComponent";
import { Link } from "react-router-dom";

const CardLayanan = () => {
    const [content, setContent] = useState<any>([])
    const url = 'http://localhost:4001/layanan-card';
    useEffect(() => {
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])

    return (
        <>
            <div className='flex justify-center flex-wrap gap-10 mx-auto my-40 '>
                {
                    content.map((res: any) => (
                        <CardComponent
                            title={res.title}
                            price={res.price}
                            body={res.body}
                            image={res.image}
                            slug={res.slug}
                            link='konseling'
                        />
                    ))
                }
            </div>
        </>
    )
}

export default CardLayanan;