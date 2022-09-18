import { useState } from "react";
import Image from "next/image";

import ReactMarkdown from "react-markdown";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import lua from "react-syntax-highlighter/dist/cjs/languages/prism/lua";

import style from "../../styles/markdown.css";

export default function BlogMarkdown({ markdown }: any) {
  const syntaxTheme = dark;

  interface PreNode {
    node?: any;
    children: Array<any>;
    position: object;
    properties: object;
    tagName: string;
    type: string;
  }

  const MarkdownComponents: object = {
    code({ node, inline, className, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      const hasMeta = node?.data?.meta;

      return match ? (
        <code
          // language={match[1]}
          // className="codeStyle"
          // wrapLines={hasMeta ? true : false}

          {...props}
        />
      ) : (
        <code {...props} />
      );
    },

    // pre: (pre: PreNode) => {
    //   const codeChunk = pre.node.children[0].children[0].value;

    //   // eslint-disable-next-line react-hooks/rules-of-hooks
    //   const [codeCopied, setCodeCopied] = useState(false);
    //   const handleCopyCode = (codeChunk: string) => {
    //     setCodeCopied(true);
    //     navigator.clipboard.writeText(codeChunk);
    //     setTimeout(() => {
    //       setCodeCopied(false);
    //     }, 5000);
    //   };
    //   return (
    //     <div className={codeCopied ? "copyCode active" : "copyCode"}>
    //       <button
    //         onClick={() => handleCopyCode(codeChunk)}
    //         aria-label="Copy code to clipboard"
    //       />
    //       <pre {...pre}></pre>
    //     </div>
    //   );
    // },
  };

  return (
    <ReactMarkdown components={MarkdownComponents}>
      {markdown.content}
    </ReactMarkdown>
  );
}
