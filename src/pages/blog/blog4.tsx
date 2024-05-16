import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import Teks2 from '../../components/teks/teksblog2'
import Blog from '../../components/blog/blogDetail'
import Footer from '../../components/footer/footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Blog4 = (props: { email: string }) => {
    const [content, setContent] = useState<any>([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/articel-card`)
            .then((response) => {
                setContent(response.data.data);
            })
    }, [])

    console.log(content);
    const { slug } = useParams()
    const blog: any = content?.filter((item: any) => item.slug == slug)[0];
    console.log(blog)

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

export default Blog4