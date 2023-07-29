import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';


interface SocialMediaProfileProps {
    name: string;
    subtitle: string;
    bio: string;
    image: string;
    link1: string;
    link2: string;
}

const SocialMediaProfile: React.FC<SocialMediaProfileProps> = ({ name, subtitle, bio, link1, link2, image }) => {
    return (
        <>
            <div className='mx-auto max-w-[1910px] max-h-[1800px] relative'>
                <div className='bg-white my-12 pb-6 m-10 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg mx-auto drop-shadow-xl'>
                    <div className='relative h-[150px]'></div>
                    <div className='relative mx-auto h-24 w-24 -my-20 bottom-10'>
                        <div className='object-cover w-full h-full'>
                            <img src={image} alt='' />
                        </div>
                    </div>
                    <div className='mt-20 p-5'>
                        <h1 className='text-lg font-semibold'>{name}</h1>
                        <p className='text-sm text-gray-600 text-left my-4'>{subtitle}</p>
                        <p className='text-sm text-gray-600 text-justify'>{bio}</p>
                    </div>
                    <div className='mt-6 pt-3 flex flex-wrap mx-6 border-t'>
                        <div className='text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default'>
                            <a href={link1}>Sosial Media</a>
                        </div>
                        <div className='text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default'>
                            <a href={link2}> Sosial Media </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
const Desktop = () => {
    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4001/personal-card';
    useEffect(() => {
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])

    return (
        <div className='flex'>
            {
                content.map((res: any) => (
                    <SocialMediaProfile
                        name={res.name}
                        subtitle={res.title}
                        bio={res.body}
                        image={res.image}
                        link1={res.medsos_1}
                        link2={res.medsos_2}
                    />

                ))
            }

        </div>
    );
};

const Founding = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth <= 440 ? <Mobile /> : <Desktop />;
};

const Mobile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    const [content, setContent] = useState<any>([]);
    const url = 'http://localhost:4001/personal-card';
    useEffect(() => {
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])

    return (
        <div style={{ position: 'relative', zIndex: '0', padding: '30px' }}>
            <Slider {...settings}>
                {
                    content.map((res: any) => (
                        <SocialMediaProfile
                            name={res.name}
                            subtitle={res.title}
                            bio={res.body}
                            image={res.image}
                            link1={res.medsos_1}
                            link2={res.medsos_2}
                        />

                    ))
                }

            </Slider>
        </div>
    );
};

export default Founding;



// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// interface SocialMediaProfileProps {
//     name: string;
//     subtitle: string;
//     bio: string;
//     link1: string;
//     link2: string;
// }

// const SocialMediaProfile: React.FC<SocialMediaProfileProps> = ({ name, subtitle, bio, link1, link2 }) => {
//     return (
//         <>
//             <div className='mx-auto max-w-[1910px] max-h-[1800px] relative'>
//                 <div className='bg-white my-12 pb-6 m-10 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg mx-auto drop-shadow-xl'>
//                     <div className='relative h-[150px]'></div>
//                     <div className='relative mx-auto h-24 w-24 -my-20 bottom-10'>
//                         <div className='object-cover w-full h-full'>
//                             <img src='/images/avatar.webp' alt='' />
//                         </div>
//                     </div>
//                     <div className='mt-20 p-5'>
//                         <h1 className='text-lg font-semibold'>{name}</h1>
//                         <p className='text-sm text-gray-600 text-left my-4'>{subtitle}</p>
//                         <p className='text-sm text-gray-600 text-left'>{bio}</p>
//                     </div>
//                     <div className='mt-6 pt-3 flex flex-wrap mx-6 border-t'>
//                         <div className='text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default'>
//                             {link1}
//                         </div>
//                         <div className='text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default'>
//                             {link2}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// const Desktop = () => {
//     return (
//         <div className='flex'>
//             <SocialMediaProfile
//                 name='Nama'
//                 subtitle='Card Subtitle'
//                 bio='Some quick example text to build on the card title and make up the bulk of the card content.'
//                 link1='social media 1'
//                 link2='Social media 2'
//             />
//             <SocialMediaProfile
//                 name='Nama'
//                 subtitle='Card Subtitle'
//                 bio='Some quick example text to build on the card title and make up the bulk of the card content.'
//                 link1='social media 1'
//                 link2='Social media 2'
//             />
//             <SocialMediaProfile
//                 name='Nama'
//                 subtitle='Card Subtitle'
//                 bio='Some quick example text to build on the card title and make up the bulk of the card content.'
//                 link1='social media 1'
//                 link2='Social media 2'
//             />
//         </div>
//     );
// };

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

//     return windowWidth <= 440 ? <Mobile /> : <Desktop />;
// };

// const Mobile = () => {
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
//         <div style={{ position: 'relative', zIndex: '0', padding: '30px' }}>
//             <Slider {...settings}>
//                 <SocialMediaProfile
//                     name='Nama'
//                     subtitle='Card Subtitle'
//                     bio='Some quick example text to build on the card title and make up the bulk of the card content.'
//                     link1='social media 1'
//                     link2='Social media 2'
//                 />
//                 <SocialMediaProfile
//                     name='Nama'
//                     subtitle='Card Subtitle'
//                     bio='Some quick example text to build on the card title and make up the bulk of the card content.'
//                     link1='social media 1'
//                     link2='Social media 2'
//                 />
//                 <SocialMediaProfile
//                     name='Nama'
//                     subtitle='Card Subtitle'
//                     bio='Some quick example text to build on the card title and make up the bulk of the card content.'
//                     link1='social media 1'
//                     link2='Social media 2'
//                 />
//             </Slider>
//         </div>
//     );
// };

// export default Founding;
