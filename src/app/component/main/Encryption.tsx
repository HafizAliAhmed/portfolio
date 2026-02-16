"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "../../../../utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full h-full relative">
      <div className="absolute w-auto top-[10%] sm:top-[15%] md:top-[10%] lg:top-[-5%] z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-medium text-center text-gray-200"
        >
          AI Agents
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            That{" "}
          </span>
          Do the Work
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-5px] sm:translate-y-[-10px] md:translate-y-[-15px] absolute z-[30] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto ">
          <Image
            src="/LockTop.png"
            alt="AI Systems Icon"
            width={50}
            height={50}
            className="w-[30px] sm:w-[40px] md:w-[50px] translate-y-[6px] sm:translate-y-[-10px] md:translate-y-[10px] transition-all duration-200 group-hover:translate-y-11 "
          />
          <Image
            src="/LockMain.png"
            alt="Intelligent Systems"
            width={70}
            height={70}
            className="w-[50px] sm:w-[50px] md:w-[70px] z-20 mt-0"
          />
        </div>

        <div className="Welcome-box px-[10px] py-[2px] sm:px-[15px] sm:py-[4px] md:px-[40px] md:py-[10px] z-[20] border my-[10px] sm:my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[10px] sm:text-[12px] md:text-[20px]">
            Not just talk. Results.
          </h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-4 sm:px-5">
        <div className="cursive text-base sm:text-lg md:text-xl font-medium text-center text-gray-300">
          My agents pick up the phone, pull data, send emails, and figure out what to do next. All on their own.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
