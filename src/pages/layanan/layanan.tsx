import 'react-multi-carousel/lib/styles.css';
import Teks from '../../components/teks/teks';
import Teks2 from '../../components/teks/teks-kata-mereka';
import Sosmed from '../../components/sosmed/Desktop';
import Teks3 from '../../components/teks/teks-kerjasama';
import Card from '../../components/card/card';
import LayoutWithBanner from '../../layouts/LayoutWithBanner';
import Compslid from '../../components/compslid/compslid';


const layanan = (props: { email: string }) => {
  console.log(props)
  return (
    <div className='mx-auto max-w-[1800px] relative'>
     <LayoutWithBanner
      bgImage={"bg-Layanan"}
      accountEmail={props.email}
      firstElement={
          <>
              <div className=' text-center -ml-10 md:text-left md:ml-0 p-5 grid gap-6 text-slate-50'>
                  <h1 className="text-5xl mb-5 sm:mb-0 md:text-6xl font-bold ">
                  Layanan konseling individu pasangan & keluarga
                  </h1>
                  <p className="font-extralight text-3xl sm:text-lg md:text-xl lg:text-4xl">
                  apa itu Layanan Konseling individu pasangan & keluarga dan untuk siapa. title bebas
                  </p>     </div>
          </>
      }
      secondElement=''
     >
         
        <Teks />
        <Card />
        <Teks2 />
        <Sosmed />
        <Teks3 />
        <Compslid/>
     </LayoutWithBanner>
    </div>
  );
}

export default layanan;
