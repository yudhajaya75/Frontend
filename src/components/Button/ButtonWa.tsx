import React from 'react'
import { Link } from 'react-router-dom'
import { BsWhatsapp } from "react-icons/bs";

 const ButtonWa = () => {
  return (
    
        <div className=" bg-[#1FAF38] mx-auto w-[300px] text-white font-medium text-2xl py-4 rounded-lg ">
                <Link to="">
                    <div className='flex justify-center gap-5 '>
                        <div> Daftar Sekarang</div>
                        <BsWhatsapp size={32}/>
                    </div>
                </Link>
            </div>
    
  )
}

export default ButtonWa