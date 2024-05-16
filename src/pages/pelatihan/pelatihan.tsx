<<<<<<< HEAD
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banpelatihan'
import Teks from '../../components/teks/teks-pelatihan'
import Teks2 from '../../components/teks/teks-kata-mereka'
import Sosmed from '../../components/sosmed/Founding';
import Teks3 from '../../components/teks/teks-kerjasama'
import Compslid from '../../components/compslid/founding'
import Footer from '../../components/footer/footer'
import Card from '../../components/card/card'
=======
import Teks from "../../components/teks/teksabout";
import Teks2 from "../../components/teks/teks-kata-mereka";
import Sosmed from "../../components/sosmed/Desktop";
import Teks3 from "../../components/teks/teks-kerjasama";
import Card from "../../components/card/card";
import LayoutWithBanner from "../../layouts/LayoutWithBanner";
import Compslid from "../../components/compslid/compslid";
import useBanPelaData from "../../hooks/useBanPelaData";

const Pelatihan = (props: { email: string }) => {
    const { content } = useBanPelaData()
    
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e

    return (
<<<<<<< HEAD
        <div className='mx-auto max-w-[1800px] relative'>
            <Navbar accountEmail={props.email} />
            <Banner />
            <Teks />
            <div className='lg:flex lg:justify-center lg:items-center lg:mr-[0px]'>
                <div className='flex flex-col'>
                    <Card />
                </div>
=======
        <LayoutWithBanner
        bgImage={`${process.env.REACT_APP_UPLOAD_URL}${content?.attributes.image.data.attributes.url}`}
        accountEmail={props.email}
        firstElement={
            <>
            <div className=" text-center -ml-10 md:text-left md:ml-0 p-5 grid gap-6 text-slate-50">
                <h1 className="text-5xl mb-5 sm:mb-0 md:text-6xl font-bold ">
                {content?.attributes.header && content?.attributes.header}
                </h1>
                <p className="font-extralight text-3xl sm:text-lg md:text-xl lg:text-4xl ">
                {content?.attributes.desc && content?.attributes.desc} 
                </p>
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e
            </div>
            </>
        }
        secondElement=""
        >
            <main className="px-5 lg:px-24">
                <Teks
                title={content?.attributes.title && content?.attributes.title}
                body={content?.attributes.body && content?.attributes.body}
                />
                <Card prefixLink="pelatihan" />
                <Teks2 />
                <Sosmed />
                <Teks3 />
                <Compslid />
            </main>
        </LayoutWithBanner>
    );
};

export default Pelatihan;
