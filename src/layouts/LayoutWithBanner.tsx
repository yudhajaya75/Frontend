import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import GlobalBanner from "../components/banner/banner-v2/GlobalBanner";

type props = {
  bgImage: string;
  children: React.ReactNode;
  accountEmail: string;
  firstElement: React.ReactNode;
  secondElement: React.ReactNode;
};

const LayoutWithBanner = ({
  children,
  accountEmail,
  bgImage,
  firstElement,
  secondElement,
}: props) => {
  return (
    <div className="mx-auto max-w-[1710px]">
      <Navbar accountEmail={accountEmail} />
      <GlobalBanner
        bgImage={bgImage}
        firstElement={firstElement}
        secondElement={secondElement}
      />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWithBanner;
