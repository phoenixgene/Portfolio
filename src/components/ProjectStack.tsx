type ProjectStackProps = {
  text: string;
};

const ProjectStack: React.FC<ProjectStackProps> = ({ text }) => {
  return (
    <>
      <div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default ProjectStack;
