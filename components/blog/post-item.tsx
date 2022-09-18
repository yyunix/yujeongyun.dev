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
    <li>
      <Link href={linkPath}>
        <a className="md:px-5 py-4 md:-mx-5 md:hover:bg-gray-100 md:dark:hover:bg-gray-800 flex flex-col md:flex-row gap-2 md:gap-10 rounded-lg">
          <time className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            {formattedDate}
          </time>
          <div>
            <h3 className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-700 underline decoration-2 decoration-blue-400 dark:decoration-blue-600">
              {title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
