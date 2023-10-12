import "react-multi-carousel/lib/styles.css";
import Teks2 from "../../components/teks/teks-kata-mereka";
import Sosmed from "../../components/sosmed/Desktop";
import Card from "../../components/card/card";
import LayoutWithBanner from "../../layouts/LayoutWithBanner";
import Compslid from "../../components/compslid/compslid";
import Heading from "../../components/global/Heading";

const layanan = (props: { email: string }) => {
  return (
    <LayoutWithBanner
      bgImage={"bg-Layanan"}
      accountEmail={props.email}
      firstElement={
        <>
          <div className=" text-center -ml-10 md:text-left md:ml-0 p-5 grid gap-6 text-slate-50">
            <h1 className="text-5xl mb-5 sm:mb-0 md:text-6xl font-bold ">
              Layanan konseling individu pasangan & keluarga
            </h1>
            <p className="font-extralight text-3xl sm:text-lg md:text-xl lg:text-4xl">
              apa itu Layanan Konseling individu pasangan & keluarga dan untuk
              siapa. title bebas
            </p>{" "}
          </div>
        </>
      }
      secondElement=""
    >
      <main className="px-5 lg:px-24 py-20">
        <Heading customClass="text-start pb-5">
          Layanan konseling individu pasangan & keluarga
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit
          iure asperiores quaerat rerum earum assumenda deleniti delectus nam
          excepturi.
        </p>
        <Card type="Layanan" prefixLink="layanan" />
        <Teks2 />
        <Sosmed />
        <Heading customClass="py-10">Kerjasama Kami</Heading>
        <Compslid />
      </main>
    </LayoutWithBanner>
  );
};

export default layanan;
