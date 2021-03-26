import Head from "next/head";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Head lang="en">
        <title>Faith-Lift Productions</title>
        <meta
          name="Description"
          content="Pisteuo Faithlift productions sets to bring massive change and transformation into the film industry in other to uphold sanity and moral values of our dear nation."
        ></meta>
        <meta title="The Official Site for FaithLift Productions" />
      </Head>
      <main style={{ overflow: "hidden" }}>
        <Navbar />
        <div>{props.children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
