import { useMemo } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { getMDXComponent } from "mdx-bundler/client";
import { ParsedUrlQuery } from "querystring";
import { getAllFrontMatters, getMdxBySlug } from "@/lib/utils/mdx";
import { BlogFrontmatter } from "@/types/blog";
import { MdxComponents } from "@/components/shared/mdx-components";
import TextContentWrapper from "@/components/shared/text-content-wrapper";
import BlogHeader from "@/components/blog/blog-header";
import BackButton from "@/components/shared/back-button";
import Layout from "@/components/layout/layout";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Blog {
  frontmatter: BlogFrontmatter;
  code: string;
  slug: string;
}

const MDX_PATH = "content/blog";

const BlogDetailPage = ({
  blog: { code, frontmatter, slug },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, date, description } = frontmatter;

  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout
      pageTitle={`${title} - Yujeong Yun`}
      pageDescription={description}
      slug={`blog/${slug}`}
    >
      <div className="max-w-3xl">
        <BackButton />
        <TextContentWrapper>
          <BlogHeader title={title} date={date} />
          <Component components={MdxComponents} />
        </TextContentWrapper>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ blog: Blog }> = async (
  context
) => {
  const { slug } = context.params as Params;
  const { code, frontmatter } = await getMdxBySlug<BlogFrontmatter>(
    MDX_PATH,
    slug
  );

  return {
    props: {
      blog: { code, frontmatter, slug },
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const blogs = await getAllFrontMatters<BlogFrontmatter>(MDX_PATH);
  const paths = blogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogDetailPage;
