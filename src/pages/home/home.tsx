import Banner from "../../components/banner/bnhome";
import Teks from "../../components/teks/teks-kata-mereka";
import Card from "../../components/card/cardhome";
import Icons from "../../components/iconshome/iconshome";
import Sosmed from "../../components/sosmed/Founding";
import Youtube from "../../components/youtube/youtube";
import Article2 from "../../components/articlehome/article2";
import Questions from "../../components/questions/questions";
import GlobalLayout from "../../layouts/GlobalLayout";
import AboutCard from "../../components/card/about-card";

const Home = (props: { email: string }) => {
  return (
    <GlobalLayout accountEmail={props.email}>
      <Banner />
      <AboutCard />
      <Card />
      <Icons />
      <div className="mt-20">
        <Teks />
      </div>
      <Sosmed />
      <Youtube />
      <Article2 />
      <Questions />
    </GlobalLayout>
  );
};

export default Home;
