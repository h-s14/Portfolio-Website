"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return (
    <button
      type="button"
      className="fixed bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black border-opacity-20 bg-gray-300 bg-opacity-40 text-3xl text-black shadow-lg outline-none backdrop-blur-md backdrop-filter transition dark:bg-gray-600 dark:bg-opacity-60 dark:text-white"
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Activate light mode" : "Activate dark mode"}
    >
      {isDarkMode ? (
        <IoMdMoon className="absolute bottom-[1.15rem] right-[1.1rem] text-2xl" />
      ) : (
        <IoMdSunny className="absolute bottom-[0.95rem] right-[0.9rem] text-3xl text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
