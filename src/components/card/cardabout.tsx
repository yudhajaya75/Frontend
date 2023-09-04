import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";
import useCardHyperlink from "../../hooks/useCardHyperlink";

const Cards = () => {
  const { content, loading } = useCardHyperlink();

  return (
    <div className="cardabt">
      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {loading ? (
          <div className="gap-10 mt-[50px]">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-[400px] sm:w-[500px] md:w-[600px] shadow-lg rounded-md"
              >
                <Skeleton variant="rectangular" width={600} height={180} />
                <div className="w-full p-6">
                  <Skeleton variant="text" width={500} height={32} />
                  <Skeleton variant="text" width={550} height={72} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="font-extralight md:mt-80 sm:flex sm:flex-wrap md:justify-center">
            {content.map((res: any, index: number) => (
              <div className="p-5" key={index}>
                <div className="w-full sm:w-80 lg:w-96 border shadow-lg p-3">
                  <div className="flex gap-3">
                    <div>
                      <img src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`} alt='logo' className="h-full object-cover object-center w-96 text-sm"/>
                    </div>
                    <div>
                      <h2 className="text-[#4B465C] font-bold">{res.attributes.title}</h2>
                      <p className="text-[#4B465C] mb-5" dangerouslySetInnerHTML={{ __html: res.attributes.body }}></p>
                      <a href={res.attributes.links}>
                          <button className='bg-purple-950 px-3 py-3 text-white'>Lihat Selengkapnya</button>
                      </a>
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
