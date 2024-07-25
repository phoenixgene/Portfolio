import Spin from "./Spin";

const About = () => {
  return (
    <section className="w-full px-[20px] border-b-[1px] border-black lg:border-none  lg:px-[150px]">
      <div className="lg:border-x-[1px] lg:border-black lg:border-b-[1px] lg:px-[20px]">
        <div className="py-[50px] space-y-[30px] lg:space-y-[50px]">
          <div className="flex items-center space-x-[10px]">
            <Spin src="/assets/star.svg" size="30px" />
            <h1 className="text-[24px] font-semibold lg:text-[36px]">
              About Me.
            </h1>
          </div>
          <div className="space-y-[20px]  lg:flex lg:justify-center lg:items-center lg:flex-row-reverse">
            <img src="/assets/eugene.png" />
            <p className="text-[16px] font-semibold ">
              Hello! <br />
              I'm Eugene a passionate frontend developer with a keen eye for
              detail and a drive to create seamless, user-friendly web
              experiences. My expertise in HTML, CSS, and JavaScript allows me
              to transform complex concepts into intuitive interfaces. I am
              dedicated to delivering high-quality work and staying up-to-date
              with the latest industry trends. Ready to collaborate and bring
              innovative projects to life, let's build something amazing
              together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
