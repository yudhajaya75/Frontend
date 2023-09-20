import Navbar from "../../components/navbar/navbar";
import ContactUs from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Heading from "../../components/global/Heading";
import Text from "../../components/global/Text";

const Home = (props: { email: string }) => {
    return (
        <div className="mx-auto max-w-[1910px]">
            <Navbar accountEmail={props.email} />
            <Heading>Contact</Heading>
            <Text>Any question or remarks? Just write us a message!</Text>
            <div className="-mt-[200px]">{/* <ContactUs /> */}</div>
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;
