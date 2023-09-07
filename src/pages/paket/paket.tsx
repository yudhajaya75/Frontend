import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Teks from "../../components/teks/paket";
import Background from "../../components/background/background";
import Disc from "../../components/disc/disc";
import Footer from "../../components/footer/footer";
import Purchase from "../../components/purchase/purchasePaket";
import axios from "axios";

const Paket = (props: { email: string }) => {
    const [content, setContent] = useState<any>()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/product-variants/?populate=*`)
            .then((response) => {
                setContent(response.data.data);
                console.log(response.data.data);
            })
    }, []);
    console.log(content)

    return (
        <>
            <div className='mx-auto max-w-[1800px] relative'>
                <Navbar accountEmail={props.email} />
                <div className="bg-[#efefef] relative h-[100px]">
                    <Background />
                </div>
                <div className="relative bottom-[70px]">
                    <Teks />
                    <div className='flex justify-evenly flex-wrap gap-10 mx-20 relative mt-[100px] right-[100px]'>
                        {content?.slice(0, 3).map((res: any, index: number) => (
                            <Purchase
                                accountEmail={props.email}
                                key={index}
                                title={res.attributes.title}
                                content={res.attributes.content}
                                price={res.attributes.price}
                                features={res.attributes.features}
                                isPopular={res.attributes.isPopuler}
                                id={res.id}
                            />
                        ))}
                    </div>
                </div>
                <div className="relative bottom-[0px]">
                    <Disc />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Paket;
