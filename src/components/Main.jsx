import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="bg-base-200 text-center lg:text-start">
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
};

export default Main;
