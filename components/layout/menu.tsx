import Link from "next/link";
import { useRouter } from "next/router";

const MENU = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

interface MenuProps {
  mobile?: boolean;
  closeSidebar?: () => void;
}

const Menu = ({ mobile = false, closeSidebar }: MenuProps) => {
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
          className={`${mobile ? "py-4 border-b border-faint flex" : ""}`}
        >
          <Link href={menu.href}>
            <a
              className={`${mobile ? "w-full" : "hover:text-accent"} ${
                router.pathname === menu.href ? "text-accent" : ""
              }`}
              onClick={closeSidebar}
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
