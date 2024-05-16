import { useState } from "react";
import list from "./list.json";
import listprofile from "./listprofile.json";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useGetLogoutData from "../../hooks/useGetLogoutData";

const Navbar = ({ accountEmail }: { accountEmail: string }) => {
    const username = localStorage.getItem("user");
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUp, setIsOpenUp] = useState(false);
    const location = useLocation();
    const { logout } = useGetLogoutData();
    const router = useNavigate();
    const toggleMenu = () => {
        setIsOpenUp((prev) => !prev);
    };

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const isActive = (path: string) => {
        return location.pathname === path ? "text-[#074288]" : "text-black";
    };

    let menu: JSX.Element;

    if (username === null) {
        menu = (
            <div>
                <div style={{ marginTop: 20 }}>
                    <a href="/login" className="buttonmasuk">
                        Masuk
                    </a>
                </div>
            </div>
        );
    } else {
        menu = (
            <>
                <div className="relative inline-block text-left left-[100px] bottom-1">
                    <a
                        href="#"
                        onClick={toggleMenu}
                        className="teksnav1"
                        style={{ color: "#000", fontWeight: "bold", fontSize: "20px" }}
                    >
                        {/* <img src="./images/profile.png" alt="" /> */}
                        <li>{username}</li>
                        <li style={{ marginLeft: 10 }}>
                            {isOpenUp ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                        </li>
                    </a>
                    {isOpenUp && (
                        <div className="bg-[#FFFFFF] absolute ml-[0px] top-[60px] flex flex-col items-start rounded-lg p-2">
                            {listprofile.map((item, i) => (
                                <div
                                    className="w-[150px] justify-between text-[#074288] p-4 
                            hover:bg-blue-300 cursor-pointer rounded-lg border-l-transparent 
                            hover:border-l-white"
                                    key={i}
                                >
                                    <Link
                                        to="/profile"
                                        onClick={() => {
                                            router("/profile");
                                        }}
                                    >
                                        <h3 className="font-bold">{item.myprofile}</h3>
                                    </Link>
                                    <a href="/login" onClick={logout}>
                                        <h3 className="font-bold">{item.logout}</h3>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </>
        );
    }

    return (
        <div className="navbar">
            <h1 className="logo">
                <a href="/home">
                    <img src="http://localhost:3000/images/Logo.webp" alt="" />
                </a>
            </h1>
            <ul className="listnav">
                <a href="/home">
                    <li className={`teksnav ${isActive("/home")}`}>Home</li>
                </a>
                <div>
                    <a
                        href="#"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="teksnav1"
                        style={{ color: "#4B4B4B" }}
                    >
                        <li className={isActive("/layanan")}>Layanan</li>
                        <li style={{ marginLeft: 10 }}>
                            {isOpen ? (
                                <AiOutlineCaretUp />
                            ) : (
                                <AiOutlineCaretDown />
                            )}
                        </li>
                    </a>
                    {isOpen && (
                        <div className="bg-[#FFFFFF] absolute ml-12 top-20 flex flex-col items-start rounded-lg p-2">
                            {list.map((item, i) => (
                                <div
                                    className="w-[239px] justify-between text-[#074288] p-4 hover:bg-blue-300 cursor-pointer rounded-lg border-l-transparent hover:border-l-white"
                                    key={i}
                                >
                                    <a href="webinar">
                                        <h3 className="font-bold">{item.webinar}</h3>
                                    </a>
                                    <a href="pelatihan">
                                        <h3 className="font-bold">{item.pelatihan}</h3>
                                    </a>
                                    <a href="layanan">
                                        <h3 className="font-bold">{item.layanan}</h3>
                                    </a>
                                    <a href="konsultasi">
                                        <h3 className="font-bold">{item.konsultasi}</h3>
                                    </a>
                                    <a href="paket">
                                        <h3 className="font-bold">{item.paket}</h3>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <a href="/blog">
                    <li className={`teksnav2 ${isActive("/blog")}`}>Blog</li>
                </a>
                <a href="/about">
                    <li className={`teksnav2 ${isActive("/about")}`}>About Us</li>
                </a>
                <a href="/contact">
                    <li className={`teksnav2 ${isActive("/contact")}`}>Contact Us</li>
                </a>
                <div style={{ marginBottom: -30 }}>{menu}</div>
            </ul>
            <div onClick={handleNav} className="block md:hidden ">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? "nav" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl font-bold mt-3">
                    <img src="/images/Logo.webp" alt="" />
                </h1>
                <ul className="uppercase p-4 mt-10">
                    <a href="/home">
                        <li className="p-4 border-b">Home</li>
                    </a>
                    <a href="#" onClick={() => setIsOpen((prev) => !prev)}>
                        <li className="p-4 border-b">Layanan</li>
                        <li style={{ position: "relative", left: 210, bottom: 35 }}>
                            {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                        </li>
                    </a>
                    {isOpen && (
                        <div className="bg-[#FFFFFF]  absolute top-[220px] left-[-1px] flex flex-col items-start rounded-lg">
                            {list.map((item, i) => (
                                <div
                                    className="w-[210px] justify-between 
                           p-4 hover:bg-blue-300 cursor-pointer rounded-lg text-[#074288]  
                           border-l-transparent "
                                    key={i}
                                >
                                    <a href="webinar">
                                        <h3 className="font-bold">{item.webinar}</h3>
                                    </a>
                                    <a href="pelatihan">
                                        <h3 className="font-bold">{item.pelatihan}</h3>
                                    </a>
                                    <a href="layanan">
                                        <h3 className="font-bold">{item.layanan}</h3>
                                    </a>
                                    <a href="konsultasi">
                                        <h3 className="font-bold">{item.konsultasi}</h3>
                                    </a>
                                    <a href="paket">
                                        <h3 className="font-bold">{item.paket}</h3>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                    <a href="/blog">
                        <li className="p-4 border-b">Blog</li>
                    </a>
                    <a href="/about">
                        <li className="p-4 border-b">About Us</li>
                    </a>
                    <a href="/contact">
                        <li className="p-4 border-b">Contact Us</li>
                    </a>
                    <div className="- mt-10 -ml-[140px] text-[#074288]">{menu}</div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;