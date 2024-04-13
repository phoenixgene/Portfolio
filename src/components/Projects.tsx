import Project from "./Project";
import Spin from "./Spin";

const Projects = () => {
  return (
    <section>
      <div>
        <h1></h1>
        <Spin src="/assets/star.svg" />
      </div>
      <div>
        <Project
          to="/"
          src="/assets/projectimgtest.png"
          title="project1"
          about="lolporoeueu"
          stack1="html"
          stack2="css"
          stack3="react"
        />
        <Project
          to="/"
          src="/assets/projectimgtest.png"
          title="project1"
          about="lolporoeueu"
          stack1="html"
          stack2="css"
          stack3="react"
        />
        <Project
          to="/"
          src="/assets/projectimgtest.png"
          title="project1"
          about="lolporoeueu"
          stack1="html"
          stack2="css"
          stack3="react"
        />
      </div>
    </section>
  );
};

export default Projects;
