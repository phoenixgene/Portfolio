import { useState } from "react";
type IconType = {
  size: string;
};

const Mode: React.FC<IconType> = ({ size }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="border border-black rounded-full w-[30px] h-[30px] flex justify-center items-center bg-white"
      onClick={toggleDarkMode}
    >
      <img
        src={darkMode ? "/assets/lightmode.svg" : "/assets/darkmode.svg"}
        height={size}
        width={size}
      />
    </button>
  );
};

export default Mode;
