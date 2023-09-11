import Navbar from '../../components/navbar/navbar';
import Banner from '../../components/banner/bnhome';
import Contents from '../../components/content/content';
import Teks from '../../components/teks/teks-kata-mereka';
import Card from '../../components/card/cardhome';
import Icons from '../../components/iconshome/iconshome';
import Sosmed from '../../components/sosmed/Founding';
import Intro from '../../components/youtube/youtube';
import Article2 from '../../components/articlehome/article2';
import Questions from '../../components/questions/questions';
import Footer from '../../components/footer/footer';

const Home = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1710px] relative'>
            <Navbar accountEmail={props.email} />
            <Banner />
            <Contents />
            <Card />
            <Icons />
            <div className='mt-20'>
                <Teks />
            </div>
            <Sosmed />
            <Intro />
            <Article2 />
            <Questions />
            <Footer />
        </div>
    );
};

export default Home;
