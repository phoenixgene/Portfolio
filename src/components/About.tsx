import Spin from "./Spin";

const About = () => {
  return (
    <>
      <section>
        <div>
          <h1>ABOUT ME.</h1>
          <Spin src="/assets/star.svg" style="w-[40px] h-[40px]" />
        </div>
        <div>
          <img src="/assets/eugene.png" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Porttitor elit maecenas amet
            viverra ullamcorper pellentesque proin orci. Sed pellentesque in
            accumsan lacus ligula tellus auctor ornare. Sodales non amet orci
            quis. Facilisis blandit gravida commodo turpis nulla ipsum sit.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
