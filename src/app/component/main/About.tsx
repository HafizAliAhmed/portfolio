"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const FOCUS_AREAS = [
  {
    label: "AI Automations",
    desc: "Agentic workflows and end-to-end automation systems for ambitious teams. The core of what we build at Safock.",
  },
  {
    label: "AI-Native Product",
    desc: "Building Safock's own AI-native product alongside client work. Founder-led, in active development.",
  },
  {
    label: "Cloud Architecture",
    desc: "AI-native cloud infrastructure on AWS, GCP, and Vercel — designed for production from the first commit.",
  },
  {
    label: "Education",
    desc: "Lead Teacher at Governor House. 1,500+ students on-site weekly across AI-native, cloud, business, and entrepreneurship.",
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
              Founder. Builder.
              <br />
              <span className="display-italic text-text-secondary">Educator.</span>
            </h2>
          </div>

          <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-border">
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                I&apos;m{" "}
                <span className="text-text-primary">{siteConfig.author.name}</span>
                . My career sits at the seam of three roles that compound on
                each other: founder, builder, and educator.
              </p>

              <p>
                In 2023 I co-founded{" "}
                <span className="text-text-primary">
                  {siteConfig.functionsGlobal.name}
                </span>{" "}
                and serve as its{" "}
                <span className="text-text-primary">
                  {siteConfig.functionsGlobal.role}
                </span>
                , leading engineering across AI-native products and
                infrastructure. In July 2025 I co-founded{" "}
                <Link
                  href={siteConfig.safock.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary link-underline"
                >
                  Safock
                </Link>
                , an AI automations company. We ship agentic workflows and
                automation systems for ambitious teams while developing our
                own AI-native product in parallel. I&apos;m{" "}
                <span className="text-text-primary">Co-founder & CEO</span>.
              </p>

              <p>
                Alongside the companies, I teach. I&apos;ve mentored{" "}
                <span className="text-text-primary">10,000+ students</span> in
                total and currently serve as{" "}
                <span className="text-text-primary">Lead Teacher</span> at{" "}
                <span className="text-text-primary">Governor House</span>,
                where I instruct{" "}
                <span className="text-text-primary">1,500+ students</span>{" "}
                on-site every week across AI-native development, cloud
                architecture, business, and entrepreneurship.
              </p>

              <p>
                The thread across all three roles is the same: build things
                that work in production, teach what I learn, and ship more
                than I talk about. Safock is the latest expression of that
                thesis.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={siteConfig.bookingUrl} className="btn-primary">
                Book a strategy call
                <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
              </Link>
              <Link
                href={siteConfig.safock.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Visit Safock
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

        {/* Operating principle */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <div className="eyebrow justify-center">
            <span className="dot" /> Operating principle
          </div>
          <p className="mt-6 display-h3 text-balance">
            <span className="display-italic text-text-secondary">
              &ldquo;Build it, teach it, ship it.&rdquo;
            </span>{" "}
            <br className="hidden sm:block" />
            <span className="text-text-primary">
              The only way to know what works in AI is to put it in front of
              users — and the only way to scale what you learn is to teach it
              to the next builder.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
