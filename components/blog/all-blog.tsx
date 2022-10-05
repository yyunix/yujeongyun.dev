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
        description={
          <>
            This is a place where I solidify my learnings and maybe help others
            at the same time. I generally write about problems I encountered and
            how I solved them. I welcome critiques, comments or suggestions.
            Should you have any, please contact me at{" "}
            <a
              href="mailto:christina5707@gmail.acom"
              className="hover:text-accent underline decoration-accent"
            >
              christina5707[at]gmail.com
            </a>
            .
          </>
        }
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
