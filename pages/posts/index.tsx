import AllPosts from "@/components/posts/all-posts";
import { PostDataType } from "@/types/post";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";

interface AllPostsPageProps {
  posts: PostDataType[];
}

const AllPostsPage = ({ posts }: AllPostsPageProps) => {
  return (
    <div>
      <Head>
        <title>Yujeong&apos;s Digital Space | Software Developer</title>
        <meta name="description" content="JavaScript blog" />
      </Head>
      <AllPosts posts={posts} />
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

export default AllPostsPage;
