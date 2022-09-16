import React from "react";
import PostsHeader from "../layout/posts-header";
import PostsGrid from "./posts-grid";

interface AllBlogPostsProps {
  posts: any;
}

const AllBlogPosts = ({ posts }: AllBlogPostsProps) => {
  return (
    <>
      <PostsGrid posts={posts} />
    </>
  );
};

export default AllBlogPosts;
