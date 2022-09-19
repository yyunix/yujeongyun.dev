export const MdxComponents = {
  code: (code: any) => {
    return (
      <>
        {code.fileName && (
          <div className="w-full code-filename">{code.fileName}</div>
        )}
        <code id={code.id}>
          {typeof code.children === "string" ? (
            code.children
          ) : (
            <div className="main-code">{code.children}</div>
          )}
        </code>
      </>
    );
  },
};
