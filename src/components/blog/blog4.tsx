import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../blog/slider.css'

const Blog4 = (props: any) => {
    return (
        <div>
            <div>
                <div className='relative left-[50px] top-[50px] flex gap-10'>
                    <div className=''>
                        <img className='max-h-[500px] min-w-[900px]' src={props.image} alt='' />
                    </div>
                    <div className='w-[500px] text-justify text-[15px]'>
                        <p>{props.title}</p>
                    </div>
                </div>
                <div className='flex gap-5 relative top-0 left-[70px]'>
                    <a href="#">
                        <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                    </a>
                    <a href="#">
                        <img src="../images/share.webp" className='w-[25px]' alt="" />
                    </a>
                </div>
                <div className='pt-[100px] p-[50px]'>
                    <p className='text-justify' dangerouslySetInnerHTML={{ __html: props.body }}></p>
                </div>
            </div>
        </div>
    );
};

export default Blog4;  
