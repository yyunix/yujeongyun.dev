import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { getAllFrontMatters } from "@/lib/utils/mdx";
import { BlogFrontmatter, AllBlogFrontmatter } from "@/types/blog";
import AllBlogPosts from "@/components/blog/all-blog";

const MDX_PATH = "content/blog";

const AllBlogPostsPage = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="max-w-3xl">
      <Head>
        <title>Yujeong&apos;s Digital Space | Software Developer</title>
        <meta name="description" content="JavaScript blog" />
      </Head>
      <AllBlogPosts blogPosts={blogPosts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<AllBlogFrontmatter> = async () => {
  const allBlog = await getAllFrontMatters<BlogFrontmatter>(MDX_PATH);

  return {
    props: {
      blogPosts: allBlog,
    },
  };
};

export default AllBlogPostsPage;
