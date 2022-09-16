import { useState } from "react";

import { BookDataType } from "@/types/book";

import PostsHeader from "../shared/posts-header";
import BooksGrid from "./books-grid";
import PostsEmpty from "../shared/posts-empty";

interface IAllBooksProps {
  books: BookDataType[];
  categories: string[];
}

const AllBooks = ({ books, categories }: IAllBooksProps) => {
  const [filteredBooks, setFilteredBooks] = useState(books);

  const filterBooksByCategory = (category: string) => {
    const filteredByCategory = books.filter((book) => {
      if (category === "All") {
        return book;
      } else {
        return book.category === category;
      }
    });
    setFilteredBooks(filteredByCategory);
  };

  return (
    <>
      <PostsHeader
        title="Books"
        categories={["All", ...categories]}
        numOfPosts={filteredBooks.length}
        onFilterByCategory={filterBooksByCategory}
      />
      {books.length ? (
        <BooksGrid books={filteredBooks} />
      ) : (
        <PostsEmpty title="books" />
      )}
    </>
  );
};

export default AllBooks;
