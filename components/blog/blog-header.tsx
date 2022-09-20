import { BlogFrontmatter } from "@/types/blog";

type BlogHeaderProps = Pick<BlogFrontmatter, "title" | "date">;

const BlogHeader = ({ title, date }: BlogHeaderProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <time className="text-sm">{formattedDate}</time>
      <h1>{title}</h1>
    </div>
  );
};

export default BlogHeader;
