import Image from "next/image";

interface PostHeaderProps {
  title: string;
  image: string;
}

const PostHeader = ({ title, image }: PostHeaderProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </div>
  );
};

export default PostHeader;
