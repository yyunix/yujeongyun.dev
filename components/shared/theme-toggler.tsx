import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import MoonIcon from "@/assets/moon.svg";
import SunIcon from "@/assets/sun.svg";

const ThemeToggler = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const isDark = currentTheme === "dark";

  const themeAriaLabel = isDark ? "Activate Light Mode" : "Activate Dark Mode";

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={themeAriaLabel}
      title={themeAriaLabel}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggler;
