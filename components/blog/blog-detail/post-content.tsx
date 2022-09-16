import Image from "next/image";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vs,
  vsDark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTheme } from "next-themes";

import { PostDataType } from "@/types/post";
import PostHeader from "./post-header";

interface IPostContentProps {
  post: PostDataType;
}

const PostContent = ({ post }: IPostContentProps) => {
  const { theme } = useTheme();

  const imagePath = `/images/blog/${post.slug}/${post.image}`;

  const markdownComponents = {
    p: ({ node, children }: { children?: ReactNode; node?: any }) => {
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const metastring = image.properties.alt;
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
        const metaWidth = metastring.match(/{([^}]+)x/);
        const metaHeight = metastring.match(/x([^}]+)}/);
        const width = metaWidth ? metaWidth[1] : "768";
        const height = metaHeight ? metaHeight[1] : "432";
        const hasCaption = metastring?.toLowerCase().includes("{caption:");
        const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

        return (
          <div>
            <Image
              src={`/images/blog/${post.slug}/${image.properties.src}`}
              alt={alt}
              width={width}
              height={height}
            />
            {hasCaption ? <div aria-label={caption}>{caption}</div> : null}
          </div>
        );
      }

      return <p>{children}</p>;
    },
    code: ({ className, children }: any) => {
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article>
      <PostHeader title={post.title} image={imagePath} />
      <div className="prose prose-gray dark:prose-invert prose-a:text-teal-600 hover:prose-a:text-teal-500 dark:prose-a:text-teal-500 dark:hover:prose-a:text-teal-400 prose-img:rounded-xl prose-img:shadow-md prose-pre:bg-transparent prose-pre:p-0 dark:prose-pre:bg-transparent">
        <ReactMarkdown components={markdownComponents}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default PostContent;
