import { AllBlogFrontmatter } from "@/types/blog";
import BlogItem from "./blog-item";

const BlogGrid = ({ blogPosts }: AllBlogFrontmatter) => {
  return (
    <ul>
      {blogPosts.map((post) => (
        <BlogItem {...post} key={post.slug} />
      ))}
    </ul>
  );
};

export default BlogGrid;
