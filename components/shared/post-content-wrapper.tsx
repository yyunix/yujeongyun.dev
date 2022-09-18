import { ReactNode } from "react";

interface IPostContentWrapperProps {
  children: ReactNode;
}

const PostContentWrapper = ({ children }: IPostContentWrapperProps) => {
  return (
    <div className="prose prose-gray dark:prose-invert prose-a:text-teal-600 hover:prose-a:text-teal-500 dark:prose-a:text-teal-500 dark:hover:prose-a:text-teal-400 prose-img:rounded-lg prose-img:shadow-md prose-pre:bg-transparent prose-pre:p-0 dark:prose-pre:bg-transparent pt-10 max-w-none">
      {children}
    </div>
  );
};

export default PostContentWrapper;
