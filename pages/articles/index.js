import { Typography, Button } from "@material-ui/core";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Link from "next/link";
import { createClient } from "contentful";
import style from "../../styles/Articles.module.css";

const Articles = ({ articles }) => {
  return (
    <div className={style.articles}>
      <Typography className={style.title}>Articles</Typography>
      <div className={style.articlesContainer}>
        {articles?.map((data) => (
          <Link href={`/articles/${data.fields.slug}`} key={data.id}>
            <a rel="noreferrer">
              <ArticleCard data={data} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const response = await client.getEntries({
    content_type: "article",
    order: "-sys.createdAt",
  });
  return {
    props: {
      articles: response.items,
    },
    revalidate: 1,
  };
};
