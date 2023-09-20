import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children?: ReactNode;
  customClass?: string;
  url?: string;
};

const CLink = ({ url, children, customClass }: Props) => {
  return (
    <Link
      to={url ? url : "#"}
      className={`rounded-md bg-[#002157] py-2 px-4 lg:py-4 lg:px-8 font-bold text-white ${
        customClass && customClass
      }`}
    >
      {children}
    </Link>
  );
};

export default CLink;
