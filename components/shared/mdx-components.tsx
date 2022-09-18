export const components = {
  code: (code: any) => {
    return (
      <>
        {code.fileName && (
          <div className="w-full code-filename">{code.fileName}</div>
        )}
        <code id={code.id}>{code.children}</code>
      </>
    );
  },
};
