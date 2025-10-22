import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "@/app/globals.css";

import NavBar from "@/navBar/NavBar";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harkirat Singh | Portfolio",
  description: "Personal portfolio showcasing projects, skills, and contact information.",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} hide-scrollbar bg-black text-t-light transition-colors duration-500 dark:bg-black dark:text-t-dark`}>
        <NavBar />
        <main>{children}</main>
        <ThemeToggle />
      </body>
    </html>
  );
};

export default RootLayout;
