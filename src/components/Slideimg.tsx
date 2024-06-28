type slideType = {
  text: string;
};

const Slideimg: React.FC<slideType> = ({ text }) => {
  return <p className="text-[16px] text-gray-700 lg:text-[20px]">{text}</p>;
};

export default Slideimg;
