"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-60 h-60 xl:w-[330px] xl:h-[330px] justify-center items-center pr-10">
      <div className="absolute w-full h-full rounded-full overflow-hidden items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.1,
              duration: 0.1,
              ease: "easeInOut",
            },
          }}
          className="w-full h-full relative"
        >
          <Image
            src="/assets/my_image.jpg"
            priority
            quality={100}
            fill
            alt="Profile Picture"
            className="object-cover items-center justify-center rounded-full"
          />
        </motion.div>

        <motion.svg
          className="absolute inset-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#0099ff"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Photo;
