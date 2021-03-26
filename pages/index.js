import React from "react";
import style from "../styles/Home.module.css";
import Header from "../Sections/Header/Header";
import Layout from "../components/Layout";
import Info from "../Sections/Info/Info";
import About from "../Sections/About/About";
import Testimonials from "../Sections/Testimonials/Testimonials";
import LatestMovies from "../Sections/LatestMovies/LatestMovies";
import {latestMovies} from "../firebase/api";
const Home = (props) => {
  const {latestMovies} = props
  return (
    <div className={style.home}>
      <Header />
      <Info />
      <About />
      <Testimonials />
      <LatestMovies latestMovies={latestMovies}/>
    </div>
  );
};

export default Home;

export async function getStaticProps(){
  let data = await latestMovies();
  data = JSON.parse(data)
  return {
    props: {
      latestMovies: data
    },
    revalidate: 1800
  }
} 