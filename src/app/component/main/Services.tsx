"use client";

import Link from "next/link";
import { ArrowUpRight, Bot, Workflow, Cloud, GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const SERVICES = [
  {
    icon: Workflow,
    name: "AI Automation Builds",
    desc:
      "End-to-end automation systems for operations, sales, support, and internal workflows. Custom-built, integrated with your stack, and shipped to production. The core of what we deliver at Safock.",
    deliverables: [
      "Workflow audit & spec",
      "Automation build",
      "Integration with your stack",
      "Handover & monitoring",
    ],
    eta: "2–6 weeks",
  },
  {
    icon: Bot,
    name: "Agentic AI Systems",
    desc:
      "Production-grade AI agents with planning, tool-use, memory, and evaluations. Built on OpenAI Agents SDK and LangGraph. Engineered for reliability — not demo-day polish.",
    deliverables: [
      "Architecture & spec",
      "Agent + tool implementation",
      "Eval harness & telemetry",
      "Production deployment",
    ],
    eta: "4–8 weeks",
  },
  {
    icon: Cloud,
    name: "AI-Native Cloud Architecture",
    desc:
      "Design and implementation of the cloud layer your AI product runs on. Vector databases, RAG pipelines, queues, and observability built in from day one — on AWS, GCP, or Vercel.",
    deliverables: [
      "Architecture RFC & diagrams",
      "Infrastructure-as-code",
      "Cost & scale plan",
      "Security review",
    ],
    eta: "3–6 weeks",
  },
  {
    icon: GraduationCap,
    name: "Workshops & Strategic Advisory",
    desc:
      "Selective in-house workshops and fractional advisory for engineering teams ready to ship AI-native. Drawn from teaching 10,000+ students and building production AI for clients.",
    deliverables: [
      "Custom curriculum or strategy",
      "Live working sessions",
      "Reusable internal templates",
      "Post-engagement office hours",
    ],
    eta: "2–4 weeks",
  },
];

export default function Services() {
  // Service JSON-LD for each engagement shape — helps rank for service-intent queries
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Safock — AI Automations services",
    description:
      "Engagement shapes offered by Safock, an AI Automations company founded by Hafiz Ali Ahmed.",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "Service",
      position: i + 1,
      name: s.name,
      description: s.desc,
      provider: { "@id": `${siteConfig.safock.url}/#organization` },
      areaServed: "Worldwide",
      serviceType: s.name,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${s.name} deliverables`,
        itemListElement: s.deliverables.map((d) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: d },
        })),
      },
    })),
  };

  return (
    <section id="services" className="relative py-28 lg:py-36 border-t border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <div className="max-w-container mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">
              <span className="dot" /> 02 · Services
            </div>
            <h2 className="display-h2 mt-5 text-balance">
              How I work with{" "}
              <span className="display-italic text-text-secondary">
                founders & teams.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-text-secondary leading-relaxed">
              All client engagements run through{" "}
              <Link
                href={siteConfig.safock.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary link-underline"
              >
                Safock
              </Link>
              . Four engagement shapes covering most asks. Tightly scoped,
              founder-led, shipped end-to-end.
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
                    Typical · {s.eta}
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

        {/* Building in parallel callout */}
        <div className="mt-12 rounded-lg border border-border bg-bg-card p-7 lg:p-9">
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-bg-elevated border border-border text-accent flex-shrink-0">
              <span className="font-mono text-xs">P/01</span>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
                Building in parallel
              </div>
              <div className="mt-2 text-xl lg:text-2xl font-medium tracking-tight text-text-primary">
                Safock&apos;s own AI-native product is in active development.
              </div>
              <p className="mt-2 text-text-secondary leading-relaxed">
                Alongside client engagements, we&apos;re building our own
                AI-native product in stealth. Founder-led, dogfooded across
                every internal workflow. Details when it ships.
              </p>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-6 rounded-lg border border-border bg-bg-card p-7 lg:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <div className="text-xl lg:text-2xl font-medium tracking-tight text-text-primary">
              Not sure which one fits?
            </div>
            <p className="mt-1.5 text-text-secondary">
              Send a 2-line note about what you&apos;re building. I reply
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
