import { AllBlogFrontmatter } from "@/types/blog";
import PencilIcon from "@/assets/pencil.svg";
import PostsEmpty from "../shared/posts-empty";
import PageTitle from "../shared/page-title";
import BlogGrid from "./blog-grid";

const AllBlogPosts = ({ blogPosts }: AllBlogFrontmatter) => {
  return (
    <>
      <PageTitle
        title="Blog"
        icon={<PencilIcon />}
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
