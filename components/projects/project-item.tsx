import Image from "next/image";
import Link from "next/link";
import { ProjectFrontmatter } from "@/types/project";

type ProjectItemProps = Omit<ProjectFrontmatter, "rating" | "date">;

//https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.tsx
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const ProjectItem = ({
  title,
  description,
  thumbnail,
  source,
  live,
  tags,
}: ProjectItemProps) => {
  const imagePath = `/images/projects/${thumbnail}`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div className="flex flex-col w-full rounded-xl  overflow-hidden">
      <div className="w-full">
        <div className="flex shrink-0 h-[150px] lg:h-[174px]  relative">
          <Image
            src={imagePath}
            alt={title}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </div>
      </div>
      <div className="bg-back-secondary p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <h3 className="item-title">
            <a href={live}>{title}</a>
          </h3>
          {source && (
            <a
              href={source}
              className="px-2 text-[12px] bg-back-primary rounded-sm"
            >
              source
            </a>
          )}
        </div>
        <p className="text-fore-secondary text-sm">{description}</p>
        <ul className="flex flex-wrap gap-1 mt-auto pt-6">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-[11px] rounded-3xl border border-fore-subtle px-2"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
