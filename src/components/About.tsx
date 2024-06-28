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
            <p>
              Lorem ipsum dolor sit amet consectetur. Porttitor elit maecenas
              amet viverra ullamcorper pellentesque proin orci. Sed pellentesque
              in accumsan lacus ligula tellus auctor ornare. Sodales non amet
              orci quis. Facilisis blandit gravida commodo turpis nulla ipsum
              sit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
