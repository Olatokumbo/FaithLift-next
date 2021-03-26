import React from "react";
import { Typography } from "@material-ui/core";
import Image from "../../assets/images/Header.png";
import style from "./MovieCard.module.css";

const MovieCard = () => {
  return (
    <div className={style.movieCard}>
      <div className={style.banner}>
        <img src={Image} alt="Poster" />
      </div>
      <div className={style.movieContent}>
          <Typography className={style.title}>
          The Jailer
        </Typography>
      <Typography className={style.year}>
          2021
        </Typography>
        <Typography className={style.movieMessage}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris...
        </Typography>
      </div>
    </div>
  );
};

export default MovieCard;
