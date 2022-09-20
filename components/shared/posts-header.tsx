interface IPostsHeaderProps {
  title: string;
  description?: string;
}

const PostsHeader = ({ title, description }: IPostsHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-fore-primary tracking-tight ">
        {title}
      </h1>
      <p className="my-4 text-fore-secondary">{description}</p>
    </div>
  );
};

export default PostsHeader;
