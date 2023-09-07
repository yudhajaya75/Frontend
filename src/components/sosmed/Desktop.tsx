import React from 'react';
import Sosmed from './sosmed';
import useDataFetching from '../../hooks/useDataFetching';
import { Skeleton } from '@mui/material';
import './sosmed.css';

const Desktop = () => {
    const { content, loading } = useDataFetching();

    return (
        <div>
            {loading ? (
                <div className="flex justify-evenly mt-10 flex-wrap">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="w-[300px] shadow-lg rounded-md">
                            <Skeleton variant="rectangular" width={300} height={180} />
                            <div className="w-full p-6">
                                <Skeleton variant="text" width={200} height={32} />
                                <Skeleton variant="text" width={250} height={72} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-evenly flex-wrap gap-y-5 mt-20">
                    {content.map((res: any, index: number) => (
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
