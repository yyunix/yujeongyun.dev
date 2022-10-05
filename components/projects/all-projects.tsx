import PostsHeader from "@/components/shared/page-title";
import PostsEmpty from "@/components/shared/posts-empty";
import ProjectsGrid from "./projects-grid";
import { AllProjectsFrontmatter } from "@/types/project";
import ProjectIcon from "@/assets/newspaper.svg";

const AllProjects = ({ projects }: AllProjectsFrontmatter) => {
  return (
    <>
      <PostsHeader title="Projects" icon={<ProjectIcon />} />
      {projects.length ? (
        <ProjectsGrid projects={projects} />
      ) : (
        <PostsEmpty title="projects" />
      )}
    </>
  );
};

export default AllProjects;
