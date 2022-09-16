import Image from "next/image";
import Link from "next/link";

interface PostItemProps {
  title: string;
  description: string;
  slug: string;
  category: string;
}

const PostItem = ({ title, slug, description, category }: PostItemProps) => {
  const linkPath = `/blog/${slug}`;

  return (
    <li className="pb-6">
      <button className="uppercase text-sm">#{category}</button>
      <Link href={linkPath}>
        <a>
          <h3>{title}</h3>
        </a>
      </Link>
      <p>{description}</p>
    </li>
  );
};

export default PostItem;
