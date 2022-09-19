import { AllBlogFrontmatter } from "@/types/blog";
import PostsEmpty from "../shared/posts-empty";
import PostsHeader from "../shared/posts-header";
import BlogGrid from "./blog-grid";

const AllBlogPosts = ({ blogPosts }: AllBlogFrontmatter) => {
  return (
    <>
      <PostsHeader
        title="✍🏼 Blog"
        description="Sometimes I write about stuff about 'How to do... in JavaScript'"
      />
      {blogPosts.length ? (
        <BlogGrid blogPosts={blogPosts} />
      ) : (
        <PostsEmpty title="blog articles" />
      )}
    </>
  );
};

export default AllBlogPosts;
