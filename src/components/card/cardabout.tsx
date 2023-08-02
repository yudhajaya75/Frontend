import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/cardabout.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Cards = () => {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4001/hyperlink';

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setContent(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(content)
    return (
        <div className='cardabt'>
            {content.map((res: any) => (
                <div className='cardab'>
                    <div className='card-about'>
                        <div className='cardbd'>
                            <img className='card-img' src={res.image} alt='logo' />
                            <div className='card-body'>
                                <h3 className='card-title'>{res.title}</h3>
                                <p className='card-text' dangerouslySetInnerHTML={{ __html: res.body }}></p>
                                <a href={res.link}>
                                    <button className='card-cta'>Lihat Selengkapnya</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Cards;