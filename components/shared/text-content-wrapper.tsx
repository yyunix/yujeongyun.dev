import { ReactNode } from "react";

interface TextContentWrapperProps {
  children: ReactNode;
}

const TextContentWrapper = ({ children }: TextContentWrapperProps) => {
  return (
    <div className="prose-sm sm:prose-base prose-h1:font-bold prose-h2:font-bold  prose-h3:font-bold prose-p:text-fore-subtle  sm:prose-li:m-0 prose-li:m-0 prose-li:text-fore-subtle prose-a:underline hover:prose-a:text-accent  dark:hover:prose-a:text-accent prose-img:rounded-lg prose-img:shadow-md prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 max-w-none prose-ul:list-disc">
      {children}
    </div>
  );
};

export default TextContentWrapper;
