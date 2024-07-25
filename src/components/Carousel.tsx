import Slideimg from "./Slideimg";

const Caurosel = () => {
  return (
    <div className="logos flex">
      <div className="logos-slide flex space-x-[30px] md:space-x-[50px] lg:space-x-[100px]">
        <Slideimg text="HTML" />
        <p>-</p>
        <Slideimg text="TAILWIND" />
        <p>-</p>
        <Slideimg text="REACT" />
        <p>-</p>
        <Slideimg text="NEXT" />
        <p>-</p>
        <Slideimg text="TYPESCRIPT" />
        <p>-</p>
        <Slideimg text="WORDPRESS" />
        <p>-</p>
        <Slideimg text="ELEMENTOR" />
        <p>-</p>
        <Slideimg text="DIVI" />
        <p>-</p>
        <Slideimg text="PROBLEM SOLVING" />
        <p>-</p>
        <Slideimg text="SASS" />
      </div>
    </div>
  );
};

export default Caurosel;
