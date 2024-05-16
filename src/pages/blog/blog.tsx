import Navbar from '../../components/navbar/navbar'
import Blog1 from '../../components/blog/blog'
import Footer from '../../components/footer/footer'

const Blog = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px] '>
            <Navbar accountEmail={props.email} />
            <div className='lg:flex lg:justify-center lg:items-center lg:mr-[170px]'>
                <div className='flex flex-col'>
                    <Blog1 />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog