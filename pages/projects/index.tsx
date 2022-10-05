import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { AllProjectsFrontmatter, ProjectFrontmatter } from "@/types/project";
import { getAllFrontMatters } from "@/lib/utils/mdx";
import AllProjects from "@/components/projects/all-projects";

const MDX_PATH = "content/projects";

const AllProjectsPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Projects - Yujeong Yun</title>
        <meta
          name="description"
          content="Yujeong works on JavaScript projects including frontend and backend development. She is passionate about coding, learning to code, and practice coding."
        />
        <meta property="og:title" content="Projects" />
        <meta property="og:url" content="yyunix.dev/projects" />
        <meta
          property="og:description"
          content="Yujeong works on JavaScript projects including frontend and backend development. She is passionate about coding, learning to code, and practice coding."
        />
      </Head>
      <AllProjects projects={projects} />
    </div>
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
