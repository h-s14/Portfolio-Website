import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./navBar/NavBar";
import Home from "./components/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={` ${darkMode ? "dark" : ""} hide-scrollbar`}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <button
          className="fixed bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black border-opacity-20 bg-gray-400 bg-opacity-10 text-3xl text-black shadow-lg outline-none backdrop-blur-md backdrop-filter transition dark:bg-black dark:bg-opacity-60 dark:text-white"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <span className="text-sm text-gray-900 dark:text-gray-400">
              LHT
            </span>
          ) : (
            <span className="text-sm text-gray-900 dark:text-gray-400">
              DRK
            </span>
          )}
        </button>
      </Router>
    </div>
  );
};

export default App;
