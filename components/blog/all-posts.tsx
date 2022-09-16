import { PostDataType } from "@/types/post";
import PostsEmpty from "../shared/posts-empty";
import PostsHeader from "../shared/posts-header";
import PostsGrid from "./posts-grid";

interface AllBlogPostsProps {
  posts: PostDataType[];
}

const AllBlogPosts = ({ posts }: AllBlogPostsProps) => {
  return (
    <>
      <PostsHeader
        title="✍🏼 Blog"
        description="Sometimes I write about stuff about 'How to do... in JavaScript'"
      />
      {posts.length ? (
        <PostsGrid posts={posts} />
      ) : (
        <PostsEmpty title="blog articles" />
      )}
    </>
  );
};

export default AllBlogPosts;
