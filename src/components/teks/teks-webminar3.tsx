import React from 'react'
import { Link } from 'react-router-dom'

const teks = () => {
    return (
        <div className='p-10 font-sans relative bottom-[250px]'>
            <p className='pt-10 text-center text-[50px] font-bold text-[#074288]'>Webinar Belajar Life Planning untuk Gen Z</p>
            <div className="flex justify-center relative top-14">
                <Link to="">
                    <img src="./images/buttonwa.webp" alt="" />
                </Link>
            </div>
        </div>
    )
}

export default teks