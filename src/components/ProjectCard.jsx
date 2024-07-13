
export const ProjectCard = ({ project, onCardHover, onCardLeaveHover }) => {
  return (
    <div
      onMouseEnter={onCardHover}
      onMouseLeave={onCardLeaveHover}
      className={`border h-[60vh] rounded-lg overflow-hidden hover:scale-[96%] cursor-pointer transition duration-300`}
    >
      <img src={project.imageUrl} alt={`Project ${project.id} `} />
    </div>
  );
};
