import React from 'react';
import Sosmed from './sosmed';
import usePersonalCard from '../../hooks/usePersonalCard';
import { Skeleton } from '@mui/material';
import './sosmed.css';

const Desktop = () => {
    const { personalcard, loading } = usePersonalCard();

    return (
        <div>
            {loading ? (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3justify-items-center p-2">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="w-full shadow-lg rounded-md">
                            <Skeleton variant="rectangular" height={180} />
                            <div className="w-full">
                                <Skeleton variant="text" className="w-full" height={32} />
                                <Skeleton variant="text" className="w-full" height={72} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="mt-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-32 justify-items-center p-2">
                    {!personalcard ? (
                        <div>No Data</div>
                    ) :
                        personalcard.map((res, index: number) => (
                            <div key={index}>
                                <Sosmed
                                    name={res.attributes.name}
                                    subtitle={res.attributes.title}
                                    bio={res.attributes.body}
                                    image={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
                                    link1={res.attributes.medsos_1}
                                    link2={res.attributes.medsos_2}
                                />
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Desktop;
