import Navbar from '../../components/navbar/navbar';
import Teks3 from '../../components/teks/teksblog3'
import BeritaPopulate from '../../components/blog/beritapopulate'
import Footer from '../../components/footer/footer'

const Blog2 = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px]'>
            <Navbar accountEmail={props.email} />
            <Teks3 />
            <BeritaPopulate />
            <Footer />
        </div>
    )
}

export default Blog2