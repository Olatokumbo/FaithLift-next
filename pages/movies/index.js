// import { useEffect, useState, useContext } from "react";
import { Typography, Button } from "@material-ui/core";
import Link from "next/link";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { AppContext } from "../../contexts/AppContext";
import { getMovies } from "../../firebase/api";
import style from "../../styles/Movies.module.css";

const Movies = ({movieData: {moviesList, poster}}) => {
  return (
    <div className={style.movies}>
      <div className={style.moviePoster}>
        {moviesList && (
          <div className={style.posterContent}>
            <Typography className={style.posterTitle}>
              {poster?.title}
            </Typography>
            <Typography className={style.posterSubtitle}>
              {poster?.info}
            </Typography>
            <Button
              className={style.ytBtn}
              variant="contained"
              onClick={() => window.open(`${poster?.youtubeUrl}`, "_blank")}
            >
              Watch on YouTube
            </Button>
          </div>
        )}
        <img src={poster?.poster} alt="poster" />
        <div className={style.fadeBottom}></div>
      </div>
      <div className={style.movieListContainer}>
        <div className={style.movieList}>
          <Typography className={style.listHeader}>OUR FILMS</Typography>
          <div className={style.posterList}>
            {moviesList?.map((movie) => (
              <Link key={movie.id} href={`/movies/${movie.id}`}>
                <img
                  className={style.poster}
                  src={movie.poster}
                  alt={movie.title}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;

export async function getStaticProps() {
  let data = await getMovies();
  data = JSON.parse(data);
  return {
    props: {
      movieData: data
    },
    revalidate: 1000,
  };
}
