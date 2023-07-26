import React from 'react'
import Navbar from '../../components/navbar/navprofile'
import Content from '../../components/content/content2'
import Content2 from '../../components/content/content3'
import Content3 from '../../components/content/content4'
import Footer from '../../components/footer/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Profile = (props: { email: string }) => {
    return (
        <>
            <div className='mx-auto max-w-[1910px] relative'>
                <Navbar accountEmail={props.email} />
                <Content2 />
                <Content />
                {/* <Content3 /> */}
                <Footer />
            </div>
        </>
    )
}

export default Profile