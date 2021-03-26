import { useEffect, useState, useContext } from "react";
// import Poster from "../../assets/images/poster.png";
// import Movie from "../../assets/images/jailer.jpg";
import { Typography, Button } from "@material-ui/core";
import Link from "next/link";
// import { firestore } from "../../firebase/firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AppContext } from "../../contexts/AppContext";
import style from "../../styles/Movies.module.css";

const Movies = () => {
  const { moviesList, posterMain } = useContext(AppContext);
  const [movies, setMovies] = moviesList;
  const [poster, setPoster] = posterMain;
  // const [movies, setMovies] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  return (
    <div className={style.movies}>
      <div className={style.moviePoster}>
       {movies &&  <div className={style.posterContent}>
          <Typography className={style.posterTitle}>{poster?.title}</Typography>
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
        </div>}
        <img src={poster?.poster} alt="poster" />
        <div className={style.fadeBottom}></div>
      </div>
      <div className={style.movieListContainer}>
        <div className={style.movieList}>
          <Typography className={style.listHeader}>OUR FILMS</Typography>
          <div className={style.posterList}>
            {loadingState ? (
              <CircularProgress />
            ) : (
              movies?.map((movie) => (
                <Link key={movie.id} href={`/movies/${movie.id}`}>
                  <img
                    className={style.poster}
                    src={movie.poster}
                    alt={movie.title}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
