import { useEffect, useState } from "react";
import { ArticlePopular } from "../@types/ArticlePopular";

function useArticlePopularData() {
  const [popular, setPopular] = useState<ArticlePopular[]>();
  const [loadings, setLoadings] = useState(true);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/articel-cards?populate=*&sort[0]=eye:desc`,
      {
        method: "GET",
        headers: {
          Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPopular(data.data);
        setTimeout(() => setLoadings(false), 4000);
      });
  }, []);

  return {
    popular,
    loadings,
  };
}

export default useArticlePopularData;
