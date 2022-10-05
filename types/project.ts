export interface ProjectFrontmatter {
  title: string;
  date: Date;
  description: string;
  source: string;
  live: string;
  tags: string[];
  thumbnail: string;
  id: string;
}

export interface AllProjectsFrontmatter {
  projects: ProjectFrontmatter[];
}
