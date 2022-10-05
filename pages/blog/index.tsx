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
        <title>
          Blog about React.js, Frontend developement, JavaScript - Yujeong Yun
        </title>
        <meta
          name="description"
          content="Yujeong writes about frontend development, React, and other software tools and tricks she learned from her journey."
        />
        <meta property="og:title" content="Blog" />
        <meta property="og:url" content="yyunix.dev/blog" />
        <meta
          property="og:description"
          content="Yujeong writes about frontend development, React, and other software tools and tricks she learned from her journey."
        />
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
