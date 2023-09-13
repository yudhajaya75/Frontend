import Navbar from '../../components/navbar/navbar'
import Teks4 from "../../components/teks/teks-blog";
import Footer from '../../components/footer/footwebminar';
import { useParams } from 'react-router-dom';
import BlogDetail from '../../components/blog/blogDetail';
import useArticleData from '../../hooks/useArticleData';


const Blog = (props: { email: string }) => {
    const { slug } = useParams()
    const { article, loading } = useArticleData()
    if (!article && !article) return <div>No data</div>;

    const blog: any = article?.filter((item: any) => item.slug == slug)[0];
    console.log(blog)

    return (
        <div className='mx-auto max-w-[1724px] relative'>
            <Navbar accountEmail={props.email} />
            <Teks4
                title={blog?.title} />
            <BlogDetail
                image={`${process.env.REACT_APP_UPLOAD_URL}${blog?.attributes.image.data.attributes.url}`}
                title={blog?.title}
                body={blog?.body}
            />
            <Footer />
        </div>
    )
}

export default Blog;