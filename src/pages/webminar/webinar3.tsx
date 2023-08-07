import React from 'react'
import Navbar from '../../components/navbar/navwebinar'
import Banner from '../../components/banner/banwebminar3'
import Teks4 from "../../components/teks/teks-webinar5"
import Teks from '../../components/teks/teks-webminar5'
import Purchase from '../../components/purchase/purchase'
import Teks2 from '../../components/teks/tesk-detail-webinar'
import Teks3 from '../../components/teks/teks-kata-mereka'
import Sosmed from '../../components/sosmed/Founding'
import Footer from '../../components/footer/footwebminar'



const webinar = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1800px] relative'>
            <Navbar accountEmail={props.email} />

            <Banner />
            <Teks />
            <Purchase />
            <Teks2 />
            <Teks3 />
            <Sosmed />
            <Footer />
        </div>
    )
}

export default webinar