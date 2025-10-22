import SkillComp from "@/components/projects/SkillComp";

type SkillsProps = {
  sharedBg?: boolean;
};

const Skills = ({ sharedBg = false }: SkillsProps) => {
  return (
    <div
      className={`${sharedBg ? "bg-shared-bg dark:bg-dark-shared-bg" : "bg-skills-bg dark:bg-grad-dark"} flex h-screen w-full justify-center pb-10 pt-20 text-t-light dark:text-t-dark`}
    >
      <div className="bg-skills-bg-light dark:bg-skills-bg-dark w-[75%] items-center rounded-3xl bg-opacity-20 pt-28 dark:bg-opacity-40 md:py-10">
        <div className="flex w-full items-center justify-center pb-10 pt-10 text-3xl font-bold text-t-light dark:text-t-dark">
          SKILLS
        </div>

        <div className="mlg:mx-12 flex h-[70%] justify-center sm:h-[50%] md:h-[70%] lg:h-[70%]">
          <SkillComp />
        </div>
      </div>
    </div>
  );
};

export default Skills;
