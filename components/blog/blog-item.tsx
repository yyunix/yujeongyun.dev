import { BlogFrontmatter } from "@/types/blog";
import Link from "next/link";

const BlogItem = ({ title, slug, description, date }: BlogFrontmatter) => {
  const linkPath = `/blog/${slug}`;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <li>
      <Link href={linkPath}>
        <a className="px-7 md:px-5 py-4 -mx-7 md:-mx-5 hover:bg-gray-100 dark:hover:bg-gray-800 flex flex-col md:flex-row gap-2 md:gap-10 rounded-lg">
          <time className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            {formattedDate}
          </time>
          <div>
            <h3 className="item-title">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default BlogItem;
