"use client";

import Link from "next/link";
import { useCallback, useMemo } from "react";
import { ArrowRight, CircleChevronRight, Sparkles } from "lucide-react";

type HeroProps = {
  sharedBg?: boolean;
};

const Hero = (_props: HeroProps) => {
  const typingStyle = useMemo(
    () => ({
      display: "inline-block",
      animation: "typing 3s steps(12, end), blink-caret 0.75s step-end infinite",
      whiteSpace: "nowrap" as const,
      overflow: "hidden",
      borderRight: "2px solid",
    }),
    []
  );

  const stats = useMemo(
    () => [
      { value: "20+", label: "Completed Projects" },
      { value: "4+", label: "Years of Experience" },
      { value: "12+", label: "Core Technologies" },
    ],
    []
  );

  const downloadPDF = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/HS_Resume.pdf";
    link.download = "Harkirat-Singh-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pt-32 md:px-12 lg:px-20 xl:h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl dark:bg-amber-500/20" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/20 blur-3xl dark:bg-orange-500/20" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="relative flex flex-col gap-10">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-t-light shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <Sparkles className="h-4 w-4" />
            <span>Crafting Delightful Products</span>
          </div>

          <div className="space-y-6 text-t-light text-opacity-90 dark:text-t-dark">
            <div className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              <span className="block text-lg font-medium uppercase tracking-[0.4em] text-t-light text-opacity-70 dark:text-t-dark dark:text-opacity-70">
                I&apos;m Harkirat
              </span>
              <span className="bg-gradient-to-r from-emerald-300 via-sky-200 to-purple-300 bg-clip-text text-transparent">
                Building immersive digital experiences
              </span>
            </div>
            <div className="text-2xl font-semibold text-t-light text-opacity-80 dark:text-t-dark dark:text-opacity-80" style={typingStyle}>
              A Software Engineer
            </div>
            <p className="max-w-2xl text-base text-t-light text-opacity-70 dark:text-t-dark dark:text-opacity-70 sm:text-lg">
              I&apos;m a multidisciplinary engineer with a passion for high-performing web apps, blockchain infrastructure, and practical AI integrations. I translate complex problems into elegant, accessible interfaces that drive meaningful impact.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={downloadPDF}
              type="button"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-banner-bg-light px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-t-light shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:bg-banner-bg-light/90 dark:border-white/5 dark:bg-banner-bg-dark dark:text-t-dark"
            >
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-400/30 via-transparent to-purple-400/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-orange-400/30 dark:to-yellow-400/30" />
              Resume
              <CircleChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <Link
              href="#projects"
              className="group inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-t-light transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/70 hover:bg-emerald-300/20 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-t-dark dark:hover:border-amber-300/70 dark:hover:bg-amber-300/20"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid w-full max-w-2xl grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm uppercase tracking-wider shadow-xl backdrop-blur-lg dark:border-white/5 dark:bg-white/5">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-white dark:text-t-dark">{stat.value}</span>
                <span className="text-xs font-medium text-t-light text-opacity-70 dark:text-t-dark dark:text-opacity-70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 p-8 shadow-2xl backdrop-blur-3xl dark:border-white/5 dark:from-white/5 dark:via-white/0 dark:to-white/10">
            <div className="pointer-events-none absolute inset-x-6 top-6 h-40 rounded-full bg-white/10 blur-2xl dark:bg-white/5" />
            <div className="relative flex items-center justify-center">
              <img src="/model-light.png" className="block w-3/4 bg-transparent dark:hidden" alt="Illustration of Harkirat" />
              <img src="/model-dark.png" className="hidden w-3/4 bg-transparent dark:block" alt="Illustration of Harkirat" />
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-t-light text-opacity-80 shadow-inner backdrop-blur-md dark:border-white/5 dark:bg-white/5 dark:text-t-dark dark:text-opacity-80">
              Currently shaping resilient product experiences with thoughtfully crafted design systems and scalable architecture.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
