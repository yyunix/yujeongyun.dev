import Link from "next/link";
import { useRouter } from "next/router";

const MENU = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/books", label: "Books" },
  { href: "/learning", label: "Learning" },
];

interface IMenuProps {
  mobile?: boolean;
}

const Menu = ({ mobile = false }: IMenuProps) => {
  const router = useRouter();

  return (
    <ul
      className={`${
        mobile
          ? "flex h-4/5 flex-col justify-center px-12"
          : "hidden sm:flex space-x-8"
      }`}
    >
      {MENU.map((menu) => (
        <li
          key={menu.label}
          className={`${
            mobile
              ? "py-4 border-b border-gray-900/10 dark:border-gray-300/10 flex"
              : ""
          }`}
        >
          <Link href={menu.href}>
            <a
              className={`${
                mobile
                  ? "w-full"
                  : "hover:text-indigo-500 dark:hover:text-indigo-400"
              } ${
                router.pathname === menu.href
                  ? "text-indigo-500 dark:text-indigo-300"
                  : ""
              }`}
            >
              {menu.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
