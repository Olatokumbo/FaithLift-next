import { Typography, Button } from "@material-ui/core";
import Link from "next/link";
const { format } = require("date-fns");
import style from "./LatestMovies.module.css";
const LatestMovies = (props) => {
  const { latestMovies } = props;
  return (
    <div className={style.latestMovies}>
      <Typography className={style.header}>LATEST MOVIES</Typography>
      <div className={style.moviesContainer}>
        {latestMovies?.map((movie) => {
          return (
            <div key={movie.id} className={style.movie}>
              <div className={style.content}>
                <Typography className={style.title}>
                  {movie.fields.title}
                </Typography>
                <Typography className={style.year}>
                  {format(new Date(movie.fields.releaseDate), " MMMM yyyy")}
                </Typography>
                <Link href={`/movies/${movie.fields.slug}`}>
                  <Button className={style.readBtn} variant="contained">
                    View More
                  </Button>
                </Link>
              </div>
              <img
                className={style.moviePoster}
                src={`https:${movie.fields.coverPhoto.fields.file.url}`}
                alt="header"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestMovies;
