<<<<<<< HEAD
import CardComponent from './cardComponent';
import { Skeleton } from '@mui/material';
import useCardPelatihan from '../../hooks/useCardPelatihan';

const CardPelatihan = () => {
    const { content, loading } = useCardPelatihan()

    return (
        <>
            <div className='flex flex-wrap justify-center gap-10 mt-20 ml-14'>
                {loading ? (
                    <div className="flex justify-evenly flex-wrap gap-10 mt-[50px]">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="w-[400px] sm:w-[500px] md:w-[600px] shadow-lg rounded-md">
                                <Skeleton variant="rectangular" width={600} height={180} />
                                <div className="w-full p-6">
                                    <Skeleton variant="text" width={500} height={32} />
                                    <Skeleton variant="text" width={550} height={72} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px] z-50 sm-440:pr-14 lg:pr-0">
                        {content.map((res: any, index: number) => (
                            <CardComponent
                                key={index}
                                id={res.id}
                                title={res.attributes.title}
                                price={res.price ? res.price : ''}
                                body={res.attributes.body}
                                image={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
                                slug={res.attributes.slug}
                                link='webinardetail'
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
export default CardPelatihan;
=======
import CardComponent from "./cardComponent";
import { Skeleton } from "@mui/material";
import useCardPelatihan from "../../hooks/useCardPelatihan";
import ButtonPagination from "../button/ButtonPagination";

type Props = {
  type?: "Pelatihan" | "Konseling" | "Konsultasi" | "Webinar";
  prefixLink?: string;
};

const Card = ({ type, prefixLink }: Props) => {
  const {
    content,
    loading,
    currentPage,
    paginationMeta,
    handleNextClick,
    handlePrevClick,
  } = useCardPelatihan(type, 1, 4);

  const showPagination =
    paginationMeta?.pageCount && paginationMeta?.pageCount > 1;

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
                link={prefixLink ? prefixLink : "training"}
              />
            ))
          ) : (
            <p>Error while fetching data :0</p>
          )}
        </div>
      )}
      {showPagination && (
        <div className="flex justify-start ml-10 md:ml-20 mt-8 md:mt-14">
          <ButtonPagination
            handlePrev={handlePrevClick}
            handleNext={handleNextClick}
            page={currentPage}
            totalPages={paginationMeta?.pageCount || 0}
          />
        </div>
      )}
    </div>
  );
};
export default Card;
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e
