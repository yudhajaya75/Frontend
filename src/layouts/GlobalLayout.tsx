import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import NewNavbar from "../components/navbar/newNavbar";

type props = {
  children: React.ReactNode;
  accountEmail: string;
};

const GlobalLayout = ({ children, accountEmail }: props) => {
  return (
    <div className="mx-auto max-w-[1710px]">
      <NewNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default GlobalLayout;
