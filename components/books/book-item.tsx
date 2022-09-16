import Image from "next/image";
import Link from "next/link";

interface IBookItemProps {
  title: string;
  description: string;
  slug: string;
  image: string;
  author: string;
}

const BookItem = ({
  image,
  title,
  author,
  slug,
  description,
}: IBookItemProps) => {
  const linkPath = `/books/${slug}`;
  const imagePath = `/images/books/${image}`;

  return (
    <li className="pb-6 flex gap-4 items-start">
      <div className="flex shrink-0">
        <Image src={imagePath} alt={title} width={90} height={105} />
      </div>
      <div>
        <Link href={linkPath}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
        <p>by {author}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default BookItem;
