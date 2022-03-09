import Container from "@components/layouts/Container";
import Card from "@components/modules/Card";
import menuList from "@data/menuList";

function Home() {
  return (
    <section className="px-8">
      <Container className="flex min-h-screen flex-1 flex-col items-center justify-center py-16">
        <h1 className="text-center text-6xl font-bold">
          Welcome to{" "}
          <a
            href="https://nextjs.org"
            className="text-indigo-500 hover:underline focus:underline active:underline dark:text-sky-500"
          >
            Next.js!
          </a>
        </h1>

        <p className="mt-8 mb-16 text-center text-2xl">
          Get started by editing{" "}
          <code className="font-mono ml-2 inline-block rounded bg-gray-100 p-2 dark:bg-gray-800">
            pages/index.js
          </code>
        </p>

        <div className="flex w-full max-w-[800px] flex-col flex-wrap items-center justify-center sm:flex-row">
          {menuList.map((menu, index) => {
            return (
              <Card
                link={menu.link}
                title={menu.title}
                description={menu.description}
                key={index}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Home;
