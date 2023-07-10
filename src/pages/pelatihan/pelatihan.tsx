import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banpelatihan'
import Teks from '../../components/teks/teks-pelatihan'
import Card from '../../components/card/cardpelatihan'
import Teks2 from '../../components/teks/teks-kata-mereka'
import Sosmed from '../../components/sosmed/sosmed'
import Teks3 from '../../components/teks/teks-kerjasama'
import Compslid from '../../components/compslid/compslid1'
import Footer from '../../components/footer/footer'

const pelatihan = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <Navbar accountEmail={props.email} />
            <Banner />
            <Teks />
            <Card />
            <Teks2 />
            <Sosmed />
            <Teks3 />
            <Compslid />
            <Footer />
        </div>
    )
}

export default pelatihan