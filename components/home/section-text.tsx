import { ReactNode } from "react";

interface ISectionText {
  children: ReactNode;
}

const SectionText = ({ children }: ISectionText) => {
  return (
    <p className="mt-2 mb-4 prose prose-light dark:prose-dark line-clamp-2">
      {children}
    </p>
  );
};

export default SectionText;
