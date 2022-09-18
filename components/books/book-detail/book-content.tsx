import Image from "next/image";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import { BookDataType } from "@/types/book";
import BookHeader from "./book-header";
import PostContentWrapper from "@/components/shared/post-content-wrapper";
import BackButton from "@/components/shared/back-button";

interface IBookContentProps {
  book: BookDataType;
}

const BookContent = ({ book }: IBookContentProps) => {
  const imagePath = `/images/books/${book.image}`;

  const markdownComponents = {
    p: ({ node, children }: { children?: ReactNode; node?: any }) => {
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const metastring = image.properties.alt;
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
        const metaWidth = metastring.match(/{([^}]+)x/);
        const metaHeight = metastring.match(/x([^}]+)}/);
        const width = metaWidth ? metaWidth[1] : "300";
        const height = metaHeight ? metaHeight[1] : "400";
        const hasCaption = metastring?.toLowerCase().includes("{caption:");
        const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

        return (
          <div>
            <Image
              src={`/images/books/${image.properties.src}`}
              alt={alt}
              width={width}
              height={height}
            />
            {hasCaption ? <div aria-label={caption}>{caption}</div> : null}
          </div>
        );
      }

      return <p>{children}</p>;
    },
  };

  return (
    <div>
      <BackButton />
      <article>
        <BookHeader
          title={book.title}
          image={imagePath}
          author={book.author}
          rating={book.rating}
        />
        <PostContentWrapper>
          <ReactMarkdown components={markdownComponents}>
            {book.content}
          </ReactMarkdown>
        </PostContentWrapper>
      </article>
    </div>
  );
};

export default BookContent;
