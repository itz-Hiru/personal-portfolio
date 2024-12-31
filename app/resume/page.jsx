"use client";
import {
  FaJava,
  FaAndroid,
  FaPython,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiSqlite,
  SiKotlin,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Timeline } from "@/components/ui/time-line";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description: "Meet the Owner",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hirumitha Kuladewa",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 72 550 8919",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Email",
      fieldValue: "hirumithakuladewanew@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Sinhala, English",
    },
    {
      fieldName: "Experience",
      fieldValue: "Career Starter",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "What I Excel At",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java",
      experience: 90,
      color: "#f89820",
    },
    {
      icon: <FaJs />,
      name: "Java Script",
      experience: 85,
      color: "#f7df1e",
    },
    {
      icon: <FaPython />,
      name: "Python",
      experience: 80,
      color: "#3776ab",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
      experience: 90,
      color: "#0095d5",
    },
    {
      icon: <FaAndroid />,
      name: "Android",
      experience: 85,
      color: "#3ddc84",
    },
    {
      icon: <FaReact />,
      name: "React",
      experience: 80,
      color: "#61dafb",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
      experience: 75,
      color: "#68a063",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
      experience: 70,
      color: "#000000",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      experience: 100,
      color: "#e34f26",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
      experience: 98,
      color: "#1572b6",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
      experience: 75,
      color: "#38bdf8",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      experience: 95,
      color: "#a259ff",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      experience: 85,
      color: "#00758f",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      experience: 80,
      color: "#47a248",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
      experience: 98,
      color: "#ffca28",
    },
    {
      icon: <SiSqlite />,
      name: "SQLite",
      experience: 82,
      color: "#003b57",
    },
  ],
};

const education = [
  {
    title: "2019",
    content: (
      <div>
        <h2 className="text-lg font-bold text-white md:text-xl -mt-4">O/Ls</h2>
        <p className="text-white/85 mt-2 text-[14px]">Kelani Maha Vidyalaya</p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h2 className="text-lg font-bold text-white md:text-xl -mt-4">A/Ls</h2>
        <p className="text-white/85 mt-2 text-[14px]">Sri Dharmaloka College</p>
      </div>
    ),
  },
  {
    title: "2023-Present",
    content: (
      <div>
        <h2 className="text-lg font-bold text-white md:text-xl -mt-4">
          Diploma in Software Engineering
        </h2>
        <p className="text-white/85 mt-2 text-[14px]">
          National Apprentice and Industrial Training Authority
        </p>
      </div>
    ),
  },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.8,
          duration: 2,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] relative">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/95 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="font-semibold">{item.fieldName}: </span>
                      <span className="text-[17px] text-white/80">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
                <BackgroundBeams />
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px] mx-auto xl:mx-0">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[90px] h-[90px] bg-white/10 rounded-xl flex justify-center items-center group">
                                <div
                                  className="text-5xl transition-all duration-300 group-hover:text-[var(--hover-color)]"
                                  style={{
                                    color: skill.color || "inherit",
                                  }}
                                >
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="flex flex-col items-center group">
                                  <p className="capitalize">{skill.name}</p>
                                  <div className="w-full bg-white-200 h-2 rounded-full mt-2">
                                    <motion.div
                                      className="bg-[#303090] h-2 rounded-full"
                                      initial={{ width: 0 }}
                                      animate={{
                                        width: `${skill.experience}%`,
                                      }}
                                      transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                      }}
                                    ></motion.div>
                                  </div>
                                  <motion.p
                                    className="text-sm mt-2"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: 1,
                                      transition: { delay: 1.5, duration: 0.5 },
                                    }}
                                  >
                                    {skill.experience}%
                                  </motion.p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">My Education</h3>
                <span className="flex items-center space-x-2">
                  <img
                    src="/assets/resume/cap.svg"
                    alt=""
                    className="w-[15px] filter grayscale"
                  />
                  <p className="max-w-[600px] text-white/60">
                    Growing path of my skills
                  </p>
                </span>
                <Timeline data={education} />
                <div className="h-[15px]"></div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
