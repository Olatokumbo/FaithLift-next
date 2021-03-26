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

export const getArticles = (category) => {
  const articlesList = [];
  let query;
  if (category === "all") query = firestore.collection("articles");
  else
    query = firestore.collection("articles").where("category", "==", category);
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

export const getMovies = () => {
  const moviesList = [];
  let poster ={};
  return firestore
    .collection("movies")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id !== "poster")
          moviesList.push({ ...{ id: doc.id }, ...doc.data() });
        else poster={ id: doc.id, ...doc.data() };
      });
    })
    .then(() => {
      const data = {moviesList, poster};
      return JSON.stringify(data)
    });
};
