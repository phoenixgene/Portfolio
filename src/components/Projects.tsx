import Project from "./Project";
import Spin from "./Spin";

const Projects = () => {
  return (
    <section className="w-full px-[20px] lg:px-[150px] border-b-[1px] border-black">
      <div className=" flex justify-center items-center py-[50px] w-full max-w-[1440px] mx-auto lg:border-x-[1px] lg:border-black lg:px-[20px]">
        <div className="space-y-[20px] lg:space-y-[50px]">
          <div className="flex justify-center items-center space-x-[10px]">
            <Spin src="/assets/star.svg" size="30px" />
            <h1 className="text-[24px] font-semibold lg:text-[36px]">
              Recent Projects
            </h1>
          </div>
          <div className="grid gap-[20px]">
            <Project
              to="https://gudetama.vercel.app/"
              src="/assets/gudetama.png"
              title="Gudetama"
              about="Gudetama ($GUDETAMA) is a community-focused, decentralized cryptocurrency with instant rewards thanks to active users!"
              stack1="HTML"
              stack2="CSS"
              stack3="REACT"
            />
            {/* <Project
              to="youtube.com"
              src="/assets/fronstat.png"
              title="Fronstat"
              about="Fronstat Industries is dedicated to recycling and environmental stewardship, promoting sustainable practices to protect our planet."
              stack1="HTML"
              stack2="CSS"
              stack3="REACT"
            /> */}
            <Project
              to="https://dev-eugeneflower.pantheonsite.io/"
              src="/assets/eugeneflower.png"
              title="Eugenes Decor"
              about="An elegant e-commerce site for home decoration products, focusing on a user-friendly interface and beautiful design to inspire and delight customers."
              stack1="WORDPRESS"
              stack2="ELEMENTOR"
            />
            <Project
              to="https://dev-eugenewears.pantheonsite.io/"
              src="/assets/clotheshop.png"
              title="Eugene Wears"
              about="A modern and stylish e-commerce platform for clothing, designed to provide a seamless shopping experience with intuitive navigation and appealing visuals."
              stack1="WORDPRESS"
              stack2="ELEMENTOR"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
