import React from 'react'
import Navbar from '../../components/navbar/navwebinar'
import Banner from '../../components/banner/banwebminar2'
import Teks4 from "../../components/teks/teks-webinar5"
import Teks from '../../components/teks/teks-webminar3'
import Teks2 from '../../components/teks/teks-webminar4'
import Teks3 from '../../components/teks/teks-kata-mereka'
import Sosmed from '../../components/sosmed/sosmed'
import Footer from '../../components/footer/footwebminar'


const webinar = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <Navbar accountEmail={props.email} />
            <Teks4 />
            <Banner />
            <Teks />
            <Teks2 />
            <Teks3 />
            <Sosmed />
            <Footer />
        </div>
    )
}

export default webinar