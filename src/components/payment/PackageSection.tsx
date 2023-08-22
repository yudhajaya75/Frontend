import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

interface PackageSectionProps {
    index: number;
    activePage: number;
    handleNext: () => void;
    handlePrevious: () => void;
}

const PackageSection: React.FC<PackageSectionProps> = ({ index, activePage, handleNext, handlePrevious }) => {
    const [content, setContent] = useState<any>();
    const location = useLocation();
    const id = location.state?.id;
    const title = location.state?.title;
    const price = location.state?.price;

    useEffect(() => {
        if (index === 0) {
            axios.get(`${process.env.REACT_APP_API_URL}/product-variants/${id}?populate=*`)
                .then((response) => {
                    setContent(response.data.data);
                });
        }
    }, [index, id]);
    console.log('test', content);

    if (index !== 0) return null;

    return (
        <>
            <div>
                <div className='p-4 border-2 ml-7 border-[#79ACFF] min-h-[450px] rounded-lg'>
                    <div className='-z-10 p-5 ml-0 w-[870px] h-[70px] rounded-lg relative bg-[#dcf6e8] text-[#28C76F]'>
                        <img src="./images/box.webp" alt="" />
                        <div className='relative left-14 bottom-10'>
                            <p className='font-semibold text-[18px]'>Paket {title ? title : 'bukan id nya'}</p>
                            <p className='font-medium text-[15px]'>- 10% Instant Discount on Bank of Indonesia and Credit cards</p>
                        </div>
                    </div>
                    <div className="w-[120px] h-[0px] ml-[730px] z-10 mt-[-56px] p-5 bg-white shadow-md rounded-lg flex justify-center items-center border border-blue-300">
                        <div className="text-blue-900 text-sm font-semibold font-sans">
                            <p>Rp. {price ? price : 'Harga tidak tersedia'}</p>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[350px] left-10 text-[15px]'>
                    <p className='p-4'>Pelatihan Life Skills Penting untuk Umur 20-an: Pendekatan Kurikulum Konseling Satir Indonesia Bersama <br /> [Nama Dokter] (Jabatan)</p>
                    <p className='p-4'>Hari/Tanggal: Minggu, 2 April 2023 <br />Waktu: 13.00 - 15.00 WIB</p>
                    <p className='mx-4'>Benefit :</p>
                    {content?.attributes.features.map((res: any, index: number) => (
                        <div className='text-[#909090]' key={index}>
                            <ul className='list-disc my-1 mx-10'>
                                <li>{res.feature}</li>
                            </ul>
                        </div>
                    ))}
                    <button onClick={handleNext} className='bg-[#002157] ml-[743px] relative left-16 top-[150px] text-white px-4 py-1 rounded-lg'>
                        Next &#129058;
                    </button>
                </div>
                <div className='mt-[-200px]'></div>
            </div>
        </>
    )
}

export default PackageSection;