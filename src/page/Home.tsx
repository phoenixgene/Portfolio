import About from "../components/About";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Herosection from "../components/Herosection";
import Skill from "../components/Skill";
import Footer from "../components/Footer";
import { useRef } from "react";

const Home = () => {
  const mainRef = useRef<HTMLElement | null>(null);
  return (
    <main ref={mainRef}>
      <section>
        <Navbar />
      </section>
      <Sidebar target={mainRef} />
      <section id="section1">
        <Herosection />
      </section>
      <section>
        <Skill />
      </section>
      <section id="section2">
        <About />
      </section>
      <section id="section3">
        <Projects />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;

//className={`${darkMode && "dark"}`}
