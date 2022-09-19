export interface BlogFrontmatter {
  slug: string;
  date: Date;
  title: string;
  description: string;
}

export interface AllBlogFrontmatter {
  blogPosts: BlogFrontmatter[];
}
