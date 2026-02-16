"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { RxGithubLogo } from "react-icons/rx";
import { FiChevronRight, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-5 md:px-10 relative" id="projects">
      {/* Section Header */}
      <div className="text-center mb-10 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
          Stuff I Built
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
          Real projects, not tutorials. Some worked great, some I&apos;d do differently now.
          Either way, learned a ton from each one.
        </p>
      </div>

      {/* Full Stack Projects Section */}
      <div className="w-full max-w-7xl">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 text-center">
          Full Stack Applications
        </h3>
        <p className="text-center text-gray-400 mb-8 text-sm sm:text-base">
          Next.js, React, TypeScript. The usual suspects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project) => (
            <article key={project.slug} className="relative flex flex-col items-center group">
              {/* Project Card */}
              <Link
                href={`/projects/${project.slug}`}
                className="block w-full overflow-hidden rounded-lg shadow-lg shadow-[#2A0E61]/50 border border-[#2A0E61] hover:border-purple-500 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-[#181825]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-[#0300145e]">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Action Icons */}
              <div className="absolute top-2 left-2 z-10 flex gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <RxGithubLogo className="text-xl sm:text-2xl text-white hover:text-gray-400 cursor-pointer transition-colors" />
                </a>
              </div>
              <div className="absolute top-2 right-2 z-10">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  aria-label={`View ${project.title} live demo`}
                >
                  <FiExternalLink className="text-xl sm:text-2xl text-white hover:text-gray-400 cursor-pointer transition-colors" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center max-w-3xl">
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg p-8 backdrop-blur-md">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            There&apos;s More
          </h3>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Got a bunch more on my GitHub. Some polished, some experimental. Poke around if you want, and ping me if something grabs your attention.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform text-sm sm:text-base"
            >
              View All Projects
              <FiChevronRight className="text-lg sm:text-xl" />
            </Link>
            <a
              href="https://github.com/HafizAliAhmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0300145e] border border-[#7042f88b] text-white rounded-lg hover:border-purple-500 transition-colors text-sm sm:text-base"
            >
              <RxGithubLogo className="text-xl sm:text-2xl" />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
