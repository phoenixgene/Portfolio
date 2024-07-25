import Project from "./Project";
import Spin from "./Spin";

const Projects = () => {
  return (
    <section className="w-full px-[20px] lg:px-[150px] border-b-[1px] border-black">
      <div className=" flex justify-center items-center py-[50px] lg:border-x-[1px] lg:border-black lg:px-[20px]">
        <div className="space-y-[20px] lg:space-y-[50px]">
          <div className="flex justify-center items-center space-x-[10px]">
            <Spin src="/assets/star.svg" size="30px" />
            <h1 className="text-[24px] font-semibold lg:text-[36px]">
              Recent Projects
            </h1>
          </div>
          <div className="grid gap-[20px]">
            <Project
              to="https://www.youtube.com/"
              src="/assets/projectimgtest.png"
              title="Gudetama"
              about="Lorem ipsum dolor sit amet consectetur. Porttitor elit maecenas amet viverra ullamcorper pellentesque proin orci. Sed pellentesque in accumsan lacus ligula tellus auctor ornare. Sodales non amet orci quis."
              stack1="HTML"
              stack2="CSS"
              stack3="REACT"
            />
            <Project
              to="youtube.com"
              src="/assets/projectimgtest.png"
              title="project1"
              about="Lorem ipsum dolor sit amet consectetur. Porttitor elit maecenas amet viverra ullamcorper pellentesque proin orci. Sed pellentesque in accumsan lacus ligula tellus auctor ornare. Sodales non amet orci quis."
              stack1="HTML"
              stack2="CSS"
              stack3="REACT"
            />
            <Project
              to="https://dev-eugeneflower.pantheonsite.io/"
              src="/assets/projectimgtest.png"
              title="Eugenes Decor"
              about="Lorem ipsum dolor sit amet consectetur. Porttitor elit maecenas amet viverra ullamcorper pellentesque proin orci. Sed pellentesque in accumsan lacus ligula tellus auctor ornare. Sodales non amet orci quis."
              stack1="WORDPRESS"
              stack2="ELEMENTOR"
            />
            <Project
              to="https://dev-eugenewears.pantheonsite.io/"
              src="/assets/projectimgtest.png"
              title="Eugene Wears"
              about="Lorem ipsum dolor sit amet consectetur. Porttitor elit maecenas amet viverra ullamcorper pellentesque proin orci. Sed pellentesque in accumsan lacus ligula tellus auctor ornare. Sodales non amet orci quis."
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
