"use client";

import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

type ProjectComponentProps = {
  img: string;
  imgDark: string;
  url: string;
  title: string;
};

const ProjectComponent = ({ img, imgDark, url, title }: ProjectComponentProps) => {
  const isDisabled = !url;

  return (
    <li className="relative z-10 flex flex-col items-center">
      {img && (
        <img src={img} title={title} className="block h-48 w-72 rounded-2xl border-0 dark:hidden" alt={title || "project"} />
      )}
      {imgDark && (
        <img src={imgDark} title={title} className="hidden h-48 w-72 rounded-2xl border-0 dark:block" alt={title || "project"} />
      )}
      {!img && !imgDark && (
        <div className="flex h-48 w-72 items-center justify-center rounded-2xl border-2 border-dashed border-t-light dark:border-t-dark">
          Coming Soon
        </div>
      )}
      <Link
        href={isDisabled ? "#" : url}
        target={isDisabled ? undefined : "_blank"}
        rel={isDisabled ? undefined : "noreferrer"}
        className={`group absolute z-50 flex h-48 w-72 cursor-pointer items-center justify-center rounded-2xl bg-gray-500 bg-opacity-30 pb-4 transition-transform duration-300 hover:bg-opacity-70 hover:shadow-lg ${isDisabled ? "pointer-events-none" : ""}`}
      >
        <div className="flex items-center justify-center">
          {isDisabled ? "In Progress" : "Visit"}
          {!isDisabled && <RxArrowTopRight className="ml-1 transition-transform group-hover:rotate-45" />}
        </div>
      </Link>
      <h3 className="pointer-events-none mt-2 text-wrap text-center text-lg font-semibold">{title || "In Progress..."}</h3>
    </li>
  );
};

export default ProjectComponent;
