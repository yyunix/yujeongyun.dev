import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostDataType } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "content/posts");

/**
 * Grab content and front matter from a post.md
 */
export function getPostData(postId: string): PostDataType {
  // Remove file extension from postId
  const postSlug = postId.replace(/\.md$/, "");

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    date: data.date,
    image: data.image,
    title: data.title,
    description: data.description,
    category: data.category,
    content,
  };
}

/**
 * Get all post file names
 */
export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

/**
 * Read all "posts" directory, extract metadata, and sort them by date
 */
export function getAllPosts(): PostDataType[] {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

/**
 * Get all categories
 */
export function getAllPostsCategories() {
  const postFiles = getPostsFiles();
  const allCategories = postFiles.map((postFile) => {
    return getPostData(postFile).category;
  });

  return allCategories;
}
