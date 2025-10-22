"use client";

import { useState } from "react";

import Completed from "@/components/projects/Completed";
import Working from "@/components/projects/Working";

type ProjectsProps = {
  sharedBg?: boolean;
};

const Projects = ({ sharedBg = false }: ProjectsProps) => {
  const [showCompleted, setShowCompleted] = useState(true);

  const toggleProjects = () => {
    setShowCompleted((prev) => !prev);
  };

  return (
    <div
      className={`${sharedBg ? "bg-shared-bg dark:bg-dark-shared-bg" : "dark:bg-grad-dark bg-skills-bg"} min-h-screen py-10 pt-20`}
    >
      <div className="mx-10 rounded-3xl bg-gray-700 bg-opacity-40 py-20 backdrop-blur-3xl">
        <div className="flex justify-center px-10 text-3xl font-bold text-t-light dark:text-t-dark">PROJECTS</div>
        <h3 className="flex justify-center text-wrap py-1 pt-2 text-center">
          Here are some of my most recently Completed Projects and <br />
          The Projects I&apos;m Currently Working On
        </h3>
        <div className="flex h-full w-full justify-center">
          <div className="z-50 my-5 flex h-[2rem] w-[50%] items-center justify-center rounded-full border-2 border-black bg-skills-bg-light bg-opacity-40 backdrop-blur-lg dark:bg-skills-bg-dark dark:bg-opacity-40 sm:w-[30%] md:h-[2rem] lg:h-[3rem]">
            <button onClick={toggleProjects} className="relative flex h-full w-full items-center justify-center rounded-full">
              <span
                className={`dark:bg-dark-shared-bg absolute left-0 top-0 z-40 h-full w-1/2 rounded-full bg-skills-bg-n-light bg-opacity-30 transition-transform duration-300 dark:bg-skills-bg-n-dark dark:bg-opacity-70 dark:backdrop-blur-lg ${showCompleted ? "translate-x-0" : "translate-x-full"}`}
              ></span>
              <span className="z-40 flex h-full w-1/2 items-center justify-center rounded-full">Completed</span>
              <span className="z-40 flex h-full w-1/2 items-center justify-center rounded-full">Working On</span>
            </button>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center pt-10">
          {showCompleted ? <Completed /> : <Working />}
        </div>
      </div>
    </div>
  );
};

export default Projects;
