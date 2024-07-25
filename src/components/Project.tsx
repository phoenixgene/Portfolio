import { Link } from "react-router-dom";

type ProjectProps = {
  src: string;
  to: string;
  title: string;
  about: string;
  stack1?: string;
  stack2?: string;
  stack3?: string;
  stack4?: string;
  stack5?: string;
  stack6?: string;
};

const Project: React.FC<ProjectProps> = ({
  src,
  to,
  title,
  about,
  stack1,
  stack2,
  stack3,
  stack4,
  stack5,
  stack6,
}) => {
  return (
    <Link
      to={to}
      className="flex justify-center items-center border border-black"
    >
      <div className="interactable p-[20px] space-y-[20px] w-[450px] h-[500px] lg:space-x-[20px] lg:h-[200px] lg:w-[900px]">
        <div className="space-y-[20px] lg:space-y-[0] lg:flex lg:items-center lg:space-x-[20px]">
          <div className="flex justify-center items-center lg:w-[40%] border">
            <img src={src} />
          </div>
          <div className="border lg:w[60%]">
            <div className="space-y-[10px]">
              <h1 className="text-[24px] font-semibold">{title}</h1>
              <p className="text-gray-700">{about}</p>
              <div className="flex space-x-[10px]">
                {stack1 && (
                  <p className=" border font-[500]  border-black text-[14px] px-[10px] py-[2px] ">
                    {stack1}
                  </p>
                )}
                {stack2 && (
                  <p className=" border font-[500] border-black text-[14px] px-[10px] py-[2px] ">
                    {stack2}
                  </p>
                )}
                {stack3 && (
                  <p className=" border font-[500] border-black text-[14px] px-[10px] py-[2px] ">
                    {stack3}
                  </p>
                )}
                {stack4 && (
                  <p className=" border font-[500] border-black text-[14px] px-[10px] py-[2px] ">
                    {stack4}
                  </p>
                )}
                {stack5 && (
                  <p className=" border font-[500] border-black text-[14px] px-[10px] py-[2px] ">
                    {stack5}
                  </p>
                )}
                {stack6 && (
                  <p className=" border font-[500] border-black text-[14px] px-[10px] py-[2px] ">
                    {stack6}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
