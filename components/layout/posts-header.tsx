import { useRef, useState } from "react";

interface IPostsHeaderProps {
  title: string;
  categories: string[];
  onSearchQuery: (...args: any[]) => void;
  numOfPosts: number;
  isSearching: boolean;
  clearSearch: any;
  onFilterByCategory: any;
}

const PostsHeader = ({
  title,
  categories,
  onSearchQuery,
  numOfPosts,
  isSearching,
  clearSearch,
  onFilterByCategory,
}: IPostsHeaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
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
          {!isSearching && <p>{categories.length - 1} categories</p>}
        </div>
      </div>
      <ul className="flex gap-4 mb-2">
        {categories.map((category) => (
          <li key={category} onClick={() => onCategoryClick(category)}>
            <button
              className={
                activeCategory === category
                  ? "underline underline-offset-2"
                  : ""
              }
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search by title"
          className="w-full py-1 px-3 rounded-md border border-gray-400 focus:outline-none"
          onChange={onSearchQuery}
        />
        <button
          className="absolute right-2.5 top-1/2 -translate-y-1/2"
          onClick={() => clearSearch(inputRef)}
        >
          {isSearching ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default PostsHeader;
