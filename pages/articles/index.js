import { useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Link from "next/link";
import CircularProgress from "@material-ui/core/CircularProgress";
import firestore from "../../firebase/firebase";
import { getArticles } from "../../firebase/api";
import style from "../../styles/Articles.module.css";

const Articles = ({ data }) => {
  const [articles, setArticles] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [category, setCategory] = useState("all");
  const [lastArticle, setLastArticle] = useState(null);
  const [buttonState, setButtonState] = useState(false);
  useEffect(() => {
    setButtonState(true);
    setLoadingState(true);
    setLastArticle(null);
    const articlesList = [];
    let query;
    if (category === "all") query = firestore.collection("articles");
    else
      query = firestore
        .collection("articles")
        .where("category", "==", category);
    query
      .orderBy("publishedDate", "desc")
      .limit(5)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          articlesList.push({ ...{ id: doc.id }, ...doc.data() });
        });
        setLastArticle(querySnapshot.docs[querySnapshot.docs.length - 1]);
        if (querySnapshot.docs.length > 0) setButtonState(false);
      })
      .then(() => {
        setArticles(articlesList);
        console.log("Fetching...");
        if (articlesList) {
          setLoadingState(false);
        }
      });
  }, [category]);

  const next = (lastArticle) => {
    const articlesList = [];
    let query;
    if (category === "all") query = firestore.collection("articles");
    else
      query = firestore
        .collection("articles")
        .where("category", "==", category);
    query
      .orderBy("publishedDate", "desc")
      .startAfter(lastArticle)
      .limit(5)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          articlesList.push({ ...{ id: doc.id }, ...doc.data() });
        });
        setLastArticle(querySnapshot.docs[querySnapshot.docs.length - 1]);
        console.log(querySnapshot.docs[querySnapshot.docs.length - 1]);
        if (querySnapshot.empty) {
          setButtonState(true);
        }
      })
      .then(() => {
        setArticles((prevState) => prevState.concat(articlesList));
        console.log("Fetching...");
      });
  };
  return (
    <div className={style.articles}>
      <Typography className={style.title}>Articles</Typography>
      <ul className={style.menu}>
        <li onClick={() => setCategory("all")}>
          <Typography
            className={category === "all" ? style.selected : style.menuItem}
          >
            ALL
          </Typography>
        </li>
        <li onClick={() => setCategory("news")}>
          <Typography
            className={category === "news" ? style.selected : style.menuItem}
          >
            NEWS
          </Typography>
        </li>
        <li onClick={() => setCategory("events")}>
          <Typography
            className={category === "events" ? style.selected : style.menuItem}
          >
            EVENTS
          </Typography>
        </li>
        <li onClick={() => setCategory("word")}>
          <Typography
            className={category === "word" ? style.selected : style.menuItem}
          >
            WORD
          </Typography>
        </li>
      </ul>
      <div className={style.articlesContainer}>
        {loadingState ? (
          <CircularProgress />
        ) : (
          articles?.map((data) => (
            <Link href={`/articles/${data.id}`} key={data.id} >
              <a target="_blank" rel="noreferrer">
                <ArticleCard data={data} />
              </a>
            </Link>
          ))
        )}
      </div>
      <Button
        disabled={buttonState}
        size="large"
        variant="outlined"
        color="secondary"
        onClick={() => next(lastArticle)}
      >
        Load More
      </Button>
    </div>
  );
};

export default Articles;

// export async function getStaticProps(){
//   let res = await getArticles();
//   let data = JSON.parse(res);
//   return{
//     props:{
//       data
//     },
//     revalidate: 1800
//   }
// }
