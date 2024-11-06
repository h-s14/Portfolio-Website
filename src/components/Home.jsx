import React, { useRef } from "react";
import Hero from "../pages/Hero";
import Skills from "./Skills";
import Projects from "./projects/Projects";
import ContactUs from "./ContactUs";

const Home = ({ sharedBg = true }) => {
  return (
    <div
      className={`${sharedBg ? "shared-bg dark:dark-shared-bg" : "bg-grad-light dark:bg-grad-dark"} dark:bg-grad-dark pt-16 text-t-light dark:text-t-dark`}
    >
      <Hero sharedBg={sharedBg} />
      <Skills sharedBg={sharedBg} />
      <Projects sharedBg={sharedBg} />
      <ContactUs sharedBg={sharedBg} />
    </div>
  );
};

export default Home;
