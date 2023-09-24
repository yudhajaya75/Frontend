import { Link } from "react-router-dom";
import Heading from "../../components/global/Heading";
import GlobalLayout from "../../layouts/GlobalLayout";
import ArticleCard from "./ArticleCard";
import useArticle from "../../hooks/useArticle";
import CardSkeleton from "../../components/card/CardSkeleton";

const ArticlePage = () => {
  const newestArticle = useArticle("Newest").content;
  const defaultArticle = useArticle().content;
  const popularArticle = useArticle("Popular").content;

  return (
    <GlobalLayout>
      <main className="px-5 lg:px-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-[69px]">
        <section>
          <div className="flex justify-between items-center pb-10">
            <Heading customClass="text-start">Berita Terbaru</Heading>
            <Link to="/article/newest">See More...</Link>
          </div>
          <div className="grid gap-5">
            {newestArticle
              ? newestArticle.data.map((article, index) => {
                  return (
                    <ArticleCard
                      banner={article.attributes.image.data.attributes.url}
                      url={article.attributes.slug}
                      key={index}
                      viewCount={article.attributes.eye}
                      body={article.attributes.body}
                      date={article.attributes.createdAt}
                      title={article.attributes.title}
                    />
                  );
                })
              : [...Array(5)].map((value) => {
                  return <CardSkeleton key={value} />;
                })}
          </div>
        </section>
        <section>
          <Heading customClass="text-start pb-10">Kategori Terbaru</Heading>
          <div className="flex flex-col gap-y-2">
            {defaultArticle
              ? defaultArticle.data.map((value, index) => {
                  return (
                    <ArticleCard
                      key={index}
                      version="plain"
                      title={value.attributes.title}
                      date={value.attributes.createdAt}
                      url={value.attributes.slug}
                    />
                  );
                })
              : [...Array(5)].map((val) => {
                  return <CardSkeleton key={val} />;
                })}
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center pb-10">
            <Heading customClass="text-start">Postingan Terpopuler</Heading>
            <Link to="/article/popular" className="whitespace-nowrap">
              See More...
            </Link>
          </div>
          <div className="grid gap-5">
            {popularArticle
              ? popularArticle.data.map((article, index) => {
                  return (
                    <ArticleCard
                      banner={article.attributes.image.data.attributes.url}
                      url={article.attributes.slug}
                      key={index}
                      viewCount={article.attributes.eye}
                      body={article.attributes.body}
                      date={article.attributes.createdAt}
                      title={article.attributes.title}
                    />
                  );
                })
              : [...Array(5)].map((value) => {
                  return <CardSkeleton key={value} />;
                })}
          </div>
        </section>
      </main>
    </GlobalLayout>
  );
};

export default ArticlePage;