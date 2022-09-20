import Image from "next/image";
import Link from "next/link";
import { BookFrontmatter } from "@/types/book";

type BookItemProps = Omit<BookFrontmatter, "rating" | "date">;

const BookItem = ({
  title,
  description,
  slug,
  image,
  author,
}: BookItemProps) => {
  const linkPath = `/books/${slug}`;
  const imagePath = `/images/books/${image}`;

  return (
    <li className="pb-6 ">
      <Link href={linkPath}>
        <a className="flex gap-4 items-start">
          <div className="hidden sm:flex shrink-0">
            <Image src={imagePath} alt={title} width={90} height={105} />
          </div>
          <div>
            <h3 className="item-title">{title}</h3>
            <p className="text-sm text-fore-subtle mb-2">by {author}</p>
            <p className="text-fore-secondary">{description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default BookItem;
