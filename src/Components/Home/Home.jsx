import { home } from "../texts";

const Home = () => {
  return (
    <div id="home" className="py-5 flex flex-col justify-center items-center gap-4 md:h-[84vh]">
      <h1 className="uppercase text-2xl md:text-4xl">{home.title}</h1>
      <section className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
      <img src={home.image} alt="logo" className="rounded-lg sm:w-72 md:w-96" />
      <section className="flex flex-col justify-center items-center min-[400px]:w-[350px] md:w-96 gap-2">
        <p>{home.description1}</p>
        <p>{home.description2}</p>
        <p>{home.description3}</p>
      </section>
      </section>
    </div>
  );
};

export default Home;
