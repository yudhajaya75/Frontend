import { useEffect, useState } from 'react'
import { ArticleResponse } from '../@types/Article';
import { HTTPAruna } from '../services/handlerApi';

const useArticle = (query?: "Popular" | "Newest") => {
  const [content, setContent] = useState<ArticleResponse | null>(null);
  const [loading, setLoading] = useState(false);
  let strapiQuery: string;

  switch (query) {
    case "Newest":
      strapiQuery = "/articel-cards?sort=createdAt:desc&populate=*"
      break;
    case "Popular":
      strapiQuery = "/articel-cards?sort=eye:desc&populate=*"
      break;
    default:
      strapiQuery = "/articel-cards?populate=*"
      break;
  }

  useEffect(() => {
    HTTPAruna.get("api" + strapiQuery).then((response) => {
      const datas: ArticleResponse = response.data;
      if (datas) {
        setContent(datas);
        setLoading(false);
      } else {
        setLoading(false);
        console.log("ERROR", __dirname)
      }
      console.log(datas, "FROM DATA");
    });
  }, [query]);

  return { content, loading }
}

export default useArticle