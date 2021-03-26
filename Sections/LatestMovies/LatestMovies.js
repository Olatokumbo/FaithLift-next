import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { firestore } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import style from "./LatestMovies.module.css";
const LatestMovies = () => {
  const [latestMovies, setLatestMovies] = useState(null);
  useEffect(() => {
    const movieList = [];
    firestore
      .collection("movies")
      .orderBy("releasedDate", "asc")
      .limit(2)
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          movieList.push({ id: doc.id, ...doc.data() });
        });
      })
      .then(() => {
        setLatestMovies(movieList);
      });
  }, []);
  return (
    <div className={style.latestMovies}>
      <Typography className={style.header}>LATEST MOVIES</Typography>
      <div className={style.moviesContainer}>
       {latestMovies?.map((movie)=>{
         return (
          <div key={movie.id} className={style.movie}>
          <div className={style.content}>
            <Typography className={style.title}>{movie.name}</Typography>
            <Typography className={style.year}>{movie.year}</Typography>
            {/* <Typography className={style.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </Typography> */}
            <Link to={`/movies/${movie.id}`}><Button className={style.readBtn} variant="contained">
              View More
            </Button></Link>
          </div>
          <img className={style.moviePoster} src={movie.coverPhoto} alt="header" />
        </div>
         )
       })}
      </div>
    </div>
  );
};

export default LatestMovies;
