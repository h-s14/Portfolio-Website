import React from "react";
import { CircleChevronRight } from "lucide-react";
const Hero = () => {
  const typingStyle = {
    display: "inline-block",
    animation: "typing 3s steps(12, end), blink-caret 0.75s step-end infinite",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "2px solid",
  };
  return (
    <>
      <div className="px-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center sm:items-center md:items-start">
            {/* Div - 1 */}
            <div className="flex w-[80%] items-center justify-center rounded-full bg-gray-400 bg-opacity-40 py-3 text-xl text-white text-opacity-50 backdrop-blur-md md:my-6 md:h-[10%] md:max-w-[50%] md:py-5">
              Welcome to my Portfolio
            </div>
            {/* Div - 2 */}
            <div className="w-full pt-5 text-5xl font-bold text-white text-opacity-80 dark:text-gray-300 dark:text-opacity-80">
              <div className="pl-10 text-3xl md:text-5xl">I'm Harkirat</div>
              <div
                className="pb-2 pl-10 text-3xl md:text-5xl"
                style={typingStyle}
              >
                A Software Engineer
              </div>
            </div>
            {/* Div - 3 */}
            <div className="flex">
              <div className="pl-10 pr-[5%] text-xl text-white text-opacity-50 dark:text-gray-300 dark:text-opacity-50">
                I'm a software engineer working in full-stack development,
                blockchain, and AI. Proficient in React, Tailwind CSS, and
                JavaScript, I tackle real-world challenges with innovative
                solutions.
                <div className="pt-10 text-2xl">
                  <button className="flex items-center justify-center rounded-full border-2 border-gray-300 border-opacity-60 bg-gray-400 bg-opacity-60 px-2 py-2 backdrop-blur-lg">
                    Let's Connect <CircleChevronRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Div - 4 */}
          <div className="mt-16 flex items-center justify-center px-32 md:px-40 2xl:px-64">
            <img
              src="model-light.png"
              className="block bg-transparent dark:hidden"
              alt="model"
            />
            <img
              src="model-dark.png"
              className="hidden bg-transparent dark:block"
              alt="model"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
