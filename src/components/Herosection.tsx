import Button from "./Button";
import Spin from "./Spin";

const Herosection = () => {
  return (
    <>
      <section className="h-screen flex justify-center items-center">
        <div className="lg:border-x-[1px] lg:border-black">
          <div>
            <h1>EUGENE SHOKARE.</h1>
            <p>propelling startup visions to reality.</p>
          </div>
          <Button to="/" text="Hire me" />
          <Spin src="/assets/frontendimg.svg" />
        </div>
      </section>
    </>
  );
};

export default Herosection;
