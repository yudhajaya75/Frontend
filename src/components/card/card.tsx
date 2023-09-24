import CardComponent from "./cardComponent";
import { Skeleton } from "@mui/material";
import useCardPelatihan from "../../hooks/useCardPelatihan";

type Props = {
  type?: "Pelatihan" | "Layanan" | "Konsultasi" | "Webinar";
  prefixLink?: string
};

const Card = ({ type, prefixLink }: Props) => {
  const { content, loading } = useCardPelatihan(type);

  return (
    <div className="pt-40">
      {loading ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 ">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-full shadow-lg rounded-md">
              <Skeleton variant="rectangular" className="w-full" height={180} />
              <div className="w-full p-6">
                <Skeleton variant="text" className="w-full" height={32} />
                <Skeleton variant="text" className="w-full" height={72} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:px-16">
          {content ? (
            content.data.map((res, index: number) => (
              <CardComponent
                key={index}
                id={res.attributes.slug}
                title={res.attributes.title}
                price={
                  res.attributes.product_variants.data.length > 0
                    ? res.attributes.product_variants.data[0].attributes.price
                    : res.attributes.webinar.webinarPrice
                }
                body={res.attributes.body}
                image={res.attributes.image.data.attributes.url}
                slug={res.attributes.slug}
                link={prefixLink ? prefixLink : "training" }
              />
            ))
          ) : (
            <p>Error while fetching data :0</p>
          )}
        </div>
      )}
    </div>
  );
};
export default Card;
