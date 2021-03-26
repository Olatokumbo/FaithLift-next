import React from "react";
import style from "../styles/Home.module.css";
import Header from "../Sections/Header/Header";
import Layout from "../components/Layout";
import Info from "../Sections/Info/Info";
import About from "../Sections/About/About";
import Testimonials from "../Sections/Testimonials/Testimonials";
// import LatestMovies from "../Sections/LatestMovies/LatestMovies";
const Home = () => {
  return (
    <div className={style.home}>
      <Header />
      <Info />
      <About />
      <Testimonials />
      {/* <LatestMovies/> */}
    </div>
  );
};

export default Home;
