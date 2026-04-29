"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const FOCUS_AREAS = [
  {
    label: "Agentic AI",
    desc: "Autonomous agents with OpenAI Agents SDK, LangGraph, tool-use, memory, evals.",
  },
  {
    label: "AI-Native Cloud",
    desc: "Production architecture on AWS / GCP with vector DBs, RAG, observability and cost guardrails.",
  },
  {
    label: "Automation Systems",
    desc: "End-to-end workflows that replace operations work, not Zapier toys.",
  },
  {
    label: "Founder Coaching",
    desc: "Helping founders go from prototype to revenue without burning a team.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 border-t border-border">
      <div className="max-w-container mx-auto px-5 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="eyebrow">
              <span className="dot" /> 01 · About
            </div>
            <h2 className="display-h2 mt-5 text-balance">
              Operator. Builder.
              <br />
              <span className="display-italic text-text-secondary">Always shipping.</span>
            </h2>
          </div>

          <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-border">
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                I&apos;m{" "}
                <span className="text-text-primary">{siteConfig.author.name}</span>
                . I started writing code because I wanted to build the things I
                couldn&apos;t buy. Today I run{" "}
                <span className="text-text-primary">{siteConfig.author.company}</span>{" "}
                . An AI agency that designs and ships agentic systems for
                ambitious teams.
              </p>
              <p>
                Before this, I taught{" "}
                <span className="text-text-primary">1,500+ students</span> at
                the Governor Sindh Initiative for GenAI, Web3, and Metaverse,
                walking founders, engineers, and operators from zero to
                shipping AI products in production. That experience taught me
                what&apos;s noise and what actually moves the needle.
              </p>
              <p>
                My work sits at the seam of three things:{" "}
                <span className="text-text-primary">cloud architecture</span>,{" "}
                <span className="text-text-primary">agentic AI</span>, and{" "}
                <span className="text-text-primary">founder-led execution</span>
                . If you&apos;re building something that needs to be reliable,
                fast, and revenue-bearing, that&apos;s where I plug in.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Link href={siteConfig.bookingUrl} className="btn-primary">
                Work with me
                <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
              </Link>
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Read background
                <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>

        {/* Focus areas grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {FOCUS_AREAS.map((f, i) => (
            <div
              key={f.label}
              className="bg-bg-card p-7 hover:bg-bg-elevated transition-colors"
            >
              <div className="font-mono text-xs text-text-muted">
                /0{i + 1}
              </div>
              <div className="mt-4 text-text-primary font-medium text-lg">
                {f.label}
              </div>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote / philosophy */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <div className="eyebrow justify-center">
            <span className="dot" /> Operating principle
          </div>
          <p className="mt-6 display-h3 text-balance">
            <span className="display-italic text-text-secondary">
              &ldquo;Most AI work fails because it stops at the demo.&rdquo;
            </span>{" "}
            <br className="hidden sm:block" />
            <span className="text-text-primary">
              I treat every engagement like it has to survive contact with real
              users on day one, because it does.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
