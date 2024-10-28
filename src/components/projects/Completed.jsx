import React from "react";
import ProjectComponent from "./ProjectComponent";
const Completed = () => {
  return (
    <>
      <div>
        <ul className="grid items-center justify-center gap-8 px-8 sm:grid-cols-2 md:grid-cols-3">
          <ProjectComponent
            url="https://harkirat.site"
            title="Portfolio Website"
          />
          <ProjectComponent url="hospital.png" title="Hospital Website" />
          <ProjectComponent url="hospital.png" title="Hospital Website" />
          <ProjectComponent url="hospital.png" title="Hospital Website" />
          <ProjectComponent url="hospital.png" title="Hospital Website" />
          <ProjectComponent url="hospital.png" title="Hospital Website" />
        </ul>
      </div>
    </>
  );
};

export default Completed;
