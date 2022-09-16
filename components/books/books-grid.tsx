import { BookDataType } from "@/types/book";
import BookItem from "./book-item";

interface IBooksGridProps {
  books: BookDataType[];
}
const BooksGrid = ({ books }: IBooksGridProps) => {
  return (
    <ul>
      {books.map((book) => (
        <BookItem {...book} key={book.slug} />
      ))}
    </ul>
  );
};

export default BooksGrid;
