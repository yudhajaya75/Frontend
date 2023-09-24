import Content from "../../components/content/content2";
import Content2 from "../../components/content/content3";
import GlobalLayout from "../../layouts/GlobalLayout";

const Profile = (props: { email: string }) => {
  const userEmail = localStorage.getItem("email");

  return (
    <>
      <GlobalLayout>
        <Content2 accountEmail={userEmail || ""} />
        <Content />
      </GlobalLayout>
    </>
  );
};

export default Profile;
