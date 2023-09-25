import Card from "../../components/card/cardwebminar";
import Teks3 from "../../components/teks/teks-webminar2";
import LayoutWithBanner from "../../layouts/LayoutWithBanner";

const Webinar = (props: { email: string }) => {
  return (
    <div className="max-w-[1710px] mx-auto">
      <LayoutWithBanner
        bgImage={"bg-Webinar"}
        accountEmail={props.email}
        firstElement={
          <>
            <div className=" text-center -ml-10 md:text-left md:ml-0 p-5 grid gap-6 ">
              <h1 className="text-5xl mb-5 sm:mb-0 md:text-3xl font-bold text-[#002157]">
                Webinar
              </h1>
              <p className="font-extralight text-2xl sm:text-lg md:text-xl lg:text-3xl text-[#5B5B5B]">
                apa itu Webinar dan untuk siapa. title bebas
              </p>
            </div>
          </>
        }
        secondElement=""
      >
        <Card />
        <Teks3 />
      </LayoutWithBanner>
    </div>
  );
};

export default Webinar;
