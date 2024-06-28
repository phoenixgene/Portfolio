type SpinProps = {
  style?: string;
  src: string;
  size?: string;
};

const Spin: React.FC<SpinProps> = ({ src, style, size }) => {
  return (
    <div className={`${style}`}>
      <img className="spin-squeeze" height={size} width={size} src={src} />
    </div>
  );
};

export default Spin;
