import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/cardabout.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from '@mui/material';
import useCardHyperlink from '../../hooks/useCardHyperlink';

const Cards = () => {
    const { content, loading } = useCardHyperlink()

    return (
        <div className='cardabt'>
            <div className='flex flex-wrap justify-center gap-10 mt-20 ml-14'>
                {loading ? (
                    <div className="grid grid-cols-2 gap-10 mt-[50px]">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="w-[400px] sm:w-[500px] md:w-[600px] shadow-lg rounded-md">
                                <Skeleton variant="rectangular" width={600} height={180} />
                                <div className="w-full p-6">
                                    <Skeleton variant="text" width={500} height={32} />
                                    <Skeleton variant="text" width={550} height={72} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="font-extralight grid grid-cols-2 gap-10 mt-[50px]">
                        {content.map((res: any, index: number) => (
                            <div className='cardab' key={index}>
                                <div className='card-about'>
                                    <div className='cardbd'>
                                        <img className='card-img' src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`} alt='logo' />
                                        <div className='card-body'>
                                            <h3 className='card-title'>{res.attributes.title}</h3>
                                            <p className='card-text' dangerouslySetInnerHTML={{ __html: res.attributes.body }}></p>
                                            <a href={res.attributes.link}>
                                                <button className='card-cta'>Lihat Selengkapnya</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cards;
