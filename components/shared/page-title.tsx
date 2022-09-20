import { ReactNode } from "react";

interface PageTitleProps {
  title: string;
  description?: string;
  icon: ReactNode;
}

const PageTitle = ({ title, icon, description }: PageTitleProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 rounded-full p-2 bg-back-secondary text-accent">
          {icon}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-fore-primary tracking-tight">
          {title}
        </h1>
      </div>
      {description && <p className="my-4 text-fore-secondary">{description}</p>}
    </div>
  );
};

export default PageTitle;
