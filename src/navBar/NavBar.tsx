"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ConnectBanner from "@/navBar/ConnectBanner";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [openBanner, setOpenBanner] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeNavBg = () => {
      setNavbar(window.scrollY >= 10);
    };

    changeNavBg();
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <div className="fixed top-0 z-10 hidden h-16 w-full items-center justify-between gap-16 rounded-full bg-transparent text-lg md:block">
      <div
        className={`flex h-full items-center justify-between px-20 transition-all duration-300 ${
          navbar
            ? "bg-opacity-40 bg-nav-grad-light backdrop-blur-lg dark:bg-opacity-40 dark:bg-nav-grad-dark dark:backdrop-blur-lg"
            : "bg-gray-300 bg-opacity-10 backdrop-blur-md"
        }`}
      >
        <img className="block w-36 dark:hidden" src="/logo-light.png" alt="logo" />
        <img className="hidden w-36 dark:block" src="/logo-dark.png" alt="logo" />
        <div
          className={`flex h-full w-3/5 items-center justify-between ${
            navbar ? "text-t-n-c-light dark:text-t-n-c-dark" : "text-t-n-light dark:text-t-n-dark"
          }`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transform transition-transform duration-200 hover:scale-110 ${
                  navbar
                    ? "hover:text-t-n-c-hover-light dark:hover:text-t-n-c-hover-dark"
                    : "hover:text-t-n-hover-light dark:hover:text-t-n-hover-dark"
                } ${isActive ? "font-semibold" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            className={`transform transition-transform duration-200 hover:scale-110 ${
              navbar
                ? "hover:text-t-n-c-hover-light dark:hover:text-t-n-c-hover-dark"
                : "hover:text-t-n-hover-light dark:hover:text-t-n-hover-dark"
            }`}
            type="button"
            onClick={() => setOpenBanner((prev) => !prev)}
          >
            Let&apos;s Connect
          </button>
        </div>
      </div>
      {openBanner && <ConnectBanner />}
    </div>
  );
};

export default NavBar;
