import React from "react";
import ProjectComponent from "./ProjectComponent";
const Completed = () => {
  return (
    <>
      <div>
        <ul className="grid items-center justify-center gap-8 px-8 sm:grid-cols-2 md:grid-cols-3">
          <ProjectComponent
            img="hosp-lg.png"
            img_d="hosp-dr.png"
            title="Hospital Website"
            url={"https://healthflow.harkirat.site"}
          />
          <ProjectComponent
            img="admin-dash.png"
            img_d="admin-dash.png"
            title="Hospital Admin DashBoard"
            url={"https://dash-healthflow.harkirat.site"}
          />
          <ProjectComponent
            img="coin.png"
            img_d="coin.png"
            title="Coin Bridge"
            url={"https://coin.harkirat.site"}
          />
          <ProjectComponent
            img="timg.png"
            img_d="timg.png"
            title="Infrared Image Detection"
            url={
              "https://github.com/h-s14/ThermalInfraredObjectDetectionForAerialCrafts"
            }
          />
          <ProjectComponent
            img="ugame.png"
            img_d="ugame.png"
            title="Unity Runner Game"
            url={"https://github.com/h-s14/EndlessRunnerGame-Unity"}
          />
          <ProjectComponent
            img="bcd.png"
            img_d="bcd.png"
            title="Breast Cancer Detection"
            url={"https://github.com/h-s14/BreastCancerDetection"}
          />
        </ul>
      </div>
    </>
  );
};

export default Completed;
