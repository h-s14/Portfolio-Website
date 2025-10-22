import ProjectComponent from "@/components/projects/ProjectComponent";

const Working = () => {
  return (
    <div>
      <ul className="grid items-center justify-center gap-8 px-8 sm:grid-cols-2 md:grid-cols-3">
        <ProjectComponent img="/inprog.png" imgDark="/inprog.png" title="xAI in Medical Diagnosis Models" url="https://github.com/h-s14/xAI-For-Medical-Diagnosis-Model" />
        <ProjectComponent img="/inprog.png" imgDark="/inprog.png" title="VR-based Unity Game" url="https://github.com/h-s14/3-D-VR-Game" />
        <ProjectComponent img="" imgDark="" title="" url="" />
        <ProjectComponent img="" imgDark="" title="" url="" />
        <ProjectComponent img="" imgDark="" title="" url="" />
        <ProjectComponent img="" imgDark="" title="" url="" />
      </ul>
    </div>
  );
};

export default Working;
