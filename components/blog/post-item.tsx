import Link from "next/link";

interface IPostItemProps {
  title: string;
  description: string;
  slug: string;
  category: string;
}

const PostItem = ({ title, slug, description, category }: IPostItemProps) => {
  const linkPath = `/blog/${slug}`;

  return (
    <li className="pb-6">
      <p className="uppercase text-sm">{category}</p>
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
