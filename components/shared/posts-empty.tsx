interface PostsEmptyProps {
  title: string;
}

const PostsEmpty = ({ title }: PostsEmptyProps) => {
  return <div>No {title} found. Something will be posted soon!</div>;
};

export default PostsEmpty;
