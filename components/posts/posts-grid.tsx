import { PostDataType } from "@/types/post";
import PostItem from "./post-item";

interface PostsGridProps {
  posts: PostDataType[];
}

const PostsGrid = ({ posts }: PostsGridProps) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem {...post} key={post.slug} />
      ))}
    </ul>
  );
};

export default PostsGrid;
