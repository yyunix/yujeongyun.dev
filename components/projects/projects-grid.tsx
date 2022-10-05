import { AllProjectsFrontmatter } from "@/types/project";
import ProjectItem from "./project-item";

const ProjectsGrid = ({ projects }: AllProjectsFrontmatter) => {
  return (
    <ul className="grid gap-6 grid-cols-project-grid">
      {projects.map((project) => (
        <ProjectItem {...project} key={project.title} />
      ))}
    </ul>
  );
};

export default ProjectsGrid;
