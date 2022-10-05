import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllFrontMatters } from "@/lib/utils/mdx";
import { BlogFrontmatter, AllBlogFrontmatter } from "@/types/blog";
import AllBlogPosts from "@/components/blog/all-blog";
import Layout from "@/components/layout/layout";

const MDX_PATH = "content/blog";

const AllBlogPostsPage = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout
      pageTitle="Blog about React.js, Frontend developement, JavaScript - Yujeong Yun"
      pageDescription="Yujeong writes about frontend development, React, and other software tools and tricks she learned from her journey."
      slug="blog"
    >
      <div className="max-w-3xl">
        <AllBlogPosts blogPosts={blogPosts} />
      </div>
    </Layout>
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
