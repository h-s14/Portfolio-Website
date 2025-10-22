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
    <section
      id="projects"
      className={`${sharedBg ? "bg-shared-bg dark:bg-dark-shared-bg" : "dark:bg-grad-dark bg-skills-bg"} relative overflow-hidden py-20`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl dark:bg-amber-400/20" />
        <div className="absolute bottom-0 right-12 h-52 w-52 rounded-full bg-purple-400/20 blur-3xl dark:bg-orange-400/20" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 rounded-[2.5rem] border border-white/10 bg-white/5 px-6 py-16 shadow-2xl backdrop-blur-2xl dark:border-white/5 dark:bg-white/5 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4 text-center text-t-light dark:text-t-dark">
          <span className="mx-auto inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-t-light text-opacity-80 dark:border-white/5 dark:bg-white/10">
            Featured Work
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">Projects that push ideas into reality</h2>
          <p className="mx-auto max-w-2xl text-sm text-t-light text-opacity-70 dark:text-t-dark dark:text-opacity-70 sm:text-base">
            Explore a snapshot of shipped products and prototypes currently in progress. Each project blends thoughtful user experience with resilient engineering fundamentals.
          </p>
        </div>

        <div className="flex w-full justify-center">
          <div className="relative inline-flex h-12 w-full max-w-xl items-center justify-center rounded-full border border-white/10 bg-white/5 p-1 shadow-lg backdrop-blur-lg dark:border-white/5 dark:bg-white/10">
            <button
              type="button"
              onClick={toggleProjects}
              aria-pressed={showCompleted}
              className="relative flex h-full w-full items-center justify-between rounded-full text-xs font-semibold uppercase tracking-[0.3em] text-t-light dark:text-t-dark"
            >
              <span
                className={`pointer-events-none absolute left-1 top-1 z-10 h-10 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-emerald-300/80 to-purple-300/80 transition-transform duration-300 dark:from-amber-400/80 dark:to-orange-400/80 ${showCompleted ? "translate-x-0" : "translate-x-full"}`}
              />
              <span className="relative z-20 flex h-full w-1/2 items-center justify-center">Completed</span>
              <span className="relative z-20 flex h-full w-1/2 items-center justify-center">In Progress</span>
            </button>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center">
          <div className="absolute inset-x-8 top-0 -z-10 h-full rounded-[3rem] border border-white/10 opacity-60 blur-3xl" />
          {showCompleted ? <Completed /> : <Working />}
        </div>
      </div>
    </section>
  );
};

export default Projects;
