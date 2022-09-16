import { capitalizeFirstLetter } from "@/lib/common-util";
import { useRef, useState } from "react";

interface IPostsHeaderProps {
  title: string;
  description?: string;
}

const PostsHeader = ({ title, description }: IPostsHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200">
        {title}
      </h1>
      <p className="my-4">{description}</p>
    </div>
  );
};

export default PostsHeader;
