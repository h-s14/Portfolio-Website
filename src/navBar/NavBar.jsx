import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ConnectBanner from "./ConnectBanner";

const NavBar = () => {
  const [openBanner, setOpenBanner] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 z-10 h-16 w-full items-center justify-between gap-16 rounded-full bg-transparent text-lg">
        <div
          className={`flex h-full items-center justify-between px-20 transition-all duration-300 ${navbar ? "bg-nav-grad-light dark:bg-nav-grad-dark" : "bg-gray-300 bg-opacity-10 backdrop-blur-md"}`}
        >
          <img src="/logo.png" alt="logo" />
          <div className="text-t-n-light dark:text-t-n-dark flex h-full w-3/5 items-center justify-between">
            <NavLink
              to="/"
              className="hover:text-t-n-hover-light dark:hover:text-t-n-hover-dark transform transition-transform duration-200 hover:scale-110"
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className="hover:text-t-n-hover-light dark:hover:text-t-n-hover-dark transform transition-transform duration-200 hover:scale-110"
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className="hover:text-t-n-hover-light dark:hover:text-t-n-hover-dark transform transition-transform duration-200 hover:scale-110"
            >
              Projects
            </NavLink>
            <button
              className="hover:text-t-n-hover-light dark:hover:text-t-n-hover-dark transform transition-transform duration-200 hover:scale-110"
              onClick={() => setOpenBanner((prev) => !prev)}
            >
              Let's Connect
            </button>
          </div>
        </div>
        {openBanner && <ConnectBanner />}
      </div>
    </>
  );
};

export default NavBar;