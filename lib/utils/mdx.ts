import fs from "fs";
import path from "path";
import { globby } from "globby";
import { bundleMDX } from "mdx-bundler";

import { rehypeMetaAttribute } from "@/lib/mdx-bundler/rehype-meta-attribute";
import { rehypeHighlightCode } from "@/lib/mdx-bundler/rehype-highlight-code";

const MDX_PATH = "content/blog";

async function getMdxBySlug<T>(mdxPath: string, slug: string) {
  return getMdxByPath<T>(path.join(mdxPath, `${slug}.mdx`));
}

async function getMdxByPath<T>(mdxPath: string) {
  const slug = path.basename(mdxPath).replace(path.extname(mdxPath), "");

  const source = fs.readFileSync(path.join(process.cwd(), mdxPath), "utf8");

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMetaAttribute,
        rehypeHighlightCode,
      ];

      return options;
    },
  });

  return {
    code,
    frontmatter: {
      ...(frontmatter as T),
      slug,
    },
  };
}

async function getAllFrontMatters<T>(mdxPath: string): Promise<T[]> {
  const paths = await globby([`${mdxPath}/**/*.mdx`]);
  const matters = await Promise.all(
    paths.map(async (filePath) => {
      const source = fs.readFileSync(filePath, "utf8");
      const { frontmatter } = await bundleMDX({ source });

      return {
        ...(frontmatter as T),
        slug: path.basename(filePath).replace(".mdx", ""),
        date: frontmatter.date,
      };
    })
  );

  return matters
    .filter(Boolean)
    .filter((post) => post.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export { getAllFrontMatters, getMdxBySlug, getMdxByPath };
