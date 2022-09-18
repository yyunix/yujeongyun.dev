import Image from "next/image";

interface BookHeaderProps {
  title: string;
  image: string;
  author: string;
  rating: number;
}

const BookHeader = ({ title, image, author, rating }: BookHeaderProps) => {
  return (
    <div className="flex gap-8">
      <div className="shrink-0">
        <Image src={image} alt={title} width={170} height={200} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>Author: {author}</p>
        <p>Rating: {rating}/10</p>
      </div>
    </div>
  );
};

export default BookHeader;
