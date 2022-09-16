import Link from "next/link";

interface IPostItemProps {
  title: string;
  description: string;
  slug: string;
  date: Date;
}

const PostItem = ({ title, slug, description, date }: IPostItemProps) => {
  const linkPath = `/blog/${slug}`;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <li className="">
      <Link href={linkPath}>
        <a className="px-5 py-2 -mx-5 hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-between rounded-lg">
          <div>
            <h3 className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-violet-700">
              {title}
            </h3>
            <div className="prose prose-gray dark:prose-invert">
              <p>{description}</p>
            </div>
          </div>
          <div>{formattedDate}</div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
