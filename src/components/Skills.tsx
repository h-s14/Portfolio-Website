import SkillComp from "@/components/projects/SkillComp";

type SkillsProps = {
  sharedBg?: boolean;
};

const Skills = ({ sharedBg = false }: SkillsProps) => {
  return (
    <section
      id="skills"
      className={`${sharedBg ? "bg-shared-bg dark:bg-dark-shared-bg" : "bg-skills-bg dark:bg-grad-dark"} relative flex w-full justify-center overflow-hidden py-20 text-t-light dark:text-t-dark`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-8 h-32 w-32 rounded-full bg-emerald-300/20 blur-3xl dark:bg-amber-400/20" />
        <div className="absolute bottom-0 right-6 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl dark:bg-orange-400/20" />
      </div>

      <div className="relative flex w-full max-w-6xl flex-col items-center gap-10 rounded-[2.5rem] border border-white/10 bg-white/5 px-6 py-16 shadow-2xl backdrop-blur-2xl dark:border-white/5 dark:bg-white/5 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-t-light text-opacity-80 dark:border-white/5 dark:bg-white/10">
            Expertise
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">Technologies I use to deliver polished experiences</h2>
          <p className="max-w-2xl text-sm text-t-light text-opacity-70 dark:text-t-dark dark:text-opacity-70 sm:text-base">
            From front-end craft to scalable back-end systems, here&apos;s a snapshot of the tools I lean on to deliver resilient, accessible products.
          </p>
        </div>

        <div className="w-full">
          <SkillComp />
        </div>
      </div>
    </section>
  );
};

export default Skills;
