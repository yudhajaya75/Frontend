import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsWhatsapp } from "react-icons/bs";
import axios from 'axios';

const ButtonWa = () => {
    const [content, setContent] = useState<any>([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/contact-information`)
            .then((response) => {
                setContent(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(content)
    return (

        <div className=" bg-[#1FAF38] mx-auto w-[300px] text-white font-medium text-2xl py-4 rounded-lg ">
            {content.map((res: any, index: number) => (
                <div key={index}>
                    <a href={`https://wa.me/${res.phone}`} target='_blank'>
                        <div className='flex justify-center gap-5 '>
                            <div> Daftar Sekarang</div>
                            <BsWhatsapp size={32} />
                        </div>
                    </a>
                </div>
            ))}
        </div>

    )
}

export default ButtonWa