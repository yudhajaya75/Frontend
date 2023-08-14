import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navwebinar';
import Blog4 from '../../components/blog/blog4';
import Teks4 from "../../components/teks/teks-blog";
import Footer from '../../components/footer/footwebminar';
import TextDescComponent from '../../components/teks/TextDescComponent';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Blog = (props: { email: string }) => {
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
        <div className='mx-auto max-w-[1724px] relative'>
            <Navbar accountEmail={props.email} />
            <Teks4
                title={blog?.title} />
            <Blog4
                image={blog?.image_articel}
                title={blog?.title}
                body={blog?.body}
            />
            <Footer />
        </div>
    )
}

export default Blog;