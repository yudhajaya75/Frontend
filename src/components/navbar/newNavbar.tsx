import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Image from "../global/Image";
import CLink from "../button/CLink";
import data from "./newNavbarList.json";
import Badge from "./Badge";
import Dropdown from "./Dropdown";
import useWindowSize from "../../hooks/useWindowSize";

const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const userName = localStorage.getItem("user");
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-[#074288] font-bold"
      : "text-black";
  };
  const { badgeList, menuList } = data;

  useEffect(() => {
    setMenuOpen(false);
  }, [width]);

  return (
    <nav
      className={`w-full ${
        menuOpen && "fixed flex flex-col h-screen w-screen bg-[#074188b0] z-50"
      } md:h-auto md:flex px-4 py-4 lg:px-0 justify-between lg:justify-around md:items-center md:py-8 md:bg-white`}
    >
      <Link to="/" className="flex w-full md:w-auto justify-between items-center">
        <Image
          alt="Logo Satir"
          src="images/Logo.webp"
          isExternal
          customClass="h-[55px]"
        />
        <div className="md:hidden">
          {menuOpen ? (
            <AiOutlineClose
              className={menuOpen ? "text-white" : ""}
              size={20}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          ) : (
            <AiOutlineMenu
              className={menuOpen ? "text-white" : ""}
              size={20}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          )}
        </div>
      </Link>
      <ul
        className={`w-full md:w-auto md:flex gap-1 md:gap-5 lg:gap-10 ${
          menuOpen ? "grid" : "hidden"
        }`}
      >
        {menuList.map((value, index) => {
          if (value.pathName === "Layanan")
            return <Dropdown menu={value.children!} parentMenu={"Layanan"} />;
          return (
            <Link
              key={index}
              to={value.url}
              className={`${isActive(value.url)} hover:text-[#074288]`}
            >
              {value.pathName}
            </Link>
          );
        })}
      </ul>
      <section className={`md:flex w-full md:w-fit ${menuOpen ? "flex" : "hidden"}`}>
        {userName ? (
          <Badge email={userName} menu={badgeList} />
        ) : (
          <CLink url="/login">Masuk</CLink>
        )}
      </section>
    </nav>
  );
};

export default NewNavbar;
