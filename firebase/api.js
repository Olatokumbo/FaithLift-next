import firestore from "./firebase";

export const latestMovies = () => {
  const movieList = [];
  return (
    firestore
      .collection("movies")
      // .orderBy("releasedDate", "asc")
      .limit(2)
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          movieList.push({ id: doc.id, ...doc.data() });
        });
      })
      .then(() => {
        return JSON.stringify(movieList);
      })
  );
};

export const getArticles = () => {
  const articlesList = [];
  let query = firestore.collection("articles");
  return query
    .orderBy("publishedDate", "desc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        articlesList.push({ ...{ id: doc.id }, ...doc.data() });
      });
    })
    .then(() => {
      return articlesList;
    });
};
export const getArticleInfo = (articleId) =>{
  return firestore
      .collection("articles")
      .doc(articleId)
      .get()
      .then((snapshot) => {
        return JSON.stringify(snapshot.data());
      })
      .catch((err) => JSON.stringify(Error(err.message)));
}
export const getMovies = () => {
  const moviesList = [];
  let poster = {};
  return firestore
    .collection("movies")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id !== "poster")
          moviesList.push({ ...{ id: doc.id }, ...doc.data() });
        else poster = { id: doc.id, ...doc.data() };
      });
    })
    .then(() => {
      const data = { moviesList, poster };
      return JSON.stringify(data);
    });
};

export const getMovieList = () => {
  const moviesList = [];
  return firestore
    .collection("movies")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id !== "poster")
          moviesList.push({ ...{ id: doc.id }, ...doc.data() });
      });
    })
    .then(() => {
      return JSON.stringify(moviesList);
    });
};

export const getMovieInfo = (movieId) => {
  return firestore
    .collection("movies")
    .doc(movieId)
    .get()
    .then((snapshot) => {
    return JSON.stringify(snapshot.data());
    })
    .catch((err) => JSON.stringify(Error(err.message)));
};

