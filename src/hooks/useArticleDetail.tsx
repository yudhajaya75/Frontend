import { useState, useEffect } from "react";
import { HTTPAruna } from "../services/handlerApi";
import { Article } from "../@types/Article";

const useArticleDetail = (slug: string) => {
  const [content, setContent] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);

  if (!slug) console.log("Please provide a slug");

  useEffect(() => {
    HTTPAruna.get(
      `/api/articel-cards?populate=*&filters[slug][$eq]=${slug}`
    ).then((response) => {
      const datas: Article = response.data.data[0];
      if (datas) {
        setContent(datas);
        setLoading(false);
      } else {
        setLoading(false);
        console.log("ERROR", __dirname);
      }
      console.log(datas, "FROM DATA");
    });
  }, [slug]);

  return { content, loading };
};

export default useArticleDetail;
