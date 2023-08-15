import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navwebinar'
import Banner from '../../components/banner/banwebminar3'
import Teks4 from "../../components/teks/teks-webminar5"
import Teks3 from '../../components/teks/teks-kata-mereka'
import Sosmed from '../../components/sosmed/Founding';
import Footer from '../../components/footer/footwebminar'
import TextHeadingComponent from '../../components/teks/TextHeadingComponent'
import { ButtonPesan } from '../../components/button/ButtonPesan'
import TextDescComponent from '../../components/teks/TextDescComponent'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Purchase from '../../components/purchase/purchase'
import cardsData from '../../components/purchase/cardsData';


const PelatihanDetail = (props: { email: string }) => {
    const [content, setContent] = useState<any>([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/products`)
            .then((response) => {
                setContent(response.data.data);
            })
    }, [])

    console.log(content);
    const { slug } = useParams()
    const layanan: any = content?.filter((item: any) => item.slug == slug)[0];
    const isLoggedIn = props.email !== '';

    return (
        <div className='mx-auto max-w-[1724px] relative'>
            <Navbar accountEmail={props.email} />
            <Teks4
                title={layanan?.title} />
            <Banner
                image={layanan?.image} />
            <div className='flex justify-center flex-col gap-y-10 my-20'>
                {isLoggedIn ? (
                    <>
                        <div className='w-[430px] h-[740px] relative bottom-[0px] left-[100px] rounded-md mb-[100px]'
                            style={{ boxShadow: '0px 0px 10px -5px rgba(0, 0, 0, 0.75)' }}>
                            <div className='p-10'>
                                <p className='text-[24px] font-bold text-[#103D72]'>PELATIHAN 1</p>
                                <p className='text-[#BFBFBF] pt-1'>Lorem Ipsum</p>
                                <p className='text-[16px] font-bold pt-2 text-[#103D72]'>Mulai Dari</p>
                                <p className='text-[48px] text-[#103D72]'>Rp 100.000</p>
                                <div className='pt-5 font-bold'>
                                    <button className='bg-[#F3440D] rounded-lg text-white py-2 px-[110px] hover:bg-[#ef592b]'>Daftar sekarang</button>
                                </div>
                                <p className='text-[20px] pt-7'>Fitur :</p>
                                <div className='pt-7'>
                                    <img src="../images/ceklis.webp" className='relative top-0 left-2 w-[20px]' alt="" />
                                    <p className='text-[20px] relative bottom-7 left-10'>Group komunitas telegram</p>
                                </div>
                                <div className='relative bottom-[10px]'>
                                    <img src="../images/ceklis.webp" className='relative top-0 left-2 w-[20px]' alt="" />
                                    <p className='text-[20px] relative bottom-7 left-10'>Sertifikat</p>
                                </div>
                                <div className='relative bottom-[20px]'>
                                    <img src="../images/ceklis.webp" className='relative top-0 left-2 w-[20px]' alt="" />
                                    <p className='text-[20px] relative bottom-7 left-10'>Test psikologi</p>
                                </div>
                                <div className='relative bottom-[30px]'>
                                    <img src="../images/ceklis.webp" className='relative top-0 left-2 w-[20px]' alt="" />
                                    <p className='text-[20px] relative bottom-7 left-10'>Video rekaman</p>
                                </div>
                                <div className='relative bottom-[40px]'>
                                    <img src="../images/ceklis.webp" className='relative top-0 left-2 w-[20px]' alt="" />
                                    <p className='text-[20px] relative bottom-7 left-10'>Diskon 30%</p>
                                </div>
                                <div className='relative bottom-[50px]'>
                                    <img src="../images/ceklis.webp" className='relative top-0 left-2 w-[20px]' alt="" />
                                    <p className='text-[20px] relative bottom-7 left-10'>Worksheet</p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <TextHeadingComponent heading={layanan?.title} />
                        <ButtonPesan accountEmail={props.email} />
                    </>
                )}
            </div>
            <TextDescComponent
                title={layanan?.title}
                body={layanan?.body}
            />
            <Teks3 />
            <Sosmed />
            <Footer />
        </div>
    )
}

export default PelatihanDetail;