"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../../../utils/motion";

const About = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-5 md:px-10 lg:px-20" id="about">
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Me
            </span>
          </motion.h2>
          <motion.p
            variants={slideInFromLeft(0.7)}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            A quick intro, nothing fancy
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
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
                The Backstory
              </h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  So I&apos;m <strong>Ali</strong>. Been coding since I was in college. Started with the usual web dev stuff, React, Next.js, building apps for clients. It paid the bills but something felt missing.
                </p>
                <p>
                  Then one day I saw a demo of an AI agent booking a restaurant reservation by itself. No human in the loop. That was it for me. I dropped everything else and went all in on <strong>agentic AI</strong>.
                </p>
                <p>
                  Best decision I ever made, honestly.
                </p>
              </div>
            </div>

            <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">
                Day to Day
              </h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Most of my week goes into <strong>OpenAI Agent SDK</strong> and <strong>n8n</strong>. I wire up AI agents that do real stuff. Like, they can pick up the phone and call someone, pull data from three different APIs, send a follow-up email, all without me touching anything.
                </p>
                <p>
                  Not chatbots. Actual workers. They figure out the next step, do it, and move on.
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
                Teaching Side
              </h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Every week I stand in front of a class at <strong>Governor Sindh Initiative for GenAI, Web3, and Metaverse</strong>. Over <strong>1,500 students</strong> so far. We start from scratch, basic Python, and by the end they&apos;re shipping their own AI agents. Some of them now build better stuff than I did when I started.
                </p>
                <p>
                  Funny thing about teaching, it forces you to actually understand what you&apos;re talking about. Can&apos;t fake it when 30 people are staring at you waiting for an answer.
                </p>
              </div>
            </div>

            <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why I Do This
              </h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Look, AI isn&apos;t going to replace developers. But developers who know how to use AI? They&apos;ll run circles around everyone else. That&apos;s the bet I&apos;m making.
                </p>
                <p>
                  I break things constantly. Half my GitHub is failed experiments. But every now and then something clicks and I go &quot;oh, THAT&apos;S how it should work.&quot; Those moments keep me going.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg p-6 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-3">
                Say Hi
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Working on something with AI agents? Or just nerding out about this stuff? Drop me a message. I reply to pretty much everyone. Worst case we end up having a cool conversation.
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
              Stuff in My Toolbox
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
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
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

