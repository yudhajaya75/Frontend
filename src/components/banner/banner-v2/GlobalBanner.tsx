import "swiper/swiper-bundle.min.css";
import useBanHome from "../../../hooks/useBanHome";
import { Skeleton } from "@mui/material";

type Props = {
  bgImage: string;
  firstElement?: React.ReactNode;
  secondElement?: React.ReactNode;
};

const GlobalBanner = ({
  bgImage = "bg-heroPattern",
  firstElement,
  secondElement,
}: Props) => {
  const { banner, sliderhome, loading } = useBanHome();

  if (!banner && !banner) return <div>No data</div>;
  if (!sliderhome && !sliderhome) return <div>No data</div>;

  if (loading)
    return (
      <div>
        <Skeleton variant="rectangular" width={"100%"} height={750} />
      </div>
    );

  return (
    <div
      className={`h-[725px] ${bgImage} bg-cover bg-center flex-col-reverse flex md:flex-row justify-evenly md:items-center gap-10`}
    >
      <div className="lg:w-2/4 lg:mt-0 ml-10 lg:ml-20 xl:ml-[184px] lg:pr-12 xl:pr-14">
        <div className="h-full lg:flex flex-col gap-8">{firstElement}</div>
      </div>

      <div className="sm:mr-10 md:w-2/4 md:h-auto">{secondElement}</div>
    </div>
  );
};

export default GlobalBanner;
