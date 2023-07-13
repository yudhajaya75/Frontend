import React from 'react'
import Navbar from '../../components/navbar/navbarblog'
import Teks2 from '../../components/teks/teksblog2'
import Blog from '../../components/blog/blog4'
import Footer from '../../components/footer/footer'

const blog3 = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px]'>
            <Navbar accountEmail={props.email} />
            <Teks2 />
            <Blog />
            <Footer />
        </div>
    )
}

export default blog3