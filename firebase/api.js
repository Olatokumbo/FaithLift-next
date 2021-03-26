import firestore from "./firebase";

export const latestMovies = () => {
  const movieList = [];
  return firestore
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
    });
};
