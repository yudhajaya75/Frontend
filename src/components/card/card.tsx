import CardComponent from "./cardComponent";
import { Skeleton } from "@mui/material";
import useCardPelatihan from "../../hooks/useCardPelatihan";

const Card = () => {
  const { content, loading } = useCardPelatihan();

  return (
    <>
      <div className="">
        {loading ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 ">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-full shadow-lg rounded-md"
              >
                <Skeleton variant="rectangular" className='w-full'height={180} />
                <div className="w-full p-6">
                  <Skeleton variant="text" className='w-full' height={32} />
                  <Skeleton variant="text" className='w-full' height={72} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 p-2 md:p-32 ">
            {content.map((res: any, index: number) => (
              <CardComponent
                key={index}
                id={res.id}
                title={res.attributes.title}
                price={res.price ? res.price : ""}
                body={res.attributes.body}
                image={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
                slug={res.attributes.slug}
                link="webinardetail"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Card;
