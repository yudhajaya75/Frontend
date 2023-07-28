import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navwebinar'
import Banner from '../../components/banner/banwebminar3'
import Teks4 from "../../components/teks/teks-webinar5"
import Teks3 from '../../components/teks/teks-kata-mereka'
import Sosmed from '../../components/sosmed/sosmed'
import Footer from '../../components/footer/footwebminar'
import TextHeadingComponent from '../../components/teks/TextHeadingComponent'
import { ButtonPesan } from '../../components/Button/ButtonPesan'
import TextDescComponent from '../../components/teks/TextDescComponent'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const PelatihanDetail = (props: { email: string }) => {
    const [content, setContent] = useState<any>([])
    const url = 'http://localhost:4001/pelatihan-card';
        useEffect(() =>{
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])

    console.log(content);
    const {slug} = useParams()
    const layanan: any = content?.filter((item: any) => item.slug == slug)[0];
    



    return (
        <div className='mx-auto max-w-[1724px] relative'>
            <Navbar accountEmail={props.email} />
           
                <Teks4 
                title={layanan?.title}/>
                <Banner 
                image={layanan?.image}/>
                <div className='flex justify-center flex-col gap-y-10 my-20'>
                    <TextHeadingComponent 
                    heading={layanan?.title}/>
                    <ButtonPesan/>
                </div>
                <TextDescComponent
                title='Pelatihan ini !'
                body={layanan?.body}
                />
            <Teks3 />
            <Sosmed />
            <Footer />
        </div>
    )
}

export default PelatihanDetail;