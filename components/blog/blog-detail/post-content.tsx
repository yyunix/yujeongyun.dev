import Image from "next/image";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { PostDataType } from "@/types/post";
import PostHeader from "./post-header";
import PostContentWrapper from "@/components/shared/post-content-wrapper";
import BackButton from "@/components/shared/back-button";

interface IPostContentProps {
  post: PostDataType;
}

const PostContent = ({ post }: IPostContentProps) => {
  const styleMarkdown = {
    ".codeStyle, pre, code, code span": {
      // Your SyntaxHighlighter override styles here
    },
    code: {
      background: "trasparent",
    },
    "pre code": {
      // Your code-block styles here
    },
    "h3 code": {
      color: "inherit",
    },
    "span.linenumber": {
      display: "none !important",
    },
    '[data="highlight"]': {
      // Your custom line highlight styles here
    },
  };

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
          style={dark}
          language={language}
          children={children}
          PreTag="div"
          showLineNumbers={true}
        />
      );
    },
  };

  return (
    <div>
      <BackButton />
      <article>
        <PostHeader title={post.title} date={post.date} />
        <PostContentWrapper>
          <ReactMarkdown components={markdownComponents}>
            {post.content}
          </ReactMarkdown>
        </PostContentWrapper>
      </article>
    </div>
  );
};

export default PostContent;
