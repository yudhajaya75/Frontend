import React from 'react'
import Navbar from '../../components/navbar/navbarblog'
import Teks2 from '../../components/teks/teksblog2'
import Blog from '../../components/blog/blog4'
import Footer from '../../components/footer/footer'

const blog3 = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1600px]'>
            <Navbar accountEmail={props.email} />
            <div className='lg:flex lg:justify-center lg:items-center lg:mr-[170px]'>
                <div className='flex flex-col'>
                    <Teks2 />
                    <Blog />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default blog3