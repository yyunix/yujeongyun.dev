import fs from "fs";
import path from "path";
import { globby } from "globby";
import { bundleMDX } from "mdx-bundler";
import { IFrontmatter } from "@/types/frontmatter";
import { rehypeMetaAttribute } from "./rehype-meta-attribute";
import { rehypeHighlightCode } from "./rehype-highlight-code";

const MDX_PATH = "content/posts";

async function getMdxBySlug(slug: string) {
  return getMdxByPath(path.join(MDX_PATH, `${slug}.mdx`));
}

async function getMdxByPath(mdxPath: string) {
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
      ...(frontmatter as IFrontmatter),
      slug,
    } as IFrontmatter,
  };
}

async function getAllFrontMatters(): Promise<IFrontmatter[]> {
  const paths = await globby([`${MDX_PATH}/**/*.mdx`]);
  const matters = await Promise.all(
    paths.map(async (filePath) => {
      const source = fs.readFileSync(filePath, "utf8");
      const { code, frontmatter } = await bundleMDX({ source });

      return {
        ...(frontmatter as IFrontmatter),
        slug: path.basename(filePath).replace(".mdx", ""),
      };
    })
  );
  return matters
    .filter(Boolean)
    .filter((post) => post.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export { getAllFrontMatters, getMdxBySlug, getMdxByPath };
