import React from "react";
import { Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import style from "./TestimonialCard.module.css";
const TestimonialCard = () => {
  return (
    <Fade top duration={800} distance="30px" cascade>
      <div className={style.testimonialCard}>
        <img src="/images/main.jpg" alt="profile" />
        <div>
          <Typography className={style.name}>John Doe</Typography>
          <Typography className={style.position}>
            Sed ut perspiciatis
          </Typography>
          <Typography component="p" className={style.message}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
          </Typography>
        </div>
      </div>
    </Fade>
  );
};

export default TestimonialCard;
