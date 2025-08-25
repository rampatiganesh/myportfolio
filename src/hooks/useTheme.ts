import { useState, useEffect } from "react";
import type { Theme } from "../types/theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) setTheme(stored);
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev: Theme) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
