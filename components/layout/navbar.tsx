import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  console.log(theme);
  return (
    <div className="flex justify-between">
      <nav className="flex gap-4 capitalize font-semibold py-8">
        <Link href="/">about</Link>
        <Link href="/blog">blog</Link>
        <Link href="/books">Books</Link>
        <Link href="/learning">learning</Link>
      </nav>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        toggle
      </button>
    </div>
  );
};

export default Navbar;
