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
          <div className="flex shrink-0">
            <Image src={imagePath} alt={title} width={90} height={105} />
          </div>
          <div>
            <h3 className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-violet-700 underline">
              {title}
            </h3>
            <p>by {author}</p>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default BookItem;
