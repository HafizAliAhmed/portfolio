"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "../../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent: FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-5 md:px-20 mt-20 sm:mt-24 md:mt-48 w-full z-[20]"
    >
      <div className="h-full w-full max-w-7xl mx-auto flex flex-col gap-4 md:gap-5 justify-center text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[11px] md:text-[13px]">
            Glad you found this page
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-[600px] w-auto h-auto leading-tight"
        >
          <span>
            Making
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              AI agents{" "}
            </span>
            do real work
          </span>
        </motion.div>

        <motion.p
          className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 my-3 md:my-5 max-w-[600px] leading-relaxed"
        >
          Hafiz Ali Ahmed here. I use OpenAI Agent SDK and n8n to put together AI systems that handle tasks, make calls, and sort out workflows without needing someone to babysit them. On the side, I teach 1500+ students at Governor Sindh GenAI Initiative. Also co-founded Functions Global.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0 hover:scale-105 transition-transform text-sm sm:text-base"
        >
          Learn More!
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
