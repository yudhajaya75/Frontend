import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banlayanan'
import Teks from '../../components/teks/teks';
import Card from '../../components/card/cardkonsultasi';
import Teks2 from '../../components/teks/teks-kata-mereka';
import Sosmed from '../../components/sosmed/sosmed';
import Teks3 from '../../components/teks/teks-kerjasama';
import Compslid1 from '../../components/compslid/compslid1';
import Footer from '../../components/footer/footer';


const konsultasi = (props: { email: string }) => {
  return (
    <div className='mx-auto max-w-[1910px] relative'>
      <Navbar accountEmail={props.email} />
      <Banner />
      <Teks />
      <div className='lg:flex lg:justify-center lg:items-center lg:mr-[230px]'>
        <div className='flex flex-col'>
          <Card accountEmail={props.email} />
        </div>
      </div>
      <Teks2 />
      <Sosmed />
      <Teks3 />
      <Compslid1 />
      <Footer />
    </div>
  );
}

export default konsultasi;
