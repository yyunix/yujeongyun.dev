import PostsGrid from "../posts/posts-grid";

interface FeaturedPostsProps {
  posts: any;
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
