"use client";

import Link from "next/link";
import { ArrowUpRight, Bot, Cloud, Workflow, GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const SERVICES = [
  {
    icon: Bot,
    name: "Agentic AI Engineering",
    desc:
      "Production agents with planning, tool-use, memory and evaluations. Built on OpenAI Agents SDK, LangGraph, and CrewAI, with real observability, not just vibes.",
    deliverables: ["Agent architecture & specs", "Tool integrations", "Eval harness + telemetry", "Hand-off to your team"],
    eta: "4–8 weeks",
  },
  {
    icon: Cloud,
    name: "AI-Native Cloud Architecture",
    desc:
      "I design and ship the infra layer your AI product runs on: vector DBs, RAG pipelines, queues, schedulers, auth, billing. On AWS, GCP, or Vercel + Cloudflare.",
    deliverables: ["System diagram & RFC", "IaC + CI/CD", "Cost & scale plan", "Security review"],
    eta: "3–6 weeks",
  },
  {
    icon: Workflow,
    name: "Automation & Internal AI",
    desc:
      "Replace operations work with agentic workflows: lead enrichment, research, content ops, customer support deflection, ticket triage. Measured in hours saved and revenue moved.",
    deliverables: ["Workflow audit", "Automation build-out", "Integration with your stack", "ROI dashboard"],
    eta: "2–5 weeks",
  },
  {
    icon: GraduationCap,
    name: "Founder Advisory & Cohorts",
    desc:
      "Hands-on advisory for founders going from prototype to revenue. Private cohorts and fractional engineering for early-stage AI startups that can't afford to waste cycles.",
    deliverables: ["Strategy roadmap", "Weekly working sessions", "Hiring & stack guidance", "Founder cohort access"],
    eta: "Ongoing",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 border-t border-border">
      <div className="max-w-container mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">
              <span className="dot" /> 02 · Services
            </div>
            <h2 className="display-h2 mt-5 text-balance">
              How I work with{" "}
              <span className="display-italic text-text-secondary">founders & teams.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-text-secondary leading-relaxed">
              Four engagement shapes, chosen so we can move fast without
              skipping the parts that actually matter. Every project is led
              personally, scoped end-to-end, and shipped to production.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.name} className="card-feature group">
                <div className="flex items-start justify-between gap-6">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-bg-elevated border border-border text-accent">
                    <Icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <div className="font-mono text-xs text-text-muted pt-1">
                    /0{i + 1}
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-medium tracking-tight text-text-primary">
                  {s.name}
                </h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {s.desc}
                </p>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
                    Deliverables
                  </div>
                  <ul className="mt-3 grid grid-cols-2 gap-y-2 gap-x-4">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
                    Typical timeline · {s.eta}
                  </span>
                  <Link
                    href={siteConfig.bookingUrl}
                    className="inline-flex items-center gap-1 text-sm text-text-primary hover:text-accent transition-colors"
                  >
                    Discuss scope
                    <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-14 rounded-lg border border-border bg-bg-card p-7 lg:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <div className="text-xl lg:text-2xl font-medium tracking-tight text-text-primary">
              Not sure which one fits?
            </div>
            <p className="mt-1.5 text-text-secondary">
              Send a 2-line note about what you&apos;re building. I&apos;ll reply
              within 24 hours with a recommendation. No pitch deck required.
            </p>
          </div>
          <Link href={siteConfig.bookingUrl} className="btn-primary">
            Start a conversation
            <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
