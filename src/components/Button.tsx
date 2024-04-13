import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  text?: string;
  style?: string;
  onClick?: () => void;
  src?: string;
  to: string;
};

const Button: React.FC<ButtonProps> = ({ text, style, onClick, src, to }) => {
  return (
    <Link to={to}>
      <button
        className={`${style} text-[20px] text-white bg-black px-[30px] py-[10px]`}
        onClick={onClick}
      >
        <div>
          {text}
          {src && <img src={src} />}
        </div>
      </button>
    </Link>
  );
};

export default Button;
