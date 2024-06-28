import Button from "./Button";
import Spin from "./Spin";

const Herosection = () => {
  return (
    <section className="h-screen flex justify-center items-center px-[20px] pt-[50px] mt[80px] lg:pt-[0px]  lg:mt-[100px] lg:px-[150px]">
      <div className="h-full lg:border-x-[1px] lg:border-black w-full flex justify-center items-center">
        <div className="text-center w-full space-y-[20px] lg:pb-[50px]">
          <div>
            <h1 className="text-[40px] font-semibold lg:text-[70px] lg:font-semibold">
              EUGENE SHOKARE.
            </h1>
            <p className="text-[16px] text-gray-700 lg:text-[20px]">
              propelling startup visions to reality.
            </p>
          </div>
          <div>
            <Button to="/" text="Hire me" />
          </div>
          <Spin
            src="/assets/frontendimg.svg"
            style="flex justify-center items-center"
            size="100px"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
