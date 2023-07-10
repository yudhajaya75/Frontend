import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/card.css'
import axios from 'axios';

const Card = () => {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4000/pelatihan-card';
        useEffect(() =>{
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])

    
    return (
        <div className='mx-auto max-w-[1910px] max-h-[1728px] relative'>
            <div className='sm:pt-20 sm:pb-20 sm-440:pt-20 sm-440:pb-20'>
                <div className='container-card'>

                    {
                        content.map((res: any) => (
                            <div className="card-container">
                                <div className="image-container">
                                    <div className="heading">{res.price}</div>
                                    <img src='/images/dokter.webp' alt="/" />
                                </div>
                                <div className="card-title">
                                    <h3 className='text'>{res.title}</h3>
                                </div>
                                <div className="card-body">
                                    <p className='text'>{res.body.substring(0, 200)}</p>
                                </div>
                                <div className="btn">
                                    <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
                                </div>
                            </div>

                        ))
                    }


                    {/* <div className="card-container">
                        <div className="image-container">
                            <div className="heading">Rp 375.000</div>
                            <img src='/images/dokter.webp' alt="/" />
                        </div>
                        <div className="card-title">
                            <h3 className='text'>Pelatihan 2</h3>
                        </div>
                        <div className="card-body">
                            <p className='text'>
                                <a href="/">Berisi penjelasan disini... </a>
                                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                        </div>
                        <div className="btn">
                            <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="image-container">
                            <div className="heading">Rp 375.000</div>
                            <img src='/images/dokter.webp' alt="/" />
                        </div>
                        <div className="card-title">
                            <h3 className='text'>Pelatihan 3</h3>
                        </div>
                        <div className="card-body">
                            <p className='text'>
                                <a href="/">Berisi penjelasan disini... </a>
                                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                        </div>
                        <div className="btn">
                            <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="image-container">
                            <div className="heading">Rp 375.000</div>
                            <img src='/images/dokter.webp' alt="/" />
                        </div>
                        <div className="card-title">
                            <h3 className='text'>Pelatihan 4</h3>
                        </div>
                        <div className="card-body">
                            <p className='text'>
                                <a href="/">Berisi penjelasan disini... </a>
                                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                        </div>
                        <div className="btn">
                            <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

// const Founding = () => {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return windowWidth <= 440 ? <ImageSlider /> : <Card />;
// };

// const ImageSlider = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: false,
//                 },
//             },
//             {
//                 breakpoint: 440,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="container-slider" style={{ padding: '20px' }}>
//             <Slider {...settings}>
//                 <div className="card-container">
//                     <div className="image-container">
//                         <div className="heading">Rp 375.000</div>
//                         <img src='/images/dokter.webp' alt="/" />
//                     </div>
//                     <div className="card-title">
//                         <h3 className='text'>Pelatihan 1</h3>
//                     </div>
//                     <div className="card-body">
//                         <p className='text'>
//                             <a href="/">Berisi penjelasan disini... </a>
//                             lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
//                     </div>
//                     <div className="btn">
//                         <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
//                     </div>
//                 </div>
//                 <div className="card-container">
//                     <div className="image-container">
//                         <div className="heading">Rp 375.000</div>
//                         <img src='/images/dokter.webp' alt="/" />
//                     </div>
//                     <div className="card-title">
//                         <h3 className='text'>Pelatihan 2</h3>
//                     </div>
//                     <div className="card-body">
//                         <p className='text'>
//                             <a href="/">Berisi penjelasan disini... </a>
//                             lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
//                     </div>
//                     <div className="btn">
//                         <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
//                     </div>
//                 </div>
//                 <div className="card-container">
//                     <div className="image-container">
//                         <div className="heading">Rp 375.000</div>
//                         <img src='/images/dokter.webp' alt="/" />
//                     </div>
//                     <div className="card-title">
//                         <h3 className='text'>Pelatihan 3</h3>
//                     </div>
//                     <div className="card-body">
//                         <p className='text'>
//                             <a href="/">Berisi penjelasan disini... </a>
//                             lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
//                     </div>
//                     <div className="btn">
//                         <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
//                     </div>
//                 </div>
//                 <div className="card-container">
//                     <div className="image-container">
//                         <div className="heading">Rp 375.000</div>
//                         <img src='/images/dokter.webp' alt="/" />
//                     </div>
//                     <div className="card-title">
//                         <h3 className='text'>Pelatihan 4</h3>
//                     </div>
//                     <div className="card-body">
//                         <p className='text'>
//                             <a href="/">Berisi penjelasan disini... </a>
//                             lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
//                     </div>
//                     <div className="btn">
//                         <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
//                     </div>
//                 </div>
//             </Slider>
//         </div>
//     );
// };

export default Card;
//  Founding;