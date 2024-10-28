import React, { useState } from "react";
import Completed from "./Completed";
import Working from "./Working";

const Projects = ({ sharedBg }) => {
  const [prSwitch, setPrSwitch] = useState(true);

  const prSwitcher = () => {
    setPrSwitch(!prSwitch);
  };

  return (
    <>
      <div
        className={`${sharedBg ? "bg-shared-bg dark:bg-dark-shared-bg" : "bg-skills-bg dark:bg-grad-dark"} min-h-screen py-10 pt-20`}
      >
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex justify-center px-10 text-3xl font-bold text-gray-300">
            PROJECTS
          </div>
          <div className="my-5 flex w-[50%] items-center justify-center rounded-full border-2 border-black bg-blue-200 sm:h-10 sm:w-[30%] md:h-16">
            <button
              onClick={prSwitcher}
              className="relative flex w-full items-center justify-center rounded-full bg-red-300 sm:h-10 md:h-full"
            >
              <span
                className={`absolute left-0 top-0 h-full w-1/2 rounded-full bg-green-300 transition-transform duration-300 ${prSwitch ? "translate-x-0" : "translate-x-full"}`}
              ></span>
              <span
                className={`z-10 flex h-full w-1/2 items-center justify-center rounded-full`}
              >
                Completed
              </span>
              <span
                className={`z-10 flex h-full w-1/2 items-center justify-center rounded-full`}
              >
                Working On
              </span>
            </button>
          </div>
          {prSwitch ? <Completed /> : <Working />}
        </div>
      </div>
    </>
  );
};

export default Projects;
