import { ReactNode, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
      <main className="pt-7 pb-10 sm:pt-14 sm:pb-20 max-w-4xl m-auto px-6 md:px-16 overflow-hidden">
        {children}
      </main>
    </>
  );
};

export default Layout;
