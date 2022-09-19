import React from "react";

interface IPostHeaderProps {
  title: string;
  date: Date;
}

const MdxFrontmatter = ({ title, date }: IPostHeaderProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <time className="text-sm">{formattedDate}</time>
      <h1 className="">{title}</h1>
    </div>
  );
};

export default MdxFrontmatter;
