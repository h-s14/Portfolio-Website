import { React, useRef, useState } from "react";
import { CircleChevronRight } from "lucide-react";
import ConnectBanner from "../navBar/ConnectBanner";
import ContactUs from "../components/ContactUs";

const Hero = ({ onScroll }) => {
  const typingStyle = {
    display: "inline-block",
    animation: "typing 3s steps(12, end), blink-caret 0.75s step-end infinite",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "2px solid",
  };
  return (
    <>
      <div className="h-screen px-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center sm:items-center md:items-start md:pt-20">
            {/* Div - 1 */}
            <div className="relative z-40 flex h-12 w-[100%] items-center justify-center rounded-full bg-opacity-40 md:my-6 md:h-[25%] md:max-w-[50%] lg:h-[20%]">
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-banner-bg-light text-center text-2xl font-bold text-t-light dark:bg-banner-bg-dark dark:text-t-dark md:px-2 md:py-2 lg:py-2 2xl:text-3xl">
                Welcome to my Portfolio
              </div>
              <div className="absolute -inset-0.5 z-0 h-full w-[100%] rounded-full bg-t-light blur dark:bg-t-dark"></div>
            </div>
            {/* Div - 2 */}
            <div className="w-full pt-5 text-5xl font-bold text-t-light text-opacity-80 dark:text-t-dark dark:text-opacity-80">
              <div className="pl-5 text-3xl md:pl-10 md:text-5xl">
                I'm Harkirat
              </div>
              <div
                className="pb-2 pl-5 text-3xl md:pl-10 md:text-5xl"
                style={typingStyle}
              >
                A Software Engineer
              </div>
            </div>
            {/* Div - 3 */}
            <div className="flex">
              <div className="pl-5 pr-[5%] text-xl text-t-light text-opacity-50 dark:text-t-dark dark:text-opacity-50 md:pl-10">
                I'm a software engineer working in full-stack development,
                blockchain, and AI. Proficient in React, Tailwind CSS, and
                JavaScript, I tackle real-world challenges with innovative
                solutions.
              </div>
            </div>
            <div className="pt-10 text-2xl md:h-full md:pl-5">
              <button
                // onClick={() => setOpenBanner((prev) => !prev)}
                onClick={onScroll}
                className="relative flex h-12 items-center justify-center rounded-full bg-banner-bg-light px-6 py-3 font-bold dark:bg-banner-bg-dark md:h-[20%] md:py-5 lg:h-[15%]"
              >
                <div className="absolute -inset-0.5 -z-10 h-full w-full rounded-full bg-t-light text-xl blur dark:bg-t-dark md:pl-10"></div>
                Get in Touch
                <CircleChevronRight className="my-1 ml-2 font-bold" />
              </button>
            </div>
          </div>
          {/* Div - 4 */}
          <div className="mt-16 flex w-full items-center justify-center md:px-40 2xl:px-96">
            <img
              src="model-light.png"
              className="block w-[30%] bg-transparent dark:hidden md:w-[100%]"
              alt="model"
            />
            <img
              src="model-dark.png"
              className="hidden w-[30%] bg-transparent dark:block md:w-[100%]"
              alt="model"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
