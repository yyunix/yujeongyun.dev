import Head from "next/head";

import AllBlogPosts from "@/components/blog-posts/all-posts";
import { PostDataType } from "@/types/post";
import { getAllPosts, getAllPostsCategories } from "@/lib/posts-util";

interface AllBlogPostsPageProps {
  posts: PostDataType[];
  categories: string[];
}

const AllBlogPostsPage = ({ posts, categories }: AllBlogPostsPageProps) => {
  return (
    <div>
      <Head>
        <title>Yujeong&apos;s Digital Space | Software Developer</title>
        <meta name="description" content="JavaScript blog" />
      </Head>
      <AllBlogPosts posts={posts} categories={categories} />
    </div>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();
  const postsCategories = getAllPostsCategories();

  return {
    props: {
      posts: allPosts,
      categories: postsCategories,
    },
  };
}

export default AllBlogPostsPage;
