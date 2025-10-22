"use client";

import { Linkedin, Mail, Triangle, Twitter } from "lucide-react";

const ConnectBanner = () => {
  return (
    <>
      <div className="absolute right-28 top-14 z-50 text-t-n-light dark:text-t-n-dark">
        <Triangle className="scale-150" />
      </div>
      <div className="absolute right-12 top-20">
        <ul className="border-banner-bd-light flex w-40 flex-col items-center gap-4 rounded-2xl border-2 border-t-n-dark bg-skills-bg-n-light bg-opacity-30 py-3 backdrop-blur-lg dark:bg-skills-bg-n-dark dark:bg-opacity-50">
          <li className="text-t-light dark:text-t-dark">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between gap-14 rounded-full px-4 py-1 transition-all duration-300 hover:bg-gray-300 hover:bg-opacity-30"
              href="mailto:14singh.harkirat@gmail.com"
            >
              Mail
              <span>
                <Mail />
              </span>
            </a>
          </li>
          <li className="rounded-full px-4 py-1 text-t-light transition-all duration-300 hover:bg-gray-300 hover:bg-opacity-30 dark:text-t-dark">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between gap-8"
              href="https://www.linkedin.com/in/14-singh-harkirat/"
            >
              Linkedin
              <span>
                <Linkedin />
              </span>
            </a>
          </li>
          <li className="rounded-full px-4 py-1 text-t-light transition-all duration-300 hover:bg-gray-300 hover:bg-opacity-30 dark:text-t-dark">
            <a target="_blank" rel="noreferrer" className="flex justify-between gap-8" href="https://x.com/h_s_1_4">
              Twitter
              <span>
                <Twitter />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ConnectBanner;
