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
    <div>
      <div>
        <div>
          <img src={src} />
        </div>
        <div>
          <Link to={to}>
            <h1>{title}</h1>
          </Link>
          <p>{about}</p>
          <div>
            <p>{stack1}</p>
            <p>{stack2}</p>
            <p>{stack3}</p>
            <p>{stack4}</p>
            <p>{stack5}</p>
            <p>{stack6}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
