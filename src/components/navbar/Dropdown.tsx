import { useEffect, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

type Props = {
  parentMenu?: React.ReactNode | string;
  menu: { pathName: string; url: string }[];
};

const Dropdown = ({ menu, parentMenu }: Props) => {
  const [active, setActive] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setActive(false);
  }, [width]);

  return (
    <div>
      <div className="flex gap-2 items-center">
        <span className="hover:text-[#8DA9C4] text-white md:text-black">
          {parentMenu}
        </span>
        {active ? (
          <AiOutlineCaretUp
            onClick={() => {
              setActive(!active);
            }}
          />
        ) : (
          <AiOutlineCaretDown
            onClick={() => {
              setActive(!active);
            }}
          />
        )}
      </div>
      <div
        className={`${
          active ? "md:absolute" : "hidden"
        } top-[72px] lg:w-56 bg-white z-[9999] py-8 px-6 grid gap-2 transition-all duration-150 shadow-md rounded-md`}
      >
        {menu &&
          menu.map((value, index_) => {
            return (
              <Link
                to={value.url}
                key={index_}
                className="block hover:text-[#074288]"
              >
                {value.pathName}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;
