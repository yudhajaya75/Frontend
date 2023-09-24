// import Disc from "../../components/disc/disc";
import Purchase from "../../components/purchase/purchasePaket";
import usePaket from "../../hooks/usePaket";
import GlobalLayout from "../../layouts/GlobalLayout";
import Heading from "../../components/global/Heading";

const Paket = (props: { email: string }) => {
    const { paket } = usePaket();

    if (!paket) return <div>No Data</div>;

    return (
        <GlobalLayout>
            <Heading customClass="mt-16">Semua layanan konseling satir</Heading>
            <p className="text-center mb-20">Temukan layanan Satu Persen yang sesuai untuk kamu.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 lg:px-14">
                {paket &&
                    paket
                    .slice(0, 3)
                    .map((res, index) => (
                        <Purchase
                            accountEmail={props.email}
                            key={index}
                            title={res.attributes.title}
                            content={res.attributes.content}
                            price={res.attributes.price}
                            feature={res.attributes.features}
                            isPopular={res.attributes.isPopuler}
                            id={res.id}
                        />
                    ))}
            </div>
            <div className="bg-[#efefef] absolute top-0 right-0 bottom-0 left-0 h-[90%] -z-10"></div>
        </GlobalLayout>
    );
};

export default Paket;
