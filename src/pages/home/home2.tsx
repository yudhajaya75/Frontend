import React from 'react'
import Navbar from '../../components/navbar/navbarhome'
import Banner from '../../components/banner/bnhome2'
import Card from '../../components/card/cardhome2'
import Article from '../../components/articlehome/article2'
import Footer from '../../components/footer/footer'

const Home = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <Navbar accountEmail={props.email} />
            <Banner />
            <Card />
            <Article />
            <Footer />
        </div>
    )
}

export default Home