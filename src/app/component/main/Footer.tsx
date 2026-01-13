import React from "react";
import { Phone, Mail, FileText } from "lucide-react"

import Link from "next/link";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { SiMedium } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="w-full h-full text-gray-200 p-6 shadow-lg border shadow-[#2A0E61] bg-[#03441417] border-[#2A0E61] backdrop-blur-md">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between sm:justify-around flex-wrap gap-6 sm:gap-8">
          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center mb-6 sm:mb-0">
            <h2 className="font-bold text-lg mb-2">Community</h2>
            <Link href="https://github.com/HafizAliAhmed" target="_blank" aria-label="GitHub">
              <p className="flex items-center my-2 hover:text-gray-400">
                <RxGithubLogo className="mr-2 hover:text-gray-500 text-xl sm:text-2xl" />
                Github
              </p>
            </Link>
            <Link
              href="https://discord.com/channels/790484092772548613/1190583666548674570"
              target="_blank"
              aria-label="Discord"
            >
              <p className="flex items-center my-2 hover:text-purple-800">
                <RxDiscordLogo className="mr-2 hover:text-purple-800 text-xl sm:text-2xl" />
                Discord
              </p>
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] flex flex-col items-center mb-6 sm:mb-0">
            <h2 className="font-bold text-lg mb-2">Social Media</h2>
            <Link
              href="https://twitter.com/hafizaliahmed9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter - Hafiz Ali Ahmed"
              className="flex items-center my-2 hover:text-gray-400"
            >
              <RxTwitterLogo className="mr-2 text-xl sm:text-2xl" />
              Twitter
            </Link>
            <Link
              href="https://www.linkedin.com/in/hafizaliahmed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn - Hafiz Ali Ahmed"
              className="flex items-center my-2 hover:text-blue-500"
            >
              <RxLinkedinLogo className="mr-2 text-xl sm:text-2xl" />
              LinkedIn
            </Link>
            <Link
              href="https://medium.com/@hafizaliahmed2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium - Hafiz Ali Ahmed"
              className="flex items-center my-2 hover:text-green-500"
            >
              <SiMedium className="mr-2 text-xl sm:text-2xl" />
              Medium
            </Link>
          </div>

          {/* Contact Section */}
          <div className="min-w-[200px] flex flex-col items-center mb-6 sm:mb-0">
            <h2 className="font-bold text-lg mb-2">Contact</h2>
            <Link
              href="mailto:hafizaliahmed2004@gmail.com"
              className="flex items-center my-2 hover:text-purple-400"
              aria-label="Email Hafiz Ali Ahmed"
            >
              <Mail className="mr-2 text-lg" />
              Email
            </Link>
            <Link
              href="https://hafiz-aliahmed-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 hover:text-purple-400"
              aria-label="Portfolio Website"
            >
              <FileText className="mr-2 text-lg" />
              Portfolio
            </Link>
            <p className="text-sm text-gray-400 mt-2 text-center">hafizaliahmed2004@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400 mb-2">
            <strong>Hafiz Ali Ahmed</strong> - Agentic AI Developer | OpenAI Agent SDK
          </p>
          <p className="text-sm text-gray-400">
            Co-Founder at Functions Global | Educator at Governor Sindh GenAI Initiative
          </p>
          <p className="text-xs text-gray-500 mt-3">
            &copy; 2025 Hafiz Ali Ahmed. All rights reserved. Building autonomous AI systems that think, decide, and act.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
