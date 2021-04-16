import React from "react";
import { Typography } from "@material-ui/core";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import Fade from "react-reveal/Fade";
import style from "./Testimonials.module.css";
const Testimonials = () => {
  return (
    <div className={style.testimonials}>
      <Typography className={style.title}>TESTIMONIALS</Typography>
      <Fade top duration={800} distance="30px" cascade>
        <div className={style.testimonialContainer}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </Fade>
    </div>
  );
};

export default Testimonials;
