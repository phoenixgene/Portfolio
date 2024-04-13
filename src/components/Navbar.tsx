import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";
import { iconVars, containerVars } from "../styles/animation";
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="z-10 fixed border-b-[1px] border-black bg-white top-0 w-full h-[80px] md:px-[20px] lg:px-[150px] lg:h-[100px] ">
        <div className="flex items-center justify-between px-[20px]  h-[80px] lg:h-[100px] lg:border-x-[1px] lg:border-black">
          <div>
            <Logo />
          </div>
          <section className={`hidden lg:flex ${click ? "block" : "hidden"}`}>
            <Navlinks />
          </section>
          <div className="hidden lg:block">
            <Button to="/" text="Resume" />
          </div>
          <div
            onClick={handleClick}
            className="cursor-pointer sm:flex lg:hidden justify-end"
          >
            <FontAwesomeIcon
              className="text-[#000000] w-[28px] h-[28px]"
              icon={click ? faXmark : faBars}
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {click && (
          <motion.div
            className={`bg-white block origin-top fixed top-0 z-[101] w-full h-screen pt-[30px] mx-auto text-center lg:hidden ${
              click ? "block" : "hidden"
            }`}
          >
            <motion.div
              variants={iconVars}
              initial="initial"
              animate={click ? "open" : "closed"}
              onClick={handleClick}
              className="cursor-pointer fixed right-[20px] top-[25px] w-[30px] md:right-[20px] lg:hidden"
            >
              <FontAwesomeIcon
                className="text-[#000000] w-[30px] h-[30px]"
                icon={click ? faXmark : faBars}
              />
            </motion.div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
            >
              <section className="pt-[30%] overflow-hidden">
                <Navlinks />
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
