import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex gap-4 uppercase py-8">
      <Link href="/">about</Link>
      <Link href="/blog">blog</Link>
      <Link href="/books">Books</Link>
      <Link href="/learning">learning</Link>
    </nav>
  );
};

export default Navbar;
