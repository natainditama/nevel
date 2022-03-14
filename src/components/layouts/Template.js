import React from "react";
import Navbar from "@components/modules/Navbar";
import Footer from "@components/modules/Footer";
import { DefaultSeo } from "next-seo";
import SEO from "@library/seo";

function Template({ children }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Template;
