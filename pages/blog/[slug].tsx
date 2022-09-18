import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { getMDXComponent } from "mdx-bundler/client";
import PostContent from "@/components/blog/blog-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import { PostDataType } from "@/types/post";
import Markdown from "@/components/shared/markdown";
import { getAllFrontMatters, getMdxBySlug } from "@/lib/mdx";
import { IFrontmatter } from "@/types/frontmatter";
import { useMemo } from "react";
import { components } from "@/components/shared/mdx-components";
import PostContentWrapper from "@/components/shared/post-content-wrapper";

interface IPostDetailPageProps {
  post: PostDataType;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type Post = {
  frontmatter: IFrontmatter;
  code: string;
};

const PostDetailPage = ({
  post: { code, frontmatter },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      {/* <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head> */}
      <PostContentWrapper>
        <Component components={components} />
      </PostContentWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const { code, frontmatter } = await getMdxBySlug(slug);
  return {
    props: {
      post: {
        code,
        frontmatter,
      } as Post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllFrontMatters();
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export default PostDetailPage;
