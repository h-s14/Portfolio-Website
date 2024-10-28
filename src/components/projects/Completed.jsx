import React from "react";
import ProjectComponent from "./ProjectComponent";
const Completed = () => {
  return (
    <>
      <div>
        <ul className="grid grid-cols-2 items-center justify-center gap-8 px-8 md:grid-cols-3">
          <ProjectComponent
            url="https://harkirat.site"
            title="Portfolio Website"
          />
          <ProjectComponent
            url="https://healthflow.harkirat.site"
            title="Hospital Website"
          />
          <ProjectComponent url="https://healthflow.harkirat.site" title=" ." />
          <ProjectComponent url="https://healthflow.harkirat.site" title="" />
          <ProjectComponent url="https://healthflow.harkirat.site" title="" />

          <ProjectComponent url="https://healthflow.harkirat.site" title="" />
        </ul>
      </div>
    </>
  );
};

export default Completed;
