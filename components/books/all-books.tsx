import { BookDataType } from "@/types/book";
import BooksGrid from "./books-grid";

interface IAllBooksProps {
  books: BookDataType[];
}

const AllBooks = ({ books }: IAllBooksProps) => {
  return (
    <>
      <h1>Books</h1>
      <BooksGrid books={books} />
    </>
  );
};

export default AllBooks;
