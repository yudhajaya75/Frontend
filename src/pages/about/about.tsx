import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/navbar/navabout'
import Banner from '../../components/banner/bnabout'
import Teks from '../../components/teks/teksabout'
import Teks1 from '../../components/teks/teksabout1'
import Card from '../../components/card/cardabout'
import Teks2 from '../../components/teks/teksabout-pendiri'
import Founding from '../../components/founding/founding'
import Footer from '../../components/footer/footabout'


const About = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <Navbar accountEmail={props.email} />
            <Banner />
            <Teks />
            <Teks1 />
            <Card />
            <Teks2 />
            <Founding />
            <Footer />
        </div>

    )
}

export default About