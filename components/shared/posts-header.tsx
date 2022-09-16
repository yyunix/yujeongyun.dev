import { capitalizeFirstLetter } from "@/lib/common-util";
import { useRef, useState } from "react";

interface IPostsHeaderProps {
  title: string;
  categories: string[];
  numOfPosts: number;
  onFilterByCategory: (category: string) => void;
}

const PostsHeader = ({
  title,
  categories,
  numOfPosts,
  onFilterByCategory,
}: IPostsHeaderProps) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const onCategoryClick = (category: string) => {
    onFilterByCategory(category);
    setActiveCategory(category);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <div className="flex gap-3">
          <p>
            {numOfPosts} {title.toLowerCase()}
          </p>
          <p>{categories.length - 1} categories</p>
        </div>
      </div>
      <ul className="flex gap-4 mb-2">
        Categories:
        {categories.map((category) => (
          <li key={category} onClick={() => onCategoryClick(category)}>
            <button
              className={
                activeCategory === category
                  ? "underline underline-offset-2"
                  : ""
              }
            >
              {capitalizeFirstLetter(category)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsHeader;
