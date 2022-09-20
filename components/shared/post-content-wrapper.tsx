import { ReactNode } from "react";

interface IPostContentWrapperProps {
  children: ReactNode;
}

const PostContentWrapper = ({ children }: IPostContentWrapperProps) => {
  return (
    <div className="prose-sm sm:prose-base prose-h1:font-bold prose-h2:font-bold prose-light dark:prose-dark prose-a:underline prose-a:font-bold hover:prose-a:text-teal-200  dark:hover:prose-a:text-teal-200 prose-img:rounded-lg prose-img:shadow-md prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 max-w-none prose-ul:list-disc">
      {children}
    </div>
  );
};

export default PostContentWrapper;
