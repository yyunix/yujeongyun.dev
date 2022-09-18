interface IPostsEmptyProps {
  title: string;
}

const PostsEmpty = ({ title }: IPostsEmptyProps) => {
  return <div>No {title} found. Something will be posted soon!</div>;
};

export default PostsEmpty;
