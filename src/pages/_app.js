import "@styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "@library/seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
