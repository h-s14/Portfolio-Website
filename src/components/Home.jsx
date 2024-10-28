import React from "react";
import Hero from "../pages/Hero";
import Skills from "./Skills";
import Projects from "./projects/Projects";
import ContactUs from "./ContactUs";

const Home = ({ sharedBg = true }) => {
  return (
    <div
      className={`${sharedBg ? "bg-shared-bg dark:bg-dark-shared-bg" : "bg-grad-light dark:bg-grad-dark"} pt-16 text-t-light dark:bg-grad-dark dark:text-t-dark`}
    >
      <Hero sharedBg={sharedBg} />
      <Skills sharedBg={sharedBg} />
      <Projects sharedBg={sharedBg} />
      <ContactUs sharedBg={sharedBg} />
    </div>
  );
};

export default Home;
