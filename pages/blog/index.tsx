import Head from "next/head";

import AllBlogPosts from "@/components/blog/all-posts";
import { PostDataType } from "@/types/post";
import { getAllPosts, getAllPostsCategories } from "@/lib/posts-util";

interface AllBlogPostsPageProps {
  posts: PostDataType[];
}

const AllBlogPostsPage = ({ posts }: AllBlogPostsPageProps) => {
  return (
    <div>
      <Head>
        <title>Yujeong&apos;s Digital Space | Software Developer</title>
        <meta name="description" content="JavaScript blog" />
      </Head>
      <AllBlogPosts posts={posts} />
    </div>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllBlogPostsPage;
