import '@styles/globals.css';
import Template from '@layouts/Template';

function MyApp({ Component, pageProps }) {
  const site = typeof window != 'undefined' ? window.location.origin : process.env.NEXTJS_BASE_URL;
  return (
    <>
      <Template site={site}>
        <Component {...pageProps} />
      </Template>
    </>
  );
}

export default MyApp;
