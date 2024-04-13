type SpinProps = {
  style?: string;
  src: string;
};

const Spin: React.FC<SpinProps> = ({ src, style }) => {
  return (
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <img className={`${style} spin-squeeze`} src={src} />
      </div>
    </div>
  );
};

export default Spin;
