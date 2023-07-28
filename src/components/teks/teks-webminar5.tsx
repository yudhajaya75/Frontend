import React from 'react'
import { Link } from 'react-router-dom';

const Teks = (props: any) => {
    return (
        <>
            <div className='lg:text-[15px] pt-10 relative lg:left-[180px] sm-440:left-[10px] sm-440:bottom-[20px] lg:bottom-[20px]'>
                <p className='text-[#6F6F6F]'>Webminar
                    <a className='text-[#002157] font-bold' href="/webinar"> &gt; {props.title} </a>
                </p>
            </div >

        </>
    )
}

export default Teks

// import React from 'react'
// import { Link } from 'react-router-dom'

// const teks = () => {
//     return (
//         <div className='p-10 font-sans relative bottom-[250px]'>
//             <p className='pt-10 text-center text-[50px] font-bold text-[#074288]'>Pelatihan Belajar Life Planning untuk Gen Z</p>
//         </div>
//     )
// }

// export default teks