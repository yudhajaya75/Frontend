import React, { useState, useEffect } from 'react';
import FounderCard from './foundercard'; // Assuming you put the FounderCard component in a separate file
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../founding/slider.css';
import axios from 'axios';

const Team = () => {
    const [content, setContent] = useState([]);

    const url = 'http://localhost:4001/founder-card';

    useEffect(() => {
        axios.get(url).then((response) => {
            setContent(response.data.data);
        });
    }, []);

    return (
        <div className='flex justify-evenly mt-[150px]  flex-wrap'>
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
    );
};

export default Team;
