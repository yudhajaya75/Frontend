import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blog = () => {
    const [count, setCount] = useState(0);

    const handleImageClick = () => {
        setCount(count + 1)
    };

    return (
        <>
            <div>
                <div className='relative'>
                    <div className='grid grid-cols-1 content-start lg:w-[1300px] h-auto relative'>
                        <div className='relative left-[100px] top-[120px]'>
                            <a href="blog3"><img className='h-[380px]' src='./images/blog.webp' alt='' onClick={handleImageClick} /></a>
                            <div className='w-[400px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                                <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                                <div className='flex gap-5 relative top-10 left-[280px] z-10'>
                                    <a href="#">
                                        <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                    </a>
                                    <a href="#">
                                        <img src="../images/share.webp" className='w-[25px]' alt="" />
                                    </a>
                                </div>
                                <div className='relative top-5 left-[150px] text-[#8B8B8B]'>
                                    <p>06 Maret 2023</p>
                                </div>
                                <div className='relative top-[0px] left-0'>
                                    <p className='font-bold text-[25px]'>{count}</p>
                                    <p className='text-[#8B8B8B]'>People Saw</p>
                                </div>
                            </div>
                        </div>
                        <div className=' relative left-[100px] bottom-[20px]'>
                            <a href="blog3"><img className='h-[380px]' src='./images/blog2.webp' alt='' onClick={handleImageClick} /></a>
                            <div className='w-[400px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                                <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                                <div className='flex gap-5 relative top-10 left-[280px] z-10'>
                                    <a href="#">
                                        <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                    </a>
                                    <a href="#">
                                        <img src="../images/share.webp" className='w-[25px]' alt="" />
                                    </a>
                                </div>
                                <div className='relative top-5 left-[150px] text-[#8B8B8B]'>
                                    <p>06 Maret 2023</p>
                                </div>
                                <div className='relative top-[0px] left-0'>
                                    <p className='font-bold text-[25px]'>{count}</p>
                                    <p className='text-[#8B8B8B]'>People Saw</p>
                                </div>
                            </div>
                        </div>
                        <div className=' relative left-[100px] bottom-[170px]'>
                            <a href="blog3"><img className='h-[380px]' src='./images/blog3.webp' alt='' onClick={handleImageClick} /></a>
                            <div className='w-[400px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                                <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                                <div className='flex gap-5 relative top-10 left-[280px] z-10'>
                                    <a href="#">
                                        <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                    </a>
                                    <a href="#">
                                        <img src="../images/share.webp" className='w-[25px]' alt="" />
                                    </a>
                                </div>
                                <div className='relative top-5 left-[150px] text-[#8B8B8B]'>
                                    <p>06 Maret 2023</p>
                                </div>
                                <div className='relative top-[0px] left-0'>
                                    <p className='font-bold text-[25px]'>{count}</p>
                                    <p className='text-[#8B8B8B]'>People Saw</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-l-2 h-[2289px] absolute left-[42%] top-[50px]'>
                        </div>
                    </div>
                </div>
            </div>
        </>
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

    return windowWidth <= 440 ? <Mobile /> : <Blog />;
};

const Mobile = () => {
    return (
        <>
            <div className='-ml-3'>
                <div className='grid grid-cols-1 content-start h-auto'>
                    <div className=' relative left-[30px] top-[50px]'>
                        <a href="#"><img className='h-[122px]' src='./images/blog.webp' alt='' /></a>
                        <div className='w-[130px] h-[170px] border-2 bg-white p-5 rounded-lg z-10 relative left-[3px] bottom-[50px]'>
                            <p className='font-bold text-[7px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative top-4 text-justify text-[5px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-3 relative top-7 left-[70px] w-[30px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[25px]' alt="" />
                                </a>
                            </div>
                            <div className='relative top-5 left-[30px] text-[#8B8B8B]'>
                                <p className='text-[4px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[10px] left-0'>
                                <p className='font-bold text-[5px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[5px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[30px] top-[20px]'>
                        <a href="#"><img className='h-[122px]' src='./images/blog2.webp' alt='' /></a>
                        <div className='w-[130px] h-[170px] border-2 bg-white p-5 rounded-lg z-10 relative left-[3px] bottom-[50px]'>
                            <p className='font-bold text-[7px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative top-4 text-justify text-[5px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-3 relative top-7 left-[70px] w-[30px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[25px]' alt="" />
                                </a>
                            </div>
                            <div className='relative top-5 left-[30px] text-[#8B8B8B]'>
                                <p className='text-[4px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[10px] left-0'>
                                <p className='font-bold text-[5px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[5px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[30px] bottom-[10px]'>
                        <a href="#"><img className='h-[122px]' src='./images/blog3.webp' alt='' /></a>
                        <div className='w-[130px] h-[170px] border-2 bg-white p-5 rounded-lg z-10 relative left-[3px] bottom-[50px]'>
                            <p className='font-bold text-[7px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <p className='relative top-4 text-justify text-[5px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <div className='flex gap-3 relative top-7 left-[70px] w-[30px] z-10'>
                                <a href="#">
                                    <img src="../images/bookmark.webp" className='w-[20px]' alt="" />
                                </a>
                                <a href="#">
                                    <img src="../images/share.webp" className='w-[25px]' alt="" />
                                </a>
                            </div>
                            <div className='relative top-5 left-[30px] text-[#8B8B8B]'>
                                <p className='text-[4px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[10px] left-0'>
                                <p className='font-bold text-[5px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[5px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-l-2 h-[860px] absolute left-[38%] top-[140px]'>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Founding;


// import React, { useState, useEffect } from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './blog.css'
// import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

// const Blog = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const data = [
//         {
//             imgUrl: './images/blog.webp',
//             title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptate.',
//             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             date: '06 Maret 2023',
//             views: '100k'
//         },
//         {
//             imgUrl: './images/blog2.webp',
//             title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptate.',
//             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             date: '06 Maret 2023',
//             views: '100k'
//         },
//         {
//             imgUrl: './images/blog3.webp',
//             title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptate.',
//             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             date: '06 Maret 2023',
//             views: '100k'
//         }

//     ];

//     const handlePrev = () => {
//         setCurrentIndex(prevIndex => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
//     };

//     const currentItem = data[currentIndex];

//     return (
//         <>
//             <div>
//                 <div className='relative'>
//                     <div className='grid grid-cols-1 content-start w-[1300px] h-auto relative'>
//                         <div className='lg:relative lg:left-[100px] lg:top-[120px] sm-440:relative sm-440:left-[60px] sm-440:top-20'>
//                             <a href="blog3">
//                                 <img className='lg:h-[380px] sm-440:h-[280px]' src={currentItem.imgUrl} alt='' />
//                             </a>
//                             <div className='lg:w-[400px] lg:h-[400px] lg:border-2 lg:relative lg:left-[13px] lg:bottom-[200px] bg-white lg:p-5 sm-440:p-3 rounded-lg z-10 sm-440:w-[300px] sm-440:h-[260px] sm-440:border-2 sm-440:relative sm-440:left-[6px] sm-440:bottom-[150px]'>
//                                 <p className='font-bold lg:text-[25px] sm-440:text-[18px]'>{currentItem.title}</p>
//                                 <p className='relative top-4 text-justify sm-440:text-[13px]'>{currentItem.description}</p>
//                                 <div className='flex gap-5 lg:relative lg:top-10 lg:left-[280px] sm-440:relative sm-440:top-[40px] sm-440:left-[210px] z-10'>
//                                     <a href="#">
//                                         <img src="../images/bookmark.webp" className='lg:w-[20px] sm-440:w-[10px]' alt="" />
//                                     </a>
//                                     <a href="#">
//                                         <img src="../images/share.webp" className='lg:w-[25px] sm-440:w-[15px]' alt="" />
//                                     </a>
//                                 </div>
//                                 <div className='lg:relative lg:top-5 lg:left-[150px] sm-440:relative sm-440:top-6 sm-440:left-[120px] lg:text-[13px] sm-440:text-[10px] text-[#8B8B8B]'>
//                                     <p>{currentItem.date}</p>
//                                 </div>
//                                 <div className='lg:relative sm-440:relative lg:top-[0px] sm-440:bottom-[4px] sm-440:left-0 lg:left-0'>
//                                     <p className='font-bold lg:text-[25px] sm-440:text-[12px]'>{currentItem.views}</p>
//                                     <p className='text-[#8B8B8B] lg:text-[25px] sm-440:text-[12px]'>People Saw</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='flex items-center justify-center z-10'>
//                             <div className='relative bottom-[410px]'>
//                                 <div className='lg:relative lg:right-[720px] sm-440:relative sm-440:right-[625px] sm-440:top-[90px]
//                                  '>
//                                     <button
//                                         className="lg:mt-10 lg:ml-5 lg:text-[24px] lg:p-5 text-[#002157] cursor-pointer duration-500"
//                                         style={{}}
//                                         onClick={handlePrev}
//                                     >
//                                         <CgChevronLeft />
//                                     </button>
//                                 </div>
//                                 <div className='lg:relative sm-440:relative lg:left-[720px] lg:bottom-[190px] sm-440:-left-[240px] sm-440:top-[63px]'>
//                                     <button
//                                         className="lg:ml-5 lg:text-[24px] lg:p-5 text-[#002157] rounded-md cursor-pointer duration-500"
//                                         onClick={handleNext}
//                                     >
//                                         <CgChevronRight />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Blog;  
