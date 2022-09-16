import Head from "next/head";

import { BookDataType } from "@/types/book";
import { getAllBookCategories, getAllBooks } from "@/lib/books-util";
import AllBooks from "@/components/books/all-books";

interface IAllBooksPageProps {
  books: BookDataType[];
  categories: string[];
}

const AllBooksPage = ({ books, categories }: IAllBooksPageProps) => {
  return (
    <div>
      <Head>
        <title>Yujeong&apos;s Digital Space | Software Developer</title>
        <meta name="description" content="JavaScript blog" />
      </Head>
      <AllBooks books={books} categories={categories} />
    </div>
  );
};

export function getStaticProps() {
  const allBooks = getAllBooks();
  const bookCategories = getAllBookCategories();

  return {
    props: {
      books: allBooks,
      categories: bookCategories,
    },
  };
}

export default AllBooksPage;
