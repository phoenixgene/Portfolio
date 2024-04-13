import { Link } from "react-router-dom";
type IconType = {
  src: string;
  to: string;
};

const Socialicons: React.FC<IconType> = ({ src, to }) => {
  return (
    <Link
      to={to}
      className="border border-black rounded-full w-[50px] h-[50px] flex justify-center items-center bg-black"
    >
      <img src={src} height="30px" width="30px" />
    </Link>
  );
};

export default Socialicons;
