import Navbar from '../../components/navbar/navbar';
import Teks2 from '../../components/teks/teksblog2'
import BeritaTerbaru from '../../components/blog/beritabaru'
import Footer from '../../components/footer/footer'

const Blog2 = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px]'>
            <Navbar accountEmail={props.email} />
            <Teks2 />
            <BeritaTerbaru />
            <Footer />
        </div>
    )
}

export default Blog2