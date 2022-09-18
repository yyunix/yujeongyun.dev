import Image from "next/image";

interface BookHeaderProps {
  title: string;
  image: string;
  author: string;
  rating: number;
}

const BookHeader = ({ title, image, author, rating }: BookHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pb-8 sm:pb-0 border-b border-gray-300 dark:border-gray-800 sm:border-none">
      <div className="shrink-0">
        <Image src={image} alt={title} width={170} height={200} />
      </div>
      <div>
        <h1 className="mb-4 text-2xl md:text-4xl font-bold">{title}</h1>
        <p>Author: {author}</p>
        <p>Rating: {rating}/10</p>
      </div>
    </div>
  );
};

export default BookHeader;
