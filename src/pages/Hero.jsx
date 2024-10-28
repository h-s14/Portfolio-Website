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
      <div className="pl-20 pt-10">
        <div className="flex w-[25%] items-center justify-center rounded-full">
          Welcome to my Portfolio
        </div>
        <div className="w-[40%] py-5 text-5xl font-bold text-white text-opacity-80 dark:text-gray-300 dark:text-opacity-80">
          <div className="pl-10">Hi! I'm Harkirat</div>
          <div className="pb-2 pl-10" style={typingStyle}>
            A Software Engineer
          </div>
        </div>
        <div className="flex">
          <div className="pl-10 pr-[23%] text-xl text-white text-opacity-50 dark:text-gray-300 dark:text-opacity-50">
            I'm a software engineer with a solid background in software
            development and a passion for emerging technologies. My experience
            includes full-stack development, blockchain, and artificial
            intelligence. Proficient in React, Tailwind CSS, and JavaScript,
            I've contributed to projects that address real-world challenges
            through innovative solutions.
            <div className="pt-5 text-3xl">
              <button className="flex items-center">
                Let's Connect <CircleChevronRight className="ml-2" />
              </button>
            </div>
          </div>

          <div className="px-16">
            <img
              src="model.png"
              className="min-h-96 min-w-96 bg-black"
              alt="model"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
