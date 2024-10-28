import { React, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = ({ sharedBg }) => {
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const LeftArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute left-6 z-50 -ml-6 cursor-pointer rounded-full bg-gray-600 p-2 md:left-8"
    >
      <ChevronLeft size={24} color="white" />
    </div>
  );

  const RightArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute right-6 z-50 -mr-6 cursor-pointer rounded-full bg-gray-600 p-2 md:right-8"
    >
      <ChevronRight size={24} color="white" />
    </div>
  );
  return (
    <>
      <div
        className={`${sharedBg ? "bg-shared-bg dark:bg-dark-shared-bg" : "bg-skills-bg dark:bg-grad-dark"} flex h-screen w-full justify-center pb-10 pt-20 text-t-light dark:text-t-dark`}
      >
        <div className="w-[75%] rounded-3xl bg-gray-400 py-10">
          <div className="flex w-full items-center justify-center text-3xl font-bold">
            Skills
          </div>
          <div className="flex justify-center px-20 py-5 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur animi adipisci harum, impedit blanditiis nobis sapiente
            obcaecati iusto non dolore inventore commodi odit perspiciatis
            minus.
          </div>
          <div className="mx-12 h-[35%] sm:h-[60%] md:h-[70%]">
            <Carousel
              responsive={responsive}
              infinite={true}
              arrows={true}
              customLeftArrow={
                <LeftArrow onClick={() => carouselRef.current.previous()} />
              }
              customRightArrow={
                <RightArrow onClick={() => carouselRef.current.next()} />
              }
              className="h-full"
            >
              <div className="flex min-h-full w-full justify-center">
                <div className="flex h-[7rem] w-[40%] items-center justify-center rounded-2xl bg-gray-600 bg-opacity-60 pt-1 shadow-lg backdrop-blur-md sm:h-[10rem] sm:w-[50%] md:h-[15rem] md:w-[60%]">
                  <img src="/html.svg" className="h-14" alt="skill" />
                </div>
              </div>
              <div className="flex min-h-full w-full justify-center">
                <div className="flex h-[7rem] w-[40%] items-center justify-center rounded-2xl bg-gray-600 bg-opacity-60 pt-1 shadow-lg backdrop-blur-md sm:h-[10rem] sm:w-[50%] md:h-[15rem] md:w-[60%]">
                  <img src="/html.svg" className="h-14" alt="skill" />
                </div>
              </div>
              <div className="flex min-h-full w-full justify-center">
                <div className="flex h-[7rem] w-[40%] items-center justify-center rounded-2xl bg-gray-600 bg-opacity-60 pt-1 shadow-lg backdrop-blur-md sm:h-[10rem] sm:w-[50%] md:h-[15rem] md:w-[60%]">
                  <img src="/html.svg" className="h-14" alt="skill" />
                </div>
              </div>
              <div className="flex min-h-full w-full justify-center">
                <div className="flex h-[7rem] w-[40%] items-center justify-center rounded-2xl bg-gray-600 bg-opacity-60 pt-1 shadow-lg backdrop-blur-md sm:h-[10rem] sm:w-[50%] md:h-[15rem] md:w-[60%]">
                  <img src="/html.svg" className="h-14" alt="skill" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
