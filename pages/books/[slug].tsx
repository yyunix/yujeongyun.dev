import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Head from "next/head";
import { useMemo } from "react";
import { ParsedUrlQuery } from "querystring";
import { getMDXComponent } from "mdx-bundler/client";
import { BookFrontmatter } from "@/types/book";
import { getAllFrontMatters, getMdxBySlug } from "@/lib/utils/mdx";
import TextContentWrapper from "@/components/shared/text-content-wrapper";
import BookHeader from "@/components/books/book-header";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Book {
  frontmatter: BookFrontmatter;
  code: string;
}

const MDX_PATH = "content/books";

const BookDetailPage = ({
  book: { code, frontmatter },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, description, image, author, rating } = frontmatter;

  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <TextContentWrapper>
        <BookHeader
          title={title}
          image={image}
          author={author}
          rating={rating}
        />
        <Component components={{ Image }} />
      </TextContentWrapper>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ book: Book }> = async (
  context
) => {
  const { slug } = context.params as Params;
  const { code, frontmatter } = await getMdxBySlug<BookFrontmatter>(
    MDX_PATH,
    slug
  );

  return {
    props: {
      book: { code, frontmatter },
      revalidate: 600,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const books = await getAllFrontMatters<BookFrontmatter>(MDX_PATH);

  const paths = books.map((book) => ({
    params: {
      slug: book.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default BookDetailPage;
