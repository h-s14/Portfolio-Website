import Skills from "@/components/Skills";
import Projects from "@/components/projects/Projects";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";

type HomeProps = {
  sharedBg?: boolean;
};

const Home = ({ sharedBg = true }: HomeProps) => {
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
