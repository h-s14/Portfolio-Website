import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { SkillsData } from "./Skills.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";

const SkillComp = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          1440: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        freeMode={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className=""
      >
        {SkillsData.map((item) => (
          <SwiperSlide className="" key={item.title}>
            <div className="flex min-h-full w-full items-center justify-center">
              <div className="dark:bg-skills-bg-n-dark bg-skills-bg-n-light flex h-[16rem] w-[60%] flex-col items-center justify-center rounded-2xl bg-opacity-10 pt-1 shadow-lg backdrop-blur-md transition hover:scale-110 dark:bg-opacity-20 sm:my-10 sm:h-[12rem] sm:w-[50%] md:h-[16rem] md:w-[60%] lg:h-[17rem] 2xl:h-[20rem]">
                <img
                  src={item.image}
                  className="svg dark:svg flex w-[5rem] items-center justify-center object-fill md:w-[35%] md:pb-4"
                  alt="skill"
                />
                <div className="dark:text-skill-t-dark text-skill-t flex items-center justify-center text-wrap py-2 text-center text-3xl">
                  {item.title}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SkillComp;
