import { Skeleton } from '@mui/material';
import React, { useState } from 'react';

const Banner = (props: any) => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 4000);
    return (
        <div className='w-full h-[500px]'>
            {loading ? (
                <div className='relative top-[0px]'>
                    <Skeleton variant="rectangular" width={1600} height={500} />
                </div>
            ) : (
                <img className='w-full h-full object-cover' src={props.image} alt="" />
            )}
        </div>
    );
}

export default Banner;