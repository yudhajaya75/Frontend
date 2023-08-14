import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/cardabout.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from '@mui/material';

const Cards = () => {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/hyperlink`)
            .then((response) => {
                setContent(response.data.data);
                setTimeout(() => setLoading(false), 4000);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(content)

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
                                        <img className='card-img' src={res.image} alt='logo' />
                                        <div className='card-body'>
                                            <h3 className='card-title'>{res.title}</h3>
                                            <p className='card-text' dangerouslySetInnerHTML={{ __html: res.body }}></p>
                                            <Link to={res.link}>
                                                <button className='card-cta'>Lihat Selengkapnya</button>
                                            </Link>
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
