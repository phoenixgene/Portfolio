import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mobileLinkVars } from "../styles/animation";
import Socialicons from "./Socialicons";

const Navlinks = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul className=" text-[20px] font-[500] text-black space-y-[20px] lg:flex lg:items-center lg:space-y-0 lg:space-x-[40px] lg:font-[400]">
        <motion.li variants={mobileLinkVars}>
          <Link to="/" onClick={() => scrollToSection("section1")}>
            Home
          </Link>
        </motion.li>
        <motion.li variants={mobileLinkVars}>
          <Link to="/about" onClick={() => scrollToSection("section2")}>
            About
          </Link>
        </motion.li>
        <motion.li variants={mobileLinkVars}>
          <Link to="/projects" onClick={() => scrollToSection("section3")}>
            Projects
          </Link>
        </motion.li>
        <motion.li variants={mobileLinkVars}>
          <Link to="/contact" onClick={() => scrollToSection("section4")}>
            Contact
          </Link>
        </motion.li>
        <motion.li variants={mobileLinkVars} className="lg:hidden">
          <Link to="/">Resume</Link>
        </motion.li>
      </ul>
      <motion.div
        variants={mobileLinkVars}
        className="flex justify-center items-center mt-[20px] space-x-[10px] lg:hidden"
      >
        <Socialicons src="/assets/x.svg" to="/" />
        <Socialicons src="/assets/linkedin.svg" to="/" />
        <Socialicons src="/assets/github.svg" to="/" />
      </motion.div>
    </nav>
  );
};

export default Navlinks;
