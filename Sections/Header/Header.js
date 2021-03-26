import React from "react";
import { Typography } from "@material-ui/core";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.layer}>
        <Typography className={style.title}>FAITHLIFT</Typography>
        <Typography className={style.subtitle}>
          Pisteuo Faithlift productions sets to bring massive change and
          transformation into the film industry in other to uphold sanity and
          moral values of our dear nation.
        </Typography>
      </div>
      {/* <div className={style.fadeBottom}></div> */}
    </div>
  );
};

export default Header;
