import { Link } from "react-router-dom";

type ProjectProps = {
  src: string;
  to: string;
  title: string;
  about: string;
  stack1: string;
  stack2: string;
  stack3: string;
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
      <div className="interactable  p-[20px] space-y-[20px]  w-[450px] h-screen lg:space-x-[20px] lg:h-[200px] lg:w-[900px] lg:flex ">
        <div className="flex justify-center items-center">
          <img src={src} />
        </div>
        <div className="flex justify-center items-center">
          <div className="space-y-[10px]">
            <div>
              <h1 className="text-[24px] font-semibold">{title}</h1>
            </div>
            <p className="text-gray-700">{about}</p>
            <div className="flex space-x-[10px]">
              {stack1 && (
                <p className="bg-black text-white px-[10px] py-[2px] rounded-[15px]">
                  {stack1}
                </p>
              )}
              {stack2 && (
                <p className="bg-black text-white px-[10px] py-[2px] rounded-[15px]">
                  {stack2}
                </p>
              )}
              {stack3 && (
                <p className="bg-black text-white px-[10px] py-[2px] rounded-[15px]">
                  {stack3}
                </p>
              )}
              {stack4 && (
                <p className="bg-black text-white px-[10px] py-[2px] rounded-[15px]">
                  {stack4}
                </p>
              )}
              {stack5 && (
                <p className="bg-black text-white px-[10px] py-[2px] rounded-[15px]">
                  {stack5}
                </p>
              )}
              {stack6 && (
                <p className="bg-black text-white px-[10px] py-[2px] rounded-[15px]">
                  {stack6}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
