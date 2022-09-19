export interface BookFrontmatter {
  slug: string;
  date: Date;
  image: string;
  title: string;
  description: string;
  author: string;
  rating: number;
}

export interface AllBooksFrontmatter {
  books: BookFrontmatter[];
}
