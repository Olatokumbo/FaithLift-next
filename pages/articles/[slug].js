import { Typography } from "@material-ui/core";
const { format } = require("date-fns");
import style from "../../styles/ArticleInfo.module.css";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const ArticleInfo = ({ article }) => {
  return (
    <div className={style.article}>
      <div className={style.articleInfo}>
        <div className={style.banner}>
          <img
            className={style.bannerPhoto}
            src={`https:${article?.fields?.poster?.fields?.file.url}`}
            alt="banner"
          />
        </div>
        <div className={style.mainArticle}>
          <div className={style.articleHeader}>
            <Typography className={style.articleTitle}>
              {article?.fields?.title}
            </Typography>
            <Typography className={style.articleDate}>
              Published Date:{" "}
              {format(
                new Date(article?.fields?.publishedDate),
                "MMMM dd, yyyy"
              )}
            </Typography>
          </div>
          <div className={style.articleContent}>
            {/* {article?.message?.map((message, index) => (
              <Typography key={index} className={style.articleParagraph}>
                {message}
              </Typography>
            ))} */}
            <div>{documentToReactComponents(article?.fields?.message)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInfo;

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "article",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });

  if (items.length < 1) {
    return {
      notFound: true,
    };
  }
  return {
    props: { article: items[0] },
    revalidate: 10,
  };
};
