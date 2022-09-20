import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { AllBooksFrontmatter, BookFrontmatter } from "@/types/book";
import { getAllFrontMatters } from "@/lib/utils/mdx";
import AllBooks from "@/components/books/all-books";

const MDX_PATH = "content/books";

const AllBooksPage = ({
  books,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Yujeong&apos;s Digital Space | Software Developer</title>
        <meta name="description" content="JavaScript blog" />
      </Head>
      <AllBooks books={books} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<AllBooksFrontmatter> = async () => {
  const allBooks = await getAllFrontMatters<BookFrontmatter>(MDX_PATH);

  return {
    props: {
      books: allBooks,
    },
  };
};

export default AllBooksPage;
