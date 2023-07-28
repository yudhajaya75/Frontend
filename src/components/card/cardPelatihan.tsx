import { useEffect, useState } from 'react';
import CardComponent from './cardComponent';
import axios from 'axios';

const CardPelatihan = () =>{    
    const [content, setContent] = useState<any>([])
    const url = 'http://localhost:4001/pelatihan-card';
        useEffect(() =>{
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])


    return(
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
                    link='pelatihan'
                    />
                ))
            }
            </div>
        </>
    )
}

export default CardPelatihan;