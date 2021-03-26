import Head from "next/head";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Faith-Lift Productions</title>
        <meta title="The Official Site of FaithLift Productions" />
      </Head>
      <main style={{overflow: "hidden"}}>
        <Navbar />
        <div>
            {props.children}
        </div>
        <Footer/>
      </main>
    </>
  );
};

export default Layout