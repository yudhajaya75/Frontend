import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

type props = {
  children: React.ReactNode;
  accountEmail: string;
};

const GlobalLayout = ({ children, accountEmail }: props) => {
  return (
    <div className="mx-auto max-w-[1710px]">
      <Navbar accountEmail={accountEmail} />
      {children}
      <Footer />
    </div>
  );
};

export default GlobalLayout;
