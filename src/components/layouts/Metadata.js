import React from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import SEO from "@library/seo";

const Metadata = ({ title, description, canonical }) => {
  const router = useRouter();
  console.log(router);
  return <NextSeo {...SEO} />;
};

export default Metadata;
