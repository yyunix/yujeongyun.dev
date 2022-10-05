import { ReactNode, useState } from "react";
import Head from "next/head";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
  pageDescription?: string;
  slug?: string;
  previewImage?: string;
}

const Layout = ({
  children,
  pageTitle,
  pageDescription,
  slug,
  previewImage,
}: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <title>{pageTitle}</title>
        <meta
          name="description"
          content={pageDescription ? pageDescription : ""}
        />
        <meta name="title" property="og:title" content={pageTitle} />
        <meta
          name="description"
          property="og:description"
          content={pageDescription ? pageDescription : ""}
        />
        <meta
          property="og:url"
          content={`${slug ? `yyunix.dev/${slug}` : "yyunix.dev/"}`}
        />

        <meta property="og:site_name" content="Yujeong Yun" />
        <meta property="og:type" content="website" />
        <meta
          name="image"
          property="og:image"
          content={`${
            previewImage
              ? previewImage
              : "https://yyunix.dev/images/site/twitter-card.png"
          }`}
        />
        <meta property="og:image:alt" content="Yujeong Yun" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
      <main className="pt-7 pb-10 sm:pt-14 sm:pb-20 max-w-5xl m-auto px-6 md:px-16 overflow-hidden">
        {children}
      </main>
    </>
  );
};

export default Layout;
