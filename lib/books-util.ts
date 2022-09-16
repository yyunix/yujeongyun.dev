import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BookDataType } from "@/types/book";

const booksDirectory = path.join(process.cwd(), "content/books");

/**
 * Grab content and front matter from a book.md
 */
export function getBookData(bookId: string): BookDataType {
  // Remove file extension from bookId
  const bookSlug = bookId.replace(/\.md$/, "");

  const filePath = path.join(booksDirectory, `${bookSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: bookSlug,
    date: data.date,
    image: data.image,
    title: data.title,
    description: data.description,
    author: data.author,
    rating: data.rating,
    content,
  };
}

/**
 * Get all book file names
 */
export function getBooksFiles() {
  return fs.readdirSync(booksDirectory);
}

/**
 * Read all "books" directory, extract metadata, and sort them by date
 */
export function getAllBooks(): BookDataType[] {
  const bookFiles = getBooksFiles();

  const allBooks = bookFiles.map((bookFile) => {
    return getBookData(bookFile);
  });

  const sortedBooks = allBooks.sort((bookA, bookB) =>
    bookA.date > bookB.date ? -1 : 1
  );

  return sortedBooks;
}
