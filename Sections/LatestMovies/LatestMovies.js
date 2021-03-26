import { Typography, Button } from "@material-ui/core";
import Link from "next/link";
import style from "./LatestMovies.module.css";
const LatestMovies = (props) => {
  const {latestMovies} = props
  console.log(props);
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
            <Link href={`/movies/${movie.id}`}><Button className={style.readBtn} variant="contained">
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
