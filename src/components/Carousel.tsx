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
        <Slideimg text="HTML" />
        <p>-</p>
        <Slideimg text="HTML" />
        <p>-</p>
        <Slideimg text="HTML" />
        <p>-</p>
        <Slideimg text="HTML" />
        <p>-</p>
        <Slideimg text="HTML" />
        <p>-</p>
        <Slideimg text="HTML" />
        <p>-</p>
        <Slideimg text="HTML" />
        <p>-</p>
      </div>
    </div>
  );
};

export default Caurosel;
