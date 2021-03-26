import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
// import { firestore } from "../../firebase/firebase";
import moment from "moment";
import {useRouter} from "next/router";
import style from "../../styles/ArticleInfo.module.css";

const ArticleInfo = () => {
    const router = useRouter(); 
    const {articleId} = router.query;
    console.log(articleId);
  const [article, setArticle] = useState(null);
      return (
        <div className={style.article}>
          <div className={style.articleInfo}>
            <div className={style.banner}>
              <img className={style.bannerPhoto} src={article?.poster} alt="banner" />
            </div>
            <div className={style.mainArticle}>
              <div className={style.articleHeader}>
                <Typography className={style.articleTitle}>
                  {article?.title}
                </Typography>
                <Typography className={style.articleDate}>
                  Published Date:{" "}
                  {moment(article?.publishedDate.toDate()).format("MM/DD/YYYY")}
                </Typography>
              </div>
              <div className={style.articleContent}>
                {article?.message.map((message, index) => (
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
