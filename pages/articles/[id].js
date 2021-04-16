import { Typography } from "@material-ui/core";
import { getArticleInfo, getArticles } from "../../firebase/api";
const { format } = require("date-fns");
import style from "../../styles/ArticleInfo.module.css";

const ArticleInfo = ({ article }) => {
  return (
    <div className={style.article}>
      <div className={style.articleInfo}>
        <div className={style.banner}>
          <img
            className={style.bannerPhoto}
            src={article?.poster}
            alt="banner"
          />
        </div>
        <div className={style.mainArticle}>
          <div className={style.articleHeader}>
            <Typography className={style.articleTitle}>
              {article?.title}
            </Typography>
            <Typography className={style.articleDate}>
              Published Date: {" "}
              {format(new Date(article?.publishedDate.seconds*1000), "MMM dd, yyyy")}
            </Typography>
          </div>
          <div className={style.articleContent}>
            {article?.message?.map((message, index) => (
              <Typography key={index} className={style.articleParagraph}>
                {message}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInfo;

export async function getStaticProps({ params }) {
  let res = await getArticleInfo(params.id);
  if (!res) {
    return { notFound: true };
  }
  let article = JSON.parse(res);
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const res = await getArticles();
  const articles = res;
  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));
  console.log(paths);

  return { paths, fallback: "blocking" };
}
