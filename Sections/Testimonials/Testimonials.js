import React from "react";
import { Typography } from "@material-ui/core";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import style from "./Testimonials.module.css";
const Testimonials = () => {
  return (
    <div className={style.testimonials}>
      <Typography className={style.title}>TESTIMONIALS</Typography>
      <div className={style.testimonialContainer}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
