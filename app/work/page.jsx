"use client";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSlideButtons from "@/components/WorkSlideButtons";

const projects = [
  {
    num: "01",
    category: "Desktop Application",
    title: "Text based Finance Tracker",
    link: "https://itz-hiru.github.io/My-Scanner/",
    image: "/assets/work/text-based-finance-tracker.png",
    github: "https://github.com/itz-hiru/Text-Based-Finance-Tracker",
    description:
      "A simple and efficient application built with Python to manage income, expenses, and budget effortlessly.",
    stack: ["Python", "tkinter", "matplotlib"],
  },
  {
    num: "02",
    category: "Desktop Application",
    title: "Smart Expense Tracker",
    link: "https://github.com/itz-Hiru/Smart-Expense-Tracker",
    description:
      "A sleek JavaFX app for effortless income and expense management with powerful visualization tools.",
    stack: ["Java", "JavaFX", "MySQL"],
    image: "/assets/work/smart-expense-tracker.png",
    github: "https://github.com/itz-Hiru/Smart-Expense-Tracker",
  },
  {
    num: "03",
    category: "Android Application",
    title: "Money Map",
    link: "https://www.mediafire.com/file/t9fkwrary0sfu0n/money-map",
    description:
      "Your all-in-one app to effortlessly manage income, expenses, and view summaries with intuitive charts and tables.",
    stack: ["Java", "MpAndroidChart", "Glide"],
    image: "/assets/work/money-map.jpg",
    github: "https://github.com/itz-Hiru/Money-Map",
  },
  {
    num: "04",
    category: "Website Developing",
    title: "My Scanner",
    link: "https://itz-hiru.github.io/My-Scanner/",
    description: "An intuitive website for create and scan QR codes.",
    stack: [
      "React",
      "JavaScript",
      "CSS3",
      "Bootstrap",
      "Html5qrcode",
      "react-qr-codee",
    ],
    image: "/assets/work/my-scanner.png",
    github: "https://github.com/itz-Hiru/My-Scanner",
  },
  {
    num: "05",
    category: "Android Application",
    title: "Budget Buddy",
    link: "https://www.mediafire.com/file/vs2txte69bvcm3d/budget-buddy",
    description:
      "An intuitive android app for managing income, expenses, and viewing summaries with charts and tables.",
    stack: ["Kotlin", "MpAndroidChart", "AndroidNavigation", "itextpdf"],
    image: "/assets/work/budget-buddy.jpg",
    github: "https://github.com/itz-Hiru/budget-buddy",
  },
  {
    num: "06",
    category: "Android Application",
    title: "Care Bridge",
    link: "https://www.mediafire.com/file/zcqpe3oqmucudcd/care-bridge",
    description: "An intuitive android app for helping required people.",
    stack: ["Java", "Firebase", "AndroidNavigation", "MpAndroidChart", "Zixin"],
    image: "/assets/work/care-bridge.jpg",
    github: "https://github.com/itz-Hiru/care-bridge",
  },
  {
    num: "07",
    category: "Website Developing",
    title: "Audition Hive",
    link: "https://github.com/itz-Hiru/Blogging-Website-Frontend",
    description: "An intuitive website for creating, reading blogs.",
    stack: ["Javascript", "Firebase", "AWS", "Tailwind", "ReactVite"],
    image: "/assets/work/audition-hive.png",
    github: "https://github.com/itz-Hiru/Blogging-Website-Frontend",
  },
  {
    num: "08",
    category: "Android Application",
    title: "Aurudu Nakath Seettuwa",
    link: "https://www.mediafire.com/file/8z2xwodd62cffs7/Avurudu_nakath_seettuwa.apk/file",
    description:
      "An intuitive android app for Sinhala and Tamil New Year Nakath reminder.",
    stack: ["Java", "Core-Java", "Android Studio"],
    image: "/assets/work/aurudu-nakath-seettuwa.jpg",
    github: "https://github.com/itz-Hiru/Aurudu-Nakath-Seettuwa",
  },
  {
    num: "09",
    category: "Website Developing",
    title: "Book Review System",
    link: "https://github.com/itz-Hiru/Book-Review-System-Frontend",
    description: "An intuitive website for review books you read.",
    stack: ["NodeJS", "Java Script", "TailwindCSS", "REST"],
    image: "/assets/work/book-review-system.jpg",
    github: "https://github.com/itz-Hiru/Book-Review-System-Frontend",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.8,
          duration: 2,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[25px] h-[50%]">
              <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                <TextRevealCard
                  text={project.title}
                  revealText={project.category}
                />
              </h2>
              <p className="text-white/80">{project.description}</p>
              <p className="text-white/90 text-lg mt-5 xl:mt-8">
                Languages & Libraries:{" "}
              </p>
              <ul className="flex gap-2 flex-wrap -mt-5 ml-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-white/75">
                    {item}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-black/20 my-4"></div>
              <div className="flex items-center gap-8 -mt-5">
                <Link href={project.link} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center group hover:rotate-45 transition-all duration-300">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {project.num === "04" || project.num === "07"
                            ? "Live Project"
                            : "Download App"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {project.num === "07" || project.num === "09" ? (
                  <>
                    <Link href={project.github} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center group">
                            <BsGithub className="text-white text-2xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Frontend Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    <Link
                      href={
                        project.num === "07"
                          ? "https://github.com/itz-Hiru/Blogging-Website-Backend"
                          : "https://github.com/itz-Hiru/Book-Review-System-Backend"
                      }
                      target="_blank"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center group">
                            <BsGithub className="text-white text-2xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Backend Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </>
                ) : (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center group">
                          <BsGithub className="text-white text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="relative group flex justify-center items-center"
                      style={{ height: "460px" }}
                    >
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt=""
                          quality={100}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSlideButtons
                containerStyles="flex gap-5 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none rounded-xl"
                btnStyles="rounded bg-black md:bg-accent hover:bg-black/55 md:hover:bg-white md:hover:bg-opacity-10 text-white md:text-primary hover:text-white text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
