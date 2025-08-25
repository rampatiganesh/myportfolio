import { Sun, Moon } from "lucide-react";
import type { Theme } from "../types/theme";

interface Props {
  theme: Theme;
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: Props) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-6 z-[9999] p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-gray-800" />
      )}
    </button>
  );
}
