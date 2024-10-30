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
      <div className="fixed top-0 z-10 hidden h-16 w-full items-center justify-between gap-16 rounded-full bg-transparent text-lg md:block">
        <div
          className={`flex h-full items-center justify-between px-20 transition-all duration-300 ${navbar ? "bg-opacity-40 bg-nav-grad-light backdrop-blur-lg dark:bg-opacity-40 dark:bg-nav-grad-dark dark:backdrop-blur-lg" : "bg-gray-300 bg-opacity-10 backdrop-blur-md"}`}
        >
          <img
            className="block w-36 dark:hidden"
            src="/logo-light.png"
            alt="logo"
          />
          <img
            className="hidden w-36 dark:block"
            src="/logo-dark.png"
            alt="logo"
          />
          <div
            className={`flex h-full w-3/5 items-center justify-between ${navbar ? "text-t-n-c-light dark:text-t-n-c-dark" : "text-t-n-light dark:text-t-n-dark"}`}
          >
            <NavLink
              to="/"
              className={`transform transition-transform duration-200 hover:scale-110 ${navbar ? "hover:text-t-n-c-hover-light dark:hover:text-t-n-c-hover-dark" : "hover:text-t-n-hover-light dark:hover:text-t-n-hover-dark"}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className={`transform transition-transform duration-200 hover:scale-110 ${navbar ? "hover:text-t-n-c-hover-light dark:hover:text-t-n-c-hover-dark" : "hover:text-t-n-hover-light dark:hover:text-t-n-hover-dark"}`}
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={`transform transition-transform duration-200 hover:scale-110 ${navbar ? "hover:text-t-n-c-hover-light dark:hover:text-t-n-c-hover-dark" : "hover:text-t-n-hover-light dark:hover:text-t-n-hover-dark"}`}
            >
              Projects
            </NavLink>
            <button
              className={`transform transition-transform duration-200 hover:scale-110 ${navbar ? "hover:text-t-n-c-hover-light dark:hover:text-t-n-c-hover-dark" : "hover:text-t-n-hover-light dark:hover:text-t-n-hover-dark"}`}
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
