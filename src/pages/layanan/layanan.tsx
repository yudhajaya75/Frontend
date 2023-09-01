import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import Teks from '../../components/teks/teks';
import Teks2 from '../../components/teks/teks-kata-mereka';
import Sosmed from '../../components/sosmed/Founding';
import Teks3 from '../../components/teks/teks-kerjasama';
import Compslid from '../../components/compslid/founding';
import Footer from '../../components/footer/footer';
import CardLayanan from '../../components/card/cardLayanan';

const layanan = (props: { email: string }) => {
  console.log(props)
  return (
    <div className='mx-auto max-w-[1800px] relative'>
      <Navbar accountEmail={props.email} />
      <Banner />
      <Teks />
      <div className='lg:flex lg:justify-center lg:items-center lg:mr-[0px]'>
        <div className='flex flex-col'>
          <CardLayanan />
        </div>
      </div>
      <Teks2 />
      <Sosmed />
      <Teks3 />
      <Compslid />
      <Footer />
    </div>
  );
}

export default layanan;
