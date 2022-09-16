import Head from "next/head";

import { BookDataType } from "@/types/book";
import { getAllBooks } from "@/lib/books-util";
import AllBooks from "@/components/books/all-books";

interface IAllBooksPageProps {
  books: BookDataType[];
}

const AllBooksPage = ({ books }: IAllBooksPageProps) => {
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

export function getStaticProps() {
  const allBooks = getAllBooks();

  return {
    props: {
      books: allBooks,
    },
  };
}

export default AllBooksPage;
