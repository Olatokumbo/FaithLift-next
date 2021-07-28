import React from "react";
import style from "../styles/Home.module.css";
import Header from "../Sections/Header/Header";
import Layout from "../components/Layout";
import Info from "../Sections/Info/Info";
import About from "../Sections/About/About";
import Testimonials from "../Sections/Testimonials/Testimonials";
import LatestMovies from "../Sections/LatestMovies/LatestMovies";
import { createClient } from "contentful";
const Home = (props) => {
  const { latestMovies } = props;
  console.log(latestMovies);
  return (
    <div className={style.home}>
      <Header />
      <Info />
      <About />
      {/* <Testimonials /> */}
      <LatestMovies latestMovies={latestMovies} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const response = await client.getEntries({
    content_type: "faithLift",
    order: "sys.createdAt",
    limit: 2,
  });
  return {
    props: {
      latestMovies: response.items,
    },
    revalidate: 1,
  };
};
