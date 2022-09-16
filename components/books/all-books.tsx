import { BookDataType } from "@/types/book";

import PostsHeader from "@/components/shared/posts-header";
import PostsEmpty from "@/components/shared/posts-empty";
import BooksGrid from "./books-grid";

interface IAllBooksProps {
  books: BookDataType[];
}

const AllBooks = ({ books }: IAllBooksProps) => {
  return (
    <>
      <PostsHeader title="📚 Book notes" />
      {books.length ? (
        <BooksGrid books={books} />
      ) : (
        <PostsEmpty title="books" />
      )}
    </>
  );
};

export default AllBooks;
