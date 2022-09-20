import { ReactNode } from "react";

interface IPostContentWrapperProps {
  children: ReactNode;
}

const PostContentWrapper = ({ children }: IPostContentWrapperProps) => {
  return (
    <div className="prose-sm sm:prose-base prose-h2:text-accent prose-h3:text-accent  prose-h4:text-accent prose-h5:text-accent  prose-h1:font-bold prose-h2:font-bold  prose-h3:font-bold prose-light dark:prose-dark sm:prose-li:m-0 prose-li:m-0 prose-a:underline hover:prose-a:text-accent  dark:hover:prose-a:text-accent prose-img:rounded-lg prose-img:shadow-md prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 max-w-none prose-ul:list-disc">
      {children}
    </div>
  );
};

export default PostContentWrapper;
