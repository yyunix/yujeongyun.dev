interface IPostHeaderProps {
  title: string;
  date: Date;
}

const PostHeader = ({ title, date }: IPostHeaderProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div>
      <time className="text-sm">{formattedDate}</time>
      <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200">
        {title}
      </h1>
    </div>
  );
};

export default PostHeader;
