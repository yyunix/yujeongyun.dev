import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { getBookData, getBooksFiles } from "@/lib/books-util";
import { BookDataType } from "@/types/book";
import Head from "next/head";
import BookContent from "@/components/book-post-detail/book-content";

interface IBookDetailPageProps {
  book: BookDataType;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const BookDetailPage = ({ book }: IBookDetailPageProps) => {
  return (
    <div>
      <Head>
        <title>{book.title}</title>
        <meta name="description" content={book.description} />
      </Head>
      <BookContent book={book} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const bookData = getBookData(slug);

  return {
    props: {
      book: bookData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const bookFileNames = getBooksFiles();

  const slugs = bookFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default BookDetailPage;
