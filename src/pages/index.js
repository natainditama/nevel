import Container from "@components/layouts/Container";
import Card from "@components/modules/Card";
import menuList from "@data/menuList";

function Home() {
  return (
    <>
      <section className="my-32 pt-8">
        <Container>
          <h1 className="text-center text-6xl font-bold">
            Welcome to{" "}
            <a
              href="https://nextjs.org"
              className="text-sky-500 hover:underline focus:underline active:underline"
            >
              <span className="text-gray-800">Next</span>Q
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
          <div className="bg-sky-400 flex flex-row justify-center items-center rounded-t rounden">
            <h2 className="text-center text-xl text-white py-2">
              Getting started
            </h2>
          </div>
          <div className="bg-gray-200 flex flex-col justify-center items-start py-4 px-8">
            <span>Clone the boilerplate if you haven{"'"}t downloaded it</span>
          </div>
        </Container>
      </section>
      <section>
        <Container className="px-16">
          <div className="flex flex-rows items-center">
            <div className="h-1 bg-sky-600 grow flex"></div>
            <h2 className="text-center text-3xl px-6 text-sky-500">Features</h2>
            <div className="h-1 bg-sky-600 grow flex"></div>
          </div>
          <div className="grid grid-cols-2 gap-8 py-8">
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
    </>
  );
}

export default Home;
