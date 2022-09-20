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
            Here&apos;s my attempt at writing blog posts on my experience as a
            software developer. This is a place where I solidify my learnings
            and maybe help others at the same time. I generally write about
            problems I encountered and how I solved them. I welcome critiques,
            comments or suggestions. Should you have any, please contact me at{" "}
            <a
              href="mailto:yyunix36@gmil.acom"
              className="hover:text-accent underline decoration-accent"
            >
              yyunix36[at]gmail.com
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
