import { React, Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { IoMdSunny, IoMdMoon } from "react-icons/io";
import NavBar from "./navBar/NavBar";
import Home from "./components/Home";

const LazyProjects = lazy(() => import("./components/projects/Projects"));
const LazySkills = lazy(() => import("./components/Skills"));
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`transition duration-500 ${darkMode ? "dark" : ""} hide-scrollbar`}
    >
      <Router>
        <NavBar />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<LazyProjects />} />
            <Route path="/skills" element={<LazySkills />} />
          </Routes>
        </Suspense>
        <button
          className="fixed bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black border-opacity-20 bg-gray-300 bg-opacity-40 text-3xl text-black shadow-lg outline-none backdrop-blur-md backdrop-filter transition dark:bg-gray-600 dark:bg-opacity-60 dark:text-white"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <IoMdMoon className="absolute bottom-[1.15rem] right-[1.1rem] text-2xl" />
          ) : (
            <IoMdSunny className="absolute bottom-[0.95rem] right-[0.9rem] text-3xl text-gray-300" />
          )}
        </button>
      </Router>
    </div>
  );
};

export default App;
