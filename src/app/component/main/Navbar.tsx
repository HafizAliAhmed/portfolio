import React from "react";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo, RxRocket } from "react-icons/rx";
import { SiMedium } from "react-icons/si";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md border-b border-[#7042f861] z-50 px-4 sm:px-6 md:px-10">
      <div className="w-full h-full flex items-center justify-between gap-3 sm:gap-4 md:gap-6 m-auto max-w-[1920px]">
        {/* Navbar Title with Logo - Hidden on Mobile */}
        <div className="flex items-center gap-2 hidden lg:flex min-w-[200px]">
          <Image
            src="/portfoliopicture.png"
            alt="Hafiz Ali Ahmed"
            width={40}
            height={40}
            className="rounded-full border border-purple-500"
          />
          <div className="flex flex-col">
            <span className="font-bold text-gray-300 text-[16px] md:text-[18px] leading-tight">
              Hafiz Ali Ahmed
            </span>
            <span className="text-[10px] md:text-xs text-gray-400">Agentic AI Developer</span>
          </div>
        </div>

        {/* Mobile Logo - Visible only on small screens */}
        <div className="flex items-center gap-1.5 lg:hidden min-w-[50px]">
          <RxRocket className="text-xl sm:text-2xl text-purple-500 transform -rotate-45" />
          <span className="font-bold text-gray-300 text-xs sm:text-sm">HA</span>
        </div>

        {/* Navbar Links */}
        <div className="flex justify-center items-center h-full flex-shrink">
          <div className="flex items-center justify-between w-auto h-auto border border-[#7042f88b] bg-[#0300145e] backdrop-blur-sm px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-gray-200 gap-3 sm:gap-4 md:gap-6">
            <Link href="#about-me">
              <span className="cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg hover:text-purple-400 transition-colors whitespace-nowrap">About</span>
            </Link>
            <Link href="#skills">
              <span className="cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg hover:text-purple-400 transition-colors whitespace-nowrap">Skills</span>
            </Link>
            <Link href="#projects">
              <span className="cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg hover:text-purple-400 transition-colors whitespace-nowrap">Projects</span>
            </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 min-w-[70px] sm:min-w-[100px] md:min-w-[200px] justify-end">
          <Link href="https://github.com/HafizAliAhmed" target="_blank" rel="noopener noreferrer" aria-label="GitHub - Hafiz Ali Ahmed">
            <RxGithubLogo className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 hover:text-gray-500 cursor-pointer transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/hafizaliahmed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn - Hafiz Ali Ahmed">
            <RxLinkedinLogo className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 hover:text-blue-500 cursor-pointer transition-colors" />
          </Link>
          <Link href="https://twitter.com/hafizaliahmed9" target="_blank" rel="noopener noreferrer" aria-label="Twitter - Hafiz Ali Ahmed" className="hidden sm:block">
            <RxTwitterLogo className="text-xl md:text-2xl lg:text-3xl text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
          </Link>
          <Link href="https://medium.com/@hafizaliahmed2004" target="_blank" rel="noopener noreferrer" aria-label="Medium - Hafiz Ali Ahmed" className="hidden sm:block">
            <SiMedium className="text-lg md:text-xl lg:text-2xl text-gray-300 hover:text-green-500 cursor-pointer transition-colors mt-[2px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
