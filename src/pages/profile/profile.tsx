import Navbar from "../../components/navbar/navbar";
import Content from "../../components/content/content2";
import Content2 from "../../components/content/content3";
import Footer from "../../components/footer/footer";
import GlobalLayout from "../../layouts/GlobalLayout";

const Profile = (props: { email: string }) => {
  const userEmail = localStorage.getItem("email");
  const user = localStorage.getItem("user");
  return (
    <>
      <GlobalLayout accountEmail={user || ""}>
        <Content2 accountEmail={userEmail || ""} />
        <Content />
      </GlobalLayout>
    </>
  );
};

export default Profile;
