"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-noise"
    >
      {/* Background grid + radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />

      {/* Subtle accent line at top */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-accent/60 to-transparent" aria-hidden />

      <div className="relative max-w-container mx-auto px-5 lg:px-8">
        {/* Status pill */}
        <div className="flex justify-center reveal">
          <div className="status-pill">
            <span className="pulse" />
            <span>Available · Q3 2026 cohort</span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="display-h1 text-center mt-8 mx-auto reveal"
          style={{ animationDelay: "0.06s" }}
        >
          <span className="block text-balance whitespace-normal sm:whitespace-nowrap">
            AI systems that{" "}
            <span className="font-display italic font-normal">ship.</span>
          </span>
          <span className="block text-text-secondary">Not demos.</span>
        </h1>

        {/* Sub */}
        <p
          className="mt-7 text-lg sm:text-xl text-text-secondary text-center max-w-[62ch] mx-auto leading-relaxed reveal"
          style={{ animationDelay: "0.14s" }}
        >
          I&apos;m{" "}
          <span className="text-text-primary font-medium">
            {siteConfig.author.name}
          </span>
          . An AI-native cloud architect and founder. I help ambitious teams
          design and ship production-grade AI agents, automations, and cloud
          platforms that actually move revenue.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 reveal"
          style={{ animationDelay: "0.22s" }}
        >
          <Link href={siteConfig.bookingUrl} className="btn-primary">
            Book a strategy call
            <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
          </Link>
          <Link href="/#work" className="btn-secondary">
            See selected work
          </Link>
        </div>

        {/* Meta line */}
        <div
          className="mt-10 flex items-center justify-center gap-6 text-xs font-mono uppercase tracking-[0.14em] text-text-muted reveal"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-accent" />
            Founder · {siteConfig.author.company}
          </span>
          <span className="hidden sm:block w-px h-3 bg-border-strong" />
          <span className="hidden sm:inline">Karachi · Remote-first</span>
        </div>

        {/* Hero stats / proof bar */}
        <div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border reveal"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { kpi: "1,500+", label: "Students taught", sub: "Governor Sindh GenAI" },
            { kpi: "20+", label: "AI systems shipped", sub: "Agents · automation · cloud" },
            { kpi: "4 yrs", label: "Building in production", sub: "Since 2022" },
            { kpi: "24/7", label: "Founder-led delivery", sub: "Direct line, no middlemen" },
          ].map((s) => (
            <div key={s.label} className="bg-bg-card p-6 lg:p-8 hover:bg-bg-elevated transition-colors">
              <div className="text-3xl lg:text-4xl font-medium tracking-tight text-text-primary">
                {s.kpi}
              </div>
              <div className="mt-2 text-sm text-text-primary font-medium">
                {s.label}
              </div>
              <div className="text-xs text-text-muted mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
