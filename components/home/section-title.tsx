import { ReactNode } from "react";

interface ISectionTitle {
  children: ReactNode;
}

const SectionTitle = ({ children }: ISectionTitle) => {
  return <h2 className="text-lg md:text-2xl font-semibold mb-3">{children}</h2>;
};

export default SectionTitle;
