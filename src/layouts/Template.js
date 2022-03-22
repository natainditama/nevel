import React from 'react';
import Navbar from '@components/Navbar';
import { DefaultSeo } from 'next-seo';
import SEO from '@library/seo';
import { useRouter } from 'next/router';

function Template({ children, site }) {
  return (
    <>
      <DefaultSeo
        {...SEO}
        canonical={`${site + useRouter().pathname}`}
        openGraph={{ url: `${site + useRouter().pathname}` }}
      />
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Template;
