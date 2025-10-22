import ProjectComponent from "@/components/projects/ProjectComponent";

const Completed = () => {
  return (
    <div>
      <ul className="grid items-center justify-center gap-8 px-8 sm:grid-cols-2 md:grid-cols-3">
        <ProjectComponent img="/hosp-lg.png" imgDark="/hosp-dr.png" title="Hospital Website" url="https://healthflow.harkirat.site" />
        <ProjectComponent img="/admin-dash.png" imgDark="/admin-dash.png" title="Hospital Admin Dashboard" url="https://dash-healthflow.harkirat.site" />
        <ProjectComponent img="/coin.png" imgDark="/coin.png" title="Coin Bridge" url="https://coin.harkirat.site" />
        <ProjectComponent
          img="/timg.png"
          imgDark="/timg.png"
          title="Infrared Image Detection"
          url="https://github.com/h-s14/ThermalInfraredObjectDetectionForAerialCrafts"
        />
        <ProjectComponent img="/ugame.png" imgDark="/ugame.png" title="Unity Runner Game" url="https://github.com/h-s14/EndlessRunnerGame-Unity" />
        <ProjectComponent img="/bcd.png" imgDark="/bcd.png" title="Breast Cancer Detection" url="https://github.com/h-s14/BreastCancerDetection" />
      </ul>
    </div>
  );
};

export default Completed;
