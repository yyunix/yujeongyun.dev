import Image from "next/image";
import Link from "next/link";

interface PostItemProps {
  title: string;
  image: string;
  slug: string;
}

const PostItem = ({ title, image, slug }: PostItemProps) => {
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <div>
      <li>
        <Link href={linkPath}>
          <a>
            <div>
              <Image
                src={imagePath}
                alt={title}
                width={300}
                height={200}
                layout="responsive"
              />
            </div>
            <div>
              <h3>{title}</h3>
            </div>
          </a>
        </Link>
      </li>
    </div>
  );
};

export default PostItem;
