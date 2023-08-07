import { Skeleton } from '@mui/material';
import React, { useState } from 'react'

const Teks = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 4000);
    return (
        <div className='p-10 font-sans'>
            {loading ? (
                <div className='relative top-[0px] right-10'>
                    <Skeleton variant="rectangular" width={1600} height={300} />
                </div>
            ) : (
                <div>
                    <h5 className='font-bold text-center sm:text-left text-4xl sm:text-3xl text-[#074288]'>Sejarah Konseling Satir</h5>
                    <p className='mt-10 text-justify text-[#5b5b5b]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Error, consequatur nisi omnis voluptatem accusantium numquam aliquam porro, esse excepturi animi praesentium minima sit inventore optio
                        eaque? Cum distinctio corrupti necessitatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, officia incidunt provident
                        quam laudantium dicta dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamusa</p>
                </div>
            )}
        </div>
    )
}

export default Teks