import Teks from "../../components/teks/teks-pelatihan";
import Teks2 from "../../components/teks/teks-kata-mereka";
import Sosmed from "../../components/sosmed/Desktop";
import Teks3 from "../../components/teks/teks-kerjasama";
import Card from "../../components/card/card";
import LayoutWithBanner from "../../layouts/LayoutWithBanner";
import Compslid from "../../components/compslid/compslid";

const pelatihan = (props: { email: string }) => {
    return (
        <LayoutWithBanner
        bgImage={"bg-Pelatihan"}
        accountEmail={props.email}
        firstElement={
            <>
            <div className=" text-center -ml-10 md:text-left md:ml-0 p-5 grid gap-6 text-slate-50">
                <h1 className="text-5xl mb-5 sm:mb-0 md:text-6xl font-bold ">
                Pelatihan
                </h1>
                <p className="font-extralight text-3xl sm:text-lg md:text-xl lg:text-4xl ">
                apa itu pelatihan dan untuk siapa. title bebas
                </p>
            </div>
            </>
        }
        secondElement=""
        >
            <main className="px-5 lg:px-24">
                <Teks />
                <Card prefixLink="pelatihan" />
                <Teks2 />
                <Sosmed />
                <Teks3 />
                <Compslid />
            </main>
        </LayoutWithBanner>
    );
};

export default pelatihan;
