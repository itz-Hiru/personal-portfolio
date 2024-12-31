"use client";
import { BackgroundGradient } from "@/components/ui/background-gradiant";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web development",
    description:
      "I am a web developer specializing in crafting modern, full-stack applications with a strong focus on scalability and performance. I leverage Node.js for powerful server-side logic and Next.js with React to create seamless, dynamic, and user-centric interfaces.",
    href: "",
  },
  {
    num: "02",
    title: "Android development",
    description:
      "I am an Android developer with expertise in crafting high-quality mobile applications using Java and Kotlin. I excel at delivering efficient, intuitive, and feature-rich solutions optimized for the Android ecosystem.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX design",
    description:
      "As I am a UI/UX designer, I specialize in creating user-centered designs that are both visually appealing and highly functional. I focus on enhancing the user experience by developing intuitive interfaces and seamless interactions, ensuring that design solutions are both aesthetically pleasing and easy to navigate.",
    href: "",
  },
  {
    num: "04",
    title: "AI/ ML Learner",
    description:
      "As an AI/ML learner, I have a strong foundation in data science, including proficiency in Power BI for data visualization and analysis. I am also skilled in using Python libraries like NumPy, pandas, and Matplotlib to manipulate and visualize data, providing valuable insights through analytical processes.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.8,
              duration: 2,
              ease: "easeInOut",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                <BackgroundGradient className="bg-black rounded-3xl p-10 -m-2">
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                      {service.num}
                    </div>
                  </div>
                  <h2 className="text-[40px] font-bold leading-none text-white transition-all duration-500 mt-2">
                    {service.title}
                  </h2>
                  <p className="text-white/60 mt-4">{service.description}</p>
                </BackgroundGradient>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
