import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbarhome';
import Banner from '../../components/banner/bnhome';
import Content from '../../components/content/content';
import Teks from '../../components/teks/teks-kata-mereka';
import Card from '../../components/card/cardhome';
import Icons from '../../components/iconshome/iconshome';
import Sosmed from '../../components/sosmed/sosmed';
import Intro from '../../components/intro/introhome';
import Article2 from '../../components/articlehome/article2';
import Questions from '../../components/questions/questions';
import Footer from '../../components/footer/footer';

const Home = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <Navbar accountEmail={props.email} />
            <Banner />
            <Content />
            <Card />
            <Icons />
            <Teks />
            <Sosmed />
            <Intro />
            <Article2 />
            <Questions />
            <Footer />
        </div>
    );
};

export default Home;
