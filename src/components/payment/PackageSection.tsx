import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PackageSection: React.FC = () => {
  const [content, setContent] = useState<any>();
  const location = useLocation();
  const id = location.state?.id;
  const title = location.state?.title;
  const price = location.state?.price;

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/product-variants/${id}?populate=*`,
        {
          method: "GET",
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setContent(response.data.data);
        localStorage.setItem("product_id", id);
      });
  });

  const date = new Date(content?.attributes.eventDate).toLocaleDateString();
  const dateTime = new Date(content?.attributes.eventDate).toLocaleTimeString();

  return (
    <div className="p-4 border-2 border-[#79ACFF] h-auto rounded-lg mb-20">
      <div className="flex justify-between items-center bg-[#dcf6e8] rounded-lg px-5">
        <div className="flex gap-5 py-5 w-full text-[#28C76F]">
          <img src="./images/box.webp" alt="paket" className="object-cover" />
          <div className="">
            <p className="font-semibold text-[18px]">
              Paket {title ? title : "bukan id nya"}
            </p>
          </div>
        </div>
        <div className="w-[120px] hidden h-[0px] z-10 p-5 bg-white shadow-md rounded-lg sm:flex justify-center items-center border border-blue-300">
          <div className="text-blue-900 text-sm font-semibold font-sans">
            <p>Rp. {price ? price : "Harga tidak tersedia"}</p>
          </div>
        </div>
      </div>
      <div className="text-[15px]">
        <p
          className="p-4"
          dangerouslySetInnerHTML={{ __html: content?.attributes?.content }}
        ></p>
        <p className="p-4">
          Hari/Tanggal : {date}
          <br />
          Waktu : {dateTime}
        </p>
        <p className="mx-4">Benefit :</p>
        {content?.attributes.features.map((res: any, index: number) => (
          <div className="text-[#909090]" key={index}>
            <ul className="list-disc my-1 mx-10">
              <li>{res.feature}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageSection;
