import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import { CgArrowTopRightO } from "react-icons/cg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const IconWebimar = () => {
    const params = queryString.parse(window.location.search);
    const initialActiveSection = parseInt(params.section as string, 10) || 0;
    const [activeSection, setActiveSection] = useState(initialActiveSection);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSectionIndex = 0;

            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2) {
                    currentSectionIndex = i;
                }
            }

            setActiveSection(currentSectionIndex);
        };

        window.addEventListener("scroll", handleScroll);
        const newQuery = queryString.stringify({ section: activeSection });
        const newUrl = window.location.pathname + "?" + newQuery;
        window.history.replaceState(null, "", newUrl);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);

    return (
        <>
            <div id="list-example" className="list-group">
                <div className="mt-20 lg:mt-[100px] text-[#4B465C] p-2 text-center relative">
                    <div className="w-full font-medium text-xs lg:text-lg flex justify-center md:gap-10">
                        <div
                            className={`bg-[#002157] flex items-center p-3 lg:px-5 lg:h-10 lg:mt-2 text-slate-100 rounded-md ${activeSection === 0 ? "active" : ""
                                }`}
                        >
                            <a className="list-group-item list-group-item-action" href="#section1">
                                Webminar
                            </a>
                        </div>
                        <div className={`p-3 hover:text-[#002157] ${activeSection === 1 ? "active" : ""}`}>
                            <a className="list-group-item list-group-item-action" href="#section2">
                                Pelatihan
                            </a>
                        </div>
                        <div className={`px-4 py-1 hover:text-[#002157] ${activeSection === 2 ? "active" : ""}`}>
                            <a className="list-group-item list-group-item-action" href="#section3">
                                Layanan konseling individu<br /> pasangan & keluarga
                            </a>
                        </div>
                        <div className={`p-3 hover:text-[#002157] ${activeSection === 3 ? "active" : ""}`}>
                            <a className="list-group-item list-group-item-action" href="#section4">
                                Konsultasi
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <>
                <div>
                    <div className="relative left-0 p-10">
                        <Carousel
                            showArrows={true}
                        // autoPlay={true}
                        // interval={2000}
                        // infiniteLoop={true}
                        >
                            <div id="section1">
                                <div className="mt-20 lg:mt-[10px] relative left-[200px] sm-440:w-[420px]">
                                    <div className="lg:w-[1200px] lg:h-[350px] relative right-[50px] sm-440:right-[150px] flex p-2 justify-center">
                                        <img src="./images/home2.webp" alt="image" className="w-1/2" />
                                        <div className="ml-2 lg:ml-[50px] text-left xl:mt-0 xl:w-[500px] flex flex-col lg:gap-5">
                                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  font-semibold text-[#002157]">
                                                <h2>Webminar</h2>
                                            </div>
                                            <div className=" mt-[2px] sm-440:text-[10px] text-sm md:text-xl lg:text-xl font-extralight text-[#5B5B5B]">
                                                <p className="sm-440:w-[200px] lg:w-[400px]">
                                                    It has survived not only five centuries, but also the leap into electronic
                                                    typesetting, remaining essentially unchanged.
                                                </p>
                                            </div>
                                            <div className="text-sm md:text-lg lg:text-xl font-semibold text-[#002157]  mt-[2px] flex items-center">
                                                <a href="#">Lihat selengkapnya</a>
                                                <CgArrowTopRightO className="ml-[5px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="section2">
                                <div className="mt-20 lg:mt-[10px] relative left-[200px] sm-440:w-[470px] p-10">
                                    <div className="lg:w-[1200px] lg:h-[350px] relative right-[50px] sm-440:right-[148px] flex p-2 justify-center">
                                        <img src="./images/Carousel.webp" alt="image" className="w-1/2" />
                                        <div className="ml-2 lg:ml-[50px] text-left xl:mt-0 xl:w-[500px] flex flex-col lg:gap-5">
                                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  font-semibold text-[#002157]">
                                                <h2>Webminar</h2>
                                            </div>
                                            <div className=" mt-[2px] sm-440:text-[10px] text-sm md:text-xl lg:text-xl font-extralight text-[#5B5B5B]">
                                                <p className="sm-440:w-[200px] lg:w-[400px]">
                                                    It has survived not only five centuries, but also the leap into electronic
                                                    typesetting, remaining essentially unchanged.
                                                </p>
                                            </div>
                                            <div className="text-sm md:text-lg lg:text-xl font-semibold text-[#002157]  mt-[2px] flex items-center">
                                                <a href="#">Lihat selengkapnya</a>
                                                <CgArrowTopRightO className="ml-[5px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="section3">
                                <div className="mt-20 lg:mt-[10px] relative left-[200px] sm-440:w-[470px] p-10">
                                    <div className="lg:w-[1200px] lg:h-[350px] relative right-[50px] sm-440:right-[148px] flex p-2 justify-center">
                                        <img src="./images/home4.webp" alt="image" className="w-1/2" />
                                        <div className="ml-2 lg:ml-[50px] text-left xl:mt-0 xl:w-[500px] flex flex-col lg:gap-5">
                                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  font-semibold text-[#002157]">
                                                <h2>Webminar</h2>
                                            </div>
                                            <div className=" mt-[2px] sm-440:text-[10px] text-sm md:text-xl lg:text-xl font-extralight text-[#5B5B5B]">
                                                <p className="sm-440:w-[200px] lg:w-[400px]">
                                                    It has survived not only five centuries, but also the leap into electronic
                                                    typesetting, remaining essentially unchanged.
                                                </p>
                                            </div>
                                            <div className="text-sm md:text-lg lg:text-xl font-semibold text-[#002157]  mt-[2px] flex items-center">
                                                <a href="#">Lihat selengkapnya</a>
                                                <CgArrowTopRightO className="ml-[5px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="section4">
                                <div className="mt-20 lg:mt-[10px] relative left-[200px] sm-440:w-[470px] p-10">
                                    <div className="lg:w-[1200px] lg:h-[350px] relative right-[50px] sm-440:right-[148px] flex p-2 justify-center">
                                        <img src="./images/blog5.webp" alt="image" className="w-1/2" />
                                        <div className="ml-2 lg:ml-[50px] text-left xl:mt-0 xl:w-[500px] flex flex-col lg:gap-5">
                                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  font-semibold text-[#002157]">
                                                <h2>Webminar</h2>
                                            </div>
                                            <div className=" mt-[2px] sm-440:text-[10px] text-sm md:text-xl lg:text-xl font-extralight text-[#5B5B5B]">
                                                <p className="sm-440:w-[200px] lg:w-[400px]">
                                                    It has survived not only five centuries, but also the leap into electronic
                                                    typesetting, remaining essentially unchanged.
                                                </p>
                                            </div>
                                            <div className="text-sm md:text-lg lg:text-xl font-semibold text-[#002157]  mt-[2px] flex items-center">
                                                <a href="#">Lihat selengkapnya</a>
                                                <CgArrowTopRightO className="ml-[5px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel >
                    </div>
                </div>
            </>
        </>
    );
};

export default IconWebimar;