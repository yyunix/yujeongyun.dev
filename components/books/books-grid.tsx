import { AllBooksFrontmatter } from "@/types/book";
import BookItem from "./book-item";

const BooksGrid = ({ books }: AllBooksFrontmatter) => {
  return (
    <ul>
      {books.map((book) => (
        <BookItem {...book} key={book.slug} />
      ))}
    </ul>
  );
};

export default BooksGrid;
