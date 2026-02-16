"use client";

import Link from "next/link";
import React from "react";
import { skills, getSkillsByCategory } from "@/data/skills";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const aiSkills = getSkillsByCategory('ai');
  const frontendSkills = getSkillsByCategory('frontend');
  const backendSkills = getSkillsByCategory('backend');
  const fullstackSkills = getSkillsByCategory('fullstack');

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 sm:pb-60 md:pb-80 py-20 px-4 sm:px-5 md:px-10"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-3">
        <SkillText />

        {/* AI & ML Skills Row - Featured */}
        <div className="w-full mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Agentic AI & Machine Learning
            </span>
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {aiSkills.map((skill, index) => (
              <Link
                key={skill.slug}
                href={`/skills/${skill.slug}`}
                className="group"
                title={`Learn more about my ${skill.name} expertise`}
              >
                <SkillDataProvider
                  src={skill.icon}
                  width={skill.width}
                  height={skill.height}
                  index={index}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Full Stack Development Skills */}
        <div className="w-full mb-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-gray-300">
            Full Stack Development
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {fullstackSkills.map((skill, index) => (
              <Link
                key={skill.slug}
                href={`/skills/${skill.slug}`}
                className="group"
                title={`Learn more about my ${skill.name} expertise`}
              >
                <SkillDataProvider
                  src={skill.icon}
                  width={skill.width}
                  height={skill.height}
                  index={index}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Frontend Skills Row */}
        <div className="w-full mb-6">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center mb-4 text-gray-400">
            Frontend Technologies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {frontendSkills.map((skill, index) => (
              <Link
                key={skill.slug}
                href={`/skills/${skill.slug}`}
                className="group"
                title={`Learn more about my ${skill.name} expertise`}
              >
                <SkillDataProvider
                  src={skill.icon}
                  width={skill.width}
                  height={skill.height}
                  index={index}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Backend Skills Row */}
        <div className="w-full mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-center mb-4 text-gray-400">
            Backend & DevOps
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {backendSkills.map((skill, index) => (
              <Link
                key={skill.slug}
                href={`/skills/${skill.slug}`}
                className="group"
                title={`Learn more about my ${skill.name} expertise`}
              >
                <SkillDataProvider
                  src={skill.icon}
                  width={skill.width}
                  height={skill.height}
                  index={index}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Background Video */}
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-50 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="metadata"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
