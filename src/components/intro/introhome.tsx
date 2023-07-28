import React from 'react';
import '../intro/responsive.css';

const Content = () => {
    return (
        <section className="mt-20 lg:mt-[200px] h-[500px] lg:h-[700px] sm:h-[780px] ">
            <h2 className="text-2xl lg:text-3xl text-center font-semibold text-[#002157]">Berkenalan dengan Konseling Satir</h2>
            <div className="relative mt-10 lg:mt-[100px]">
                <div>
                    <img src='../images/home3.webp' alt="garis-setengah-lingkaran" className="absolute w-[80%] top-[15%] lg:w-[750px] xl:top-[15%] 2xl:top-[15%]" />
                </div>
                <div className="absolute w-[95%] md:w-[80%] h-[200px] mt-[100px] left-[3%] md:left-[10%] sm:h-[300px] lg:h-[450px] lg:top-[15%] md:h-[350px] " >
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/D6OSjCrO1wQ"
                        title="YouTube video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    <img src='' alt="" className="absolute top-[45%] left-[45%] lg:left-[50%]" />
                </div>
            </div>
        </section>
    );
}

export default Content;
