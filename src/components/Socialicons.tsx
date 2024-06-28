import { Link } from "react-router-dom";
type IconType = {
  src: string;
  to: string;
  size: string;
};

const Socialicons: React.FC<IconType> = ({ src, to, size }) => {
  return (
    <Link
      to={to}
      className="border border-black rounded-full w-[30px] h-[30px] flex justify-center items-center bg-white"
    >
      <img src={src} height={size} width={size} />
    </Link>
  );
};

export default Socialicons;
