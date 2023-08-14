import React, { useState, useEffect } from 'react';
import FounderCard from './foundercard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../founding/slider.css';
import axios from 'axios';
import { Skeleton } from '@mui/material';

const Team = () => {
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/founder-card`)
            .then((response) => {
                setContent(response.data.data);
                setTimeout(() => setLoading(false), 4000);
            });
    }, []);

    return (
        <div className='flex justify-evenly mt-[50px] flex-wrap'>
            {loading ? (
                <div className="flex justify-evenly mt-[50px] flex-wrap">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="w-[230px]flex justify-evenly mx-14 mt-[0px] flex-wrap">
                            <Skeleton variant="rectangular" width={230} height={200} />
                            <div className="w-full p-6">
                                <Skeleton variant="text" width={150} height={42} />
                                <Skeleton variant="text" width={100} height={32} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex justify-evenly mt-[50px]  flex-wrap'>
                    {content.map((res: any, index) => (
                        <FounderCard
                            key={index}
                            name={res.name}
                            title={res.title}
                            imageUrl={res.image}
                            position={index % 2 === 0 ? 'top' : 'bottom'}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Team;
