import React from "react";
import ProjectComponent from "./ProjectComponent";

const Working = () => {
  return (
    <>
      <div>
        <ul className="grid grid-cols-2 items-center justify-center gap-8 px-8 md:grid-cols-3">
          <ProjectComponent
            img="inprog.png"
            img_d="inprog.png"
            title="xAI in Medical Diagnosis Models"
            url={"https://github.com/h-s14/xAI-For-Medical-Diagnosis-Model"}
          />
          <ProjectComponent
            img="inprog.png"
            img_d="inprog.png"
            title="VR-based Unity Game"
            url={"https://github.com/h-s14/3-D-VR-Game"}
          />
          <ProjectComponent img="" img_d="" title="" url={""} />
          <ProjectComponent img="" img_d="" title="" url={""} />
          <ProjectComponent img="" img_d="" title="" url={""} />
          <ProjectComponent img="" img_d="" title="" url={""} />
        </ul>
      </div>
    </>
  );
};

export default Working;
