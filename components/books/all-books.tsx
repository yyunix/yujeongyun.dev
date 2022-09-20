import PostsHeader from "@/components/shared/page-title";
import PostsEmpty from "@/components/shared/posts-empty";
import BooksGrid from "./books-grid";
import { AllBooksFrontmatter } from "@/types/book";
import BookIcon from "@/assets/book.svg";

const AllBooks = ({ books }: AllBooksFrontmatter) => {
  return (
    <>
      <PostsHeader title="Book notes" icon={<BookIcon />} />
      {books.length ? (
        <BooksGrid books={books} />
      ) : (
        <PostsEmpty title="books" />
      )}
    </>
  );
};

export default AllBooks;
