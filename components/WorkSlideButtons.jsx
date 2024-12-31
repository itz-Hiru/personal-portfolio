"use client";
import { motion } from "framer-motion";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSlideButtons = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
    >
      <div className={containerStyles}>
        <button className={btnStyles}>
          <PiCaretLeftBold
            className={iconStyles}
            onClick={() => swiper.slidePrev()}
          />
        </button>
        <button className={btnStyles}>
          <PiCaretRightBold
            className={iconStyles}
            onClick={() => swiper.slideNext()}
          />
        </button>
      </div>
    </motion.div>
  );
};

export default WorkSlideButtons;
