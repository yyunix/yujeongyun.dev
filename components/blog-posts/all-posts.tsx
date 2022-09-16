import { PostDataType } from "@/types/post";
import React, { useState } from "react";
import PostsHeader from "../layout/posts-header";
import PostsGrid from "./posts-grid";

interface AllBlogPostsProps {
  posts: PostDataType[];
  categories: string[];
}

const AllBlogPosts = ({ posts, categories }: AllBlogPostsProps) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const filterPostsByCategory = (category: string) => {
    const filteredByCategory = posts.filter((post) => {
      if (category === "All") {
        return post;
      } else {
        return post.category === category;
      }
    });
    setFilteredPosts(filteredByCategory);
  };

  return (
    <>
      <PostsHeader
        title="Blog"
        categories={["All", ...categories]}
        numOfPosts={filteredPosts.length}
        onFilterByCategory={filterPostsByCategory}
      />
      <PostsGrid posts={filteredPosts} />
    </>
  );
};

export default AllBlogPosts;
