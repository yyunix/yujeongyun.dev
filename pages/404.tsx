import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h1 className="mb-2 font-bold text-4xl sm:text-6xl">404</h1>
      <h2 className="mb-6 text-lg sm:text-2xl">Page not found</h2>
      <Link href="/">
        <a className="underline text-accent font-bold">Return home</a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
