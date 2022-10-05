import { GetStaticProps, InferGetStaticPropsType } from "next";
import { AllProjectsFrontmatter, ProjectFrontmatter } from "@/types/project";
import { getAllFrontMatters } from "@/lib/utils/mdx";
import AllProjects from "@/components/projects/all-projects";
import Layout from "@/components/layout/layout";

const MDX_PATH = "content/projects";

const AllProjectsPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout
      pageTitle="Projects - Yujeong Yun"
      pageDescription="Yujeong works on JavaScript projects including frontend and backend development. She is passionate about coding, learning to code, and practice coding."
      slug="projects"
    >
      <AllProjects projects={projects} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  AllProjectsFrontmatter
> = async () => {
  const allProjects = await getAllFrontMatters<ProjectFrontmatter>(MDX_PATH);

  return {
    props: {
      projects: allProjects,
    },
  };
};

export default AllProjectsPage;
