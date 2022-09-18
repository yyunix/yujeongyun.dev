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
    <li className="pb-6 ">
      <Link href={linkPath}>
        <a className="flex gap-4 items-start ">
          <div className="hidden sm:flex shrink-0">
            <Image src={imagePath} alt={title} width={90} height={105} />
          </div>
          <div>
            <h3 className="font-bold text-transparent  bg-clip-text bg-gradient-to-r  from-blue-400 to-purple-700 underline decoration-2 decoration-blue-400 dark:decoration-blue-600">
              {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              by {author}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default BookItem;
