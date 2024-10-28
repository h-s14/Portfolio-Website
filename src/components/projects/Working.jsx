import React from "react";
import ProjectComponent from "./ProjectComponent";

const Working = () => {
  return (
    <>
      <div>
        <ul className="grid grid-cols-2 items-center justify-center gap-8 px-8 md:grid-cols-3">
          <ProjectComponent
            bgImage={"/portfolio.png"}
            altText={"Portfolio"}
            link="https://harkirat.site"
          />
          <ProjectComponent
            bgImage={"/hms.png"}
            altText={"Hospital Management System"}
            link="https://project1.com"
          />
          <ProjectComponent
            bgImage={"/hms-admin.png"}
            altText={"Hospital Management System Admin Page"}
            link="https://project2.com"
          />
          <ProjectComponent
            bgImage={"/coin-bridge.png"}
            altText={"coin-bridge"}
            link="https://coin.harkirat.site"
          />
          <ProjectComponent
            bgImage={"/thermal-inf-img.png"}
            altText={"Thermal Inf Obj Detection"}
            link=""
          />

          <ProjectComponent
            bgImage={"/cancer-detection.png"}
            altText={"Cancer Detection"}
            link=""
          />
        </ul>
      </div>
    </>
  );
};

export default Working;
