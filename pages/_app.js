import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import "../styles/globals.css";
import Layout from "../components/Layout";
import { AppProvider } from "../contexts/AppContext";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Layout>
  );
}

export default MyApp;
