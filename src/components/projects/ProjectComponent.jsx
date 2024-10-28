import React from "react";

const ProjectComponent = ({ url, title }) => {
  return (
    <li className="flex flex-col items-center">
      <img
        src={url}
        title={title}
        className="h-48 w-72 rounded-2xl border-0 bg-gray-400 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      />

      <h3 className="mt-2 text-center text-lg font-semibold">{title}</h3>
    </li>
  );
};

export default ProjectComponent;
