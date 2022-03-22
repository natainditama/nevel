import Container from '@layouts/Container';
import Card from '@components/Card';
import Link from 'next/link';
import menuList from '@data/menuList';

function Home() {
  return (
    <>
      <section className="my-32 pt-8">
        <Container>
          <h1 className="text-center text-6xl font-bold">
            Welcome to{' '}
            <a href="https://nextjs.org" className="text-sky-500 hover:underline focus:underline active:underline">
              Next.js
            </a>
          </h1>

          <p className="mt-8 text-center text-2xl">
            Get Started Template built with Next JS and Tailwind CSS. <br /> It
            {"'"}s a great starting point for your next Next.js project.
          </p>
        </Container>
      </section>
      <section className="mb-16">
        <Container className="px-16">
          <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg">
            <div className="flex flex-row items-center justify-center bg-sky-400 ">
              <h2 className="py-3 text-center text-xl text-white">Getting started</h2>
            </div>
            <div className="flex flex-col items-start justify-center gap-3 bg-gray-100 py-4 px-6">
              <span>Clone the boilerplate if you haven{"'"}t downloaded it</span>
              <code className="scroll-hide w-full overflow-x-auto whitespace-nowrap rounded bg-gray-500/80 py-2 px-4 text-gray-200">
                <span className="text-sky-300">$ </span>npx create-next-app --example
                https://github.com/natainditama/nextjs-quickstart my-app
              </code>
              <span>Run the setup to get everything up and running</span>
              <code className="w-full rounded bg-gray-500/80 py-2 px-4 text-gray-200">
                <span className="text-sky-300">$ </span>npm install
              </code>
              <span>And start the development server</span>
              <code className="w-full rounded bg-gray-500/80 py-2 px-4 text-gray-200">
                <span className="text-sky-300">$ </span>npm run dev
              </code>
              <span className="w-full text-center text-sky-500">
                Now you can go to{' '}
                <span className="text-gray-800">
                  <Link href="localhost:3000" passHref>
                    localhost:3000
                  </Link>{' '}
                </span>
                and see your app!
              </span>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container className="px-16">
          <div className="flex-rows flex items-center">
            <div className="flex h-1 grow bg-sky-500"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2">
            {menuList.map((menu, index) => {
              return <Card link={menu.link} title={menu.title} description={menu.description} key={index} />;
            })}
          </div>
        </Container>
      </section>
      <section className="bg-gray-700 text-white">
        <Container className="px-16 py-16">
          <div className="flex flex-col items-center justify-center ">
            <h2 className="text-center text-3xl text-sky-500">Want to contribute?</h2>
            <p className="mt-4 mb-6 text-center md:w-8/12">
              NextQ is open source and and available on Github. If you want to help us with the development of NextQ,
              please help us out by contributing to the project. You can find the source code on Github.
            </p>
            <Link href="https://github.com/natainditama/nextjs-quickstart">
              <a className="rounded border border-sky-500 bg-sky-500 py-2 px-4 text-white shadow hover:bg-sky-500 ">
                <span className="h-full w-full ">Start Contributing</span>
              </a>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
