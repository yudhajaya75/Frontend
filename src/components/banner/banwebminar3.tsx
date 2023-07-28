import React from 'react';

const banner = ( props: any ) => {
    return (
        <div className='w-full h-[500px]'>
            <img className='w-full h-full object-cover' src={props.image} alt="" />
        </div>
    );
}

export default banner;
