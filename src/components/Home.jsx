import React, { useRef } from "react";
import Hero from "../pages/Hero";
import Skills from "./Skills";
import Projects from "./projects/Projects";
import ContactUs from "./ContactUs";

const Home = ({ sharedBg = true }) => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={`${sharedBg ? "shared-bg dark:dark-shared-bg" : "bg-grad-light dark:bg-grad-dark"} pt-16 text-t-light dark:bg-grad-dark dark:text-t-dark`}
    >
      <Hero sharedBg={sharedBg} onScroll={scrollToContact} />
      <Skills sharedBg={sharedBg} />
      <Projects sharedBg={sharedBg} />
      <div ref={contactRef}>
        <ContactUs sharedBg={sharedBg} />
      </div>
    </div>
  );
};

export default Home;
