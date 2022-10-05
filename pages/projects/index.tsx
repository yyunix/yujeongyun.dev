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
        <title>Yujeong&apos;s Digital Space | Software Developer</title>
        <meta name="description" content="JavaScript blog" />
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
