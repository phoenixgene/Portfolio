import Carousel from "./Carousel";
import Spin from "./Spin";
const Skill = () => {
  return (
    <section className="  w-[full]  lg:px-[150px]">
      <div className="h-[60px] border-y-[1px] border-black lg:h-[80px] lg:border-x-[1px] lg:border-black flex">
        <div className="flex items-center border-r-[1px] border-black pl-[20px] w-[35%] space-x-[10px] lg:w-[20%]">
          <Spin src="/assets/star.svg" size="30px" />
          <h1 className="text-[24px] font-semibold lg:text-[36px]">Skills</h1>
        </div>
        <div className="flex justify-center items-center w-[65%] lg:w-[80%]">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Skill;
