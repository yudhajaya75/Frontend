import Navbar from '../../components/navbar/navwebinar'
import Teks4 from "../../components/teks/teks-webinar5"
import Teks3 from '../../components/teks/teks-kata-mereka'
import Sosmed from '../../components/sosmed/Founding'
import Footer from '../../components/footer/footwebminar'
import Banner from '../../components/banner/banwebminar3'
import TextDescComponent from '../../components/teks/TextDescComponent'
import TextHeadingComponent from '../../components/teks/TextHeadingComponent'
import ButtonWa from '../../components/button/ButtonWa'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Webinar = (props: { email: string }) => {
    const [content, setContent] = useState<any>([])
    const url = 'http://localhost:4001/product';
    useEffect(() => {
        axios.get(url).then((response) => {
            setContent(response.data.data);
        })
    }, [])

    console.log(content);
    const { slug } = useParams()
    const webinar: any = content?.filter((item: any) => item.slug == slug)[0];

    return (
        <div className='mx-auto max-w-[1724px] relative'>
            {/* <Navbar accountEmail={props.email} /> */}
            <Teks4 title={webinar?.title} />
            <Banner
                image={webinar?.image} />
            <div className='flex justify-center flex-col gap-y-10 my-20'>
                <TextHeadingComponent
                    heading={webinar?.title}
                />
                <ButtonWa />
            </div>
            <TextDescComponent
                title='webinar ini !'
                body={webinar?.body}
            />

            <Teks3 />
            <Sosmed />
            <Footer />
        </div>
    )
}

export default Webinar