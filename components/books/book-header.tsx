import Image from "next/image";

interface BookHeaderProps {
  title: string;
  image: string;
  author: string;
  rating: number;
}

const BookHeader = ({ title, image, author, rating }: BookHeaderProps) => {
  const imagePath = `/images/books/${image}`;

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pb-8 sm:pb-0 border-b border-faint sm:border-none">
      <div className="shrink-0">
        <Image src={imagePath} alt={title} width={170} height={200} />
      </div>
      <div>
        <h1 className="mb-4 text-2xl md:text-4xl font-bold">{title}</h1>
        <div>Author: {author}</div>
        <div>Rating: {rating}/10</div>
      </div>
    </div>
  );
};

export default BookHeader;
