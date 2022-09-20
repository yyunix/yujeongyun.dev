import { MouseEvent, useRef } from "react";
import Menu from "./menu";
import CloseIcon from "@/assets/close.svg";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const navRef = useRef<HTMLElement>(null);

  const onClickOutside = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement;
    if (navRef.current && !navRef.current.contains(target)) {
      closeSidebar();
    }
  };

  return (
    <aside
      className={`${
        isOpen ? "fixed" : "hidden"
      } top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-50`}
      onClick={onClickOutside}
    >
      <nav
        className="absolute top-0 right-0 bottom-0 w-9/12 bg-back-primary drop-shadow-2xl z-50 transition-all"
        ref={navRef}
      >
        <button className="py-4 px-6 flex ml-auto" onClick={closeSidebar}>
          <CloseIcon className="h-6 w-6" />
        </button>
        <Menu mobile closeSidebar={closeSidebar} />
      </nav>
    </aside>
  );
};

export default Sidebar;
