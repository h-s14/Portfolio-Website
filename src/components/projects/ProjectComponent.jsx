import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const ProjectComponent = ({ img, img_d, url, title }) => {
  return (
    <li className="z-10 flex flex-col items-center">
      <img
        src={img}
        title={title}
        className="block h-48 w-72 rounded-2xl border-0 dark:hidden"
      />
      <img
        src={img_d}
        title={title}
        className="hidden h-48 w-72 rounded-2xl border-0 dark:block"
      />
      <button
        className="group absolute z-50 flex h-48 w-72 cursor-pointer items-center justify-center rounded-2xl bg-gray-500 bg-opacity-30 pb-4 transition-transform duration-300 hover:bg-opacity-70 hover:shadow-lg"
        onClick={() => window.open(url, "_blank")}
      >
        <div className="flex items-center justify-center">
          Visit
          <RxArrowTopRight className="group-hover:rotate-45" />
        </div>
      </button>
      <h3 className="pointer-events-none mt-2 text-wrap text-center text-lg font-semibold">
        {title || "In Progress..."}
      </h3>
    </li>
  );
};

export default ProjectComponent;
