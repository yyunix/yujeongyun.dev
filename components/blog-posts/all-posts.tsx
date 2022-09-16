import React from "react";
import PostsGrid from "./posts-grid";

interface AllBlogPostsProps {
  posts: any;
}

const AllBlogPosts = ({ posts }: AllBlogPostsProps) => {
  return (
    <>
      <h1>Blog</h1>
      <PostsGrid posts={posts} />
    </>
  );
};

export default AllBlogPosts;
