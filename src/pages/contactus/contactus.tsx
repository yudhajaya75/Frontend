import Navbar from '../../components/navbar/navbar';
import Teks from '../../components/teks/contactus';
import Teks2 from '../../components/teks/contactus2';
import ContactUs from '../../components/contact/contact';
import Footer from '../../components/footer/footer';

const Home = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <Navbar accountEmail={props.email} />
            <div className='py-5'>
                <Teks />
                <Teks2 />
            </div>
            <div className='-mt-[200px]'>
                <ContactUs />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
