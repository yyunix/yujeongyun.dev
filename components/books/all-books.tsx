import {
  ChangeEvent,
  MutableRefObject,
  RefObject,
  useEffect,
  useMemo,
  useState,
} from "react";

import { debounce } from "@/lib/common-util";
import { BookDataType } from "@/types/book";

import PostsHeader from "../layout/posts-header";
import BooksGrid from "./books-grid";

interface IAllBooksProps {
  books: BookDataType[];
  categories: string[];
}

const AllBooks = ({ books, categories }: IAllBooksProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const onSearchQuery = useMemo(
    () =>
      debounce((e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      }, 250),
    []
  );

  const clearSearch = (ref: RefObject<HTMLInputElement>) => {
    setSearchQuery("");
    ref.current!.value = "";
  };

  useEffect(() => {
    const filteredByQuery = books.filter((book) => {
      if (searchQuery === "") {
        return book;
      } else if (book.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return book;
      }
    });
    setFilteredBooks(filteredByQuery);
  }, [searchQuery, books]);

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
        onSearchQuery={onSearchQuery}
        onFilterByCategory={filterBooksByCategory}
        isSearching={searchQuery.length > 0}
        clearSearch={clearSearch}
      />
      <BooksGrid books={filteredBooks} />
    </>
  );
};

export default AllBooks;
