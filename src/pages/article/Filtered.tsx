import useArticle from "../../hooks/useArticle";
import GlobalLayout from "../../layouts/GlobalLayout";
import CardSkeleton from "../../components/card/CardSkeleton";
import ArticleCard from "./ArticleCard";
import Heading from "../../components/global/Heading";

type Props = {
  type: "Popular" | "Newest";
};

const Filtered = ({ type }: Props) => {
  const { content, loading } = useArticle(
    type === "Popular" ? "Popular" : "Newest"
  );

  return (
    <GlobalLayout>
      <main className="px-5 lg:px-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Heading customClass="md:col-span-2 lg:col-span-3 py-[69px]">
          Result for {type} Article
        </Heading>
        {loading
          ? [...Array(5)].map((val) => {
              return <CardSkeleton key={val} />;
            })
          : content
          ? content.data.map((article, index) => {
              return (
                <ArticleCard
                  banner={article.attributes.image.data.attributes.url}
                  url={"/article/" + article.attributes.slug}
                  key={index}
                  viewCount={article.attributes.eye}
                  body={article.attributes.body}
                  date={new Date(article.attributes.createdAt)}
                  title={article.attributes.title}
                />
              );
            })
          : "No Article"}
      </main>
    </GlobalLayout>
  );
};

export default Filtered;
