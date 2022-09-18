import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";

import PostContent from "@/components/blog/blog-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import { PostDataType } from "@/types/post";

interface IPostDetailPageProps {
  post: PostDataType;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const PostDetailPage = ({ post }: IPostDetailPageProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
