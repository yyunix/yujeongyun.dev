import React from "react";
import PostsGrid from "./posts-grid";

interface AllPostsProps {
  posts: any;
}

const AllPosts = ({ posts }: AllPostsProps) => {
  return (
    <section>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
