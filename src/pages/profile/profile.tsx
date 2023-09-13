import Navbar from '../../components/navbar/navbar'
import Content from '../../components/content/content2'
import Content2 from '../../components/content/content3'
import Footer from '../../components/footer/footer'

const Profile = (props: { email: string }) => {
    return (
        <>
            <div className='mx-auto max-w-[1910px] relative'>
                <Navbar accountEmail={props.email} />
                <Content2 accountEmail={props.email} />
                <Content />
                <Footer />
            </div>
        </>
    )
}

export default Profile