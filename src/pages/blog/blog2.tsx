import React from 'react'
import Navbar from '../../components/navbar/navbarblog'
import Teks2 from '../../components/teks/teksblog2'
import Blog2 from '../../components/blog/beritabaru'
import Footer from '../../components/footer/footer'

const blog2 = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <Navbar accountEmail={props.email} />
            <Teks2 />
            <Blog2 />
            <Footer />
        </div>
    )
}

export default blog2