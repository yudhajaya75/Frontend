<<<<<<< HEAD
import Navbar from '../../components/navbar/navbar';
import Teks from '../../components/teks/contactus';
import Teks2 from '../../components/teks/contactus2';
import ContactUs from '../../components/contact/contact';
import Footer from '../../components/footer/footer';
=======
import ContactUs from "../../components/contact/contact";
import Heading from "../../components/global/Heading";
import Text from "../../components/global/Text";
import GlobalLayout from "../../layouts/GlobalLayout";
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e

const Home = (props: { email: string }) => {
    return (
        <GlobalLayout>
            <main className="px-5 lg:px-16">
                <Heading customClass="mt-16">Contact</Heading>
                <Text customClass="mb-16">Any question or remarks? Just write us a message!</Text>
                <ContactUs />
            </main>
        </GlobalLayout>
    );
};

export default Home;