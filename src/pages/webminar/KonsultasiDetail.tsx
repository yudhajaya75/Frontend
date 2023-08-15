import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navwebinar'
import Banner from '../../components/banner/banwebminar3'
import Teks4 from "../../components/teks/teks-webinar5"
import Teks3 from '../../components/teks/teks-kata-mereka'
import Founding from '../../components/sosmed/Founding';
import Footer from '../../components/footer/footwebminar'
import TextHeadingComponent from '../../components/teks/TextHeadingComponent'
import { ButtonPesan } from '../../components/button/ButtonPesan'
import TextDescComponent from '../../components/teks/TextDescComponent'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Konsultasi = (props: { email: string }) => {
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

    return (
        <div className='mx-auto max-w-[1724px] relative'>
            <Navbar accountEmail={props.email} />
            <Teks4
                title={layanan?.title} />
            <Banner
                image={layanan?.image} />
            <div className='flex justify-center flex-col gap-y-10 my-20'>
                <TextHeadingComponent
                    heading={layanan?.title} />
                <ButtonPesan accountEmail={props.email} />
            </div>
            <TextDescComponent
                title='Pelatihan ini !'
                body={layanan?.body}
            />
            <Teks3 />
            <Founding />
            <Footer />
        </div>
    )
}

export default Konsultasi;