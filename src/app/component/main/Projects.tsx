import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { RxGithubLogo } from "react-icons/rx";
import { FiChevronRight, FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-5 md:px-10 relative" id="projects">
      {/* Section Header */}
      <div className="text-center mb-10 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
          Featured Projects
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
          Showcase of my work in AI development, full-stack applications, and modern web technologies. 
          Each project demonstrates practical implementation of cutting-edge tools and frameworks.
        </p>
      </div>

      {/* AI & Automation Projects Section */}
      <div className="w-full max-w-7xl mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            AI & Automation Projects
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm sm:text-base">
          Building intelligent systems with LangChain, OpenAI, and n8n
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-8">
          <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-2 border-purple-500/30 rounded-lg p-6 hover:scale-105 transition-transform">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">AI Calling Agent System</h3>
              <RxGithubLogo className="text-2xl sm:text-3xl text-purple-400 hover:text-purple-300 cursor-pointer" />
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Autonomous AI agent capable of making intelligent phone calls using OpenAI Agent SDK and voice synthesis. 
              Handles customer inquiries, schedules appointments, and provides real-time responses.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs sm:text-sm text-purple-300">OpenAI SDK</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs sm:text-sm text-cyan-300">LangChain</span>
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs sm:text-sm text-purple-300">FastAPI</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs sm:text-sm text-cyan-300">Voice AI</span>
            </div>
            <div className="text-yellow-400 text-xs sm:text-sm font-semibold">🚀 Coming Soon</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-2 border-cyan-500/30 rounded-lg p-6 hover:scale-105 transition-transform">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">n8n Workflow Automation Hub</h3>
              <RxGithubLogo className="text-2xl sm:text-3xl text-cyan-400 hover:text-cyan-300 cursor-pointer" />
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Advanced automation workflows integrating multiple APIs, databases, and AI services. 
              Streamlines business processes with intelligent decision-making and data processing.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs sm:text-sm text-cyan-300">n8n</span>
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs sm:text-sm text-purple-300">AI Integration</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs sm:text-sm text-cyan-300">APIs</span>
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs sm:text-sm text-purple-300">Automation</span>
            </div>
            <div className="text-yellow-400 text-xs sm:text-sm font-semibold">🚀 Coming Soon</div>
          </div>
        </div>
      </div>

      {/* Full Stack Projects Section */}
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
          Full Stack Applications
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm sm:text-base">
          Modern web applications built with Next.js, React, and TypeScript
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {/* Project 1 */}
        <div className="relative flex flex-col items-center group">
          <ProjectCard
            src="/project2.png"
            title="Next.js Portfolio"
            description="Modern portfolio website showcasing projects with responsive design and smooth animations"
          />
          <div className="absolute top-2 left-2 z-10">
            <Link href="https://github.com/HafizAliAhmed" target="_blank" rel="noopener noreferrer">
              <RxGithubLogo className="text-2xl sm:text-3xl text-white hover:text-gray-400 cursor-pointer transition-colors" />
            </Link>
          </div>
          <div className="absolute top-2 right-2 z-10">
            <Link href="https://my-portfolio-project-vert.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FiChevronRight className="text-3xl sm:text-4xl text-white hover:text-gray-400 cursor-pointer transition-colors" />
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative flex flex-col items-center group">
          <ProjectCard
            src="/project3.png"
            title="Photo Gallery App"
            description="Cloud-based photo management system with Cloudinary integration and optimized image delivery"
          />
          <div className="absolute top-2 left-2 z-10">
            <Link href="https://github.com/HafizAliAhmed/cloudinary-photo-gallery-app" target="_blank" rel="noopener noreferrer">
              <RxGithubLogo className="text-2xl sm:text-3xl text-white hover:text-gray-400 cursor-pointer transition-colors" />
            </Link>
          </div>
          <div className="absolute top-2 right-2 z-10">
            <Link href="https://cloudinary-photo-gallery-88ashyb70-hafiz-ali-ahmeds-projects.vercel.app/gallery" target="_blank" rel="noopener noreferrer">
              <FiChevronRight className="text-3xl sm:text-4xl text-white hover:text-gray-400 cursor-pointer transition-colors" />
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative flex flex-col items-center group">
          <ProjectCard
            src="/ecommerce.png"
            title="E-commerce Website"
            description="Full-featured e-commerce platform with cart, checkout, and payment integration"
          />
          <div className="absolute top-2 left-2 z-10">
            <Link href="https://github.com/HafizAliAhmed" target="_blank" rel="noopener noreferrer">
              <RxGithubLogo className="text-2xl sm:text-3xl text-white hover:text-gray-400 cursor-pointer transition-colors" />
            </Link>
          </div>
          <div className="absolute top-2 right-2 z-10">
            <Link href="https://hackathon-beryl.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FiChevronRight className="text-3xl sm:text-4xl text-white hover:text-gray-400 cursor-pointer transition-colors" />
            </Link>
          </div>
        </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center max-w-3xl">
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg p-8 backdrop-blur-md">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want to See More?
          </h3>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Check out my GitHub for more projects, open-source contributions, and experimental AI implementations.
          </p>
          <Link 
            href="https://github.com/HafizAliAhmed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform text-sm sm:text-base"
          >
            <RxGithubLogo className="text-xl sm:text-2xl" />
            View All Projects on GitHub
            <FiExternalLink className="text-lg sm:text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
