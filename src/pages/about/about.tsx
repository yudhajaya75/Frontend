import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/bnabout'
import Teks from '../../components/teks/teksabout'
import Teks1 from '../../components/teks/teksabout1'
import Card from '../../components/card/cardabout'
import Teks2 from '../../components/teks/teksabout-pendiri'
import Founding from '../../components/founding/founding'
import Compslid from '../../components/compslid/founding'
import Tesk3 from '../../components/teks/teks-kerjasama'
import Footer from '../../components/footer/footabout'


const About = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <Navbar accountEmail={props.email} />
            <Banner />
            <Teks />
            <Teks1 />
            <div className='lg:flex lg:justify-center lg:items-center lg:mr-[10px]'>
                <div className='flex flex-col'>
                    <Card />
                </div>
            </div>
            <Teks2 />
            <div className='flex justify-center items-center mr-[10px]'>
                <Founding />
            </div>
            <div className='relative top-[150px] left-4'>
                <Tesk3 />
                <Compslid />
            </div>
            <Footer />
        </div>

    )
}

export default About