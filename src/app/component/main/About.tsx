"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../../../utils/motion";

const About = () => {
  return (
    <section className="w-full py-20 px-5 md:px-20" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={slideInFromLeft(0.5)}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Hafiz Ali Ahmed
            </span>
          </motion.h2>
          <motion.p
            variants={slideInFromLeft(0.7)}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Building the Next Generation of Autonomous AI Systems
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Professional Journey */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft(0.5)}
            className="space-y-6"
          >
            <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">
                My Journey
              </h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  I&apos;m <strong>Hafiz Ali Ahmed</strong>, an <strong>Agentic AI Developer</strong>, <strong>Educator</strong>, and <strong>Co-Founder of Functions Global</strong>—dedicated to creating intelligent systems that don&apos;t just respond to commands, but think ahead, make decisions, and take action independently.
                </p>
                <p>
                  My journey began in full-stack development, building user-centered web applications with React and Next.js. But I kept asking myself: <em>What if software could do more than execute—what if it could reason?</em>
                </p>
                <p>
                  That question led me to the frontier of <strong>Agentic AI</strong>.
                </p>
              </div>
            </div>

            <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">
                Current Focus
              </h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Today, I work hands-on with cutting-edge frameworks like <strong>OpenAI Agent SDK</strong> and <strong>n8n</strong>—architecting autonomous agents that bridge human creativity with machine intelligence.
                </p>
                <p>
                  I specialize in building <strong>AI Calling Agents</strong> and workflow automation systems that aren&apos;t just chatbots—they&apos;re intelligent systems that plan workflows, connect tools, make calls, and adapt based on outcomes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education & Impact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromRight(0.5)}
            className="space-y-6"
          >
            <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">
                Education & Impact
              </h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  As an educator at the <strong>Governor Sindh Initiative for GenAI, Web3, and Metaverse</strong>, I mentor over <strong>1,500 students and professionals</strong>, helping them transition from traditional coding to building AI agents capable of real-world decision-making.
                </p>
                <p>
                  Teaching isn&apos;t just about sharing knowledge—it&apos;s about shaping the ethical and practical future of AI development.
                </p>
              </div>
            </div>

            <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">
                Vision & Philosophy
              </h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  <strong>Hafiz Ali Ahmed</strong> isn&apos;t just my name—it represents a commitment to innovation that scales. I believe the next phase of software development lies in <strong>collaborative intelligence</strong>: AI agents that work with us, not just for us.
                </p>
                <p>
                  Through research, experimentation, and community collaboration, I explore how Agentic AI can transform productivity, education, and how we build technology itself.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg p-6 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-3">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you&apos;re exploring OpenAI&apos;s Agent SDK, building with agentic workflows, or curious about autonomous systems—let&apos;s connect. The future of AI is being written right now, and I&apos;m excited to build it alongside forward-thinking creators and innovators.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Technologies & Keywords Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
          className="mt-16"
        >
          <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Core Technologies & Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "OpenAI Agent SDK",
                "n8n Automation",
                "AI Calling Agents",

                "Agentic AI",
                "Autonomous Systems",
                "Next.js",
                "React",
                "TypeScript",
                "Python",
                "FastAPI",
                "Machine Learning",
                "AI Education",
                "Full Stack Development"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-gray-200 hover:scale-105 transition-transform"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-center bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6 backdrop-blur-md"
          >
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
              1,500+
            </div>
            <div className="text-gray-300">Students Mentored</div>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.7)}
            className="text-center bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6 backdrop-blur-md"
          >
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
              Co-Founder
            </div>
            <div className="text-gray-300">Functions Global</div>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.9)}
            className="text-center bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6 backdrop-blur-md"
          >
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
              Educator
            </div>
            <div className="text-gray-300">Governor Sindh Initiative</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

