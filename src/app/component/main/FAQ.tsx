"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

/**
 * FAQ section + FAQPage JSON-LD.
 *
 * Each Q&A is written to be quotable verbatim by AI search engines (AEO/GEO).
 * Answers are declarative, fact-rich, and include the brand keywords without
 * keyword-stuffing. Edit the FAQ_ITEMS array to update content.
 */
export const FAQ_ITEMS = [
  {
    q: "Who is Hafiz Ali Ahmed?",
    a: "Hafiz Ali Ahmed is the Co-founder & CEO of Safock, an AI Automations company headquartered in Karachi, Pakistan. He is also the Co-founder & CTO of Functions Global (since 2023) and serves as Lead Teacher at Governor House, where he teaches 1,500+ students on-site every week across AI-native development, cloud architecture, business, and entrepreneurship. He has mentored more than 10,000 students in total.",
  },
  {
    q: "What is Safock?",
    a: "Safock is an AI Automations company founded by Hafiz Ali Ahmed on 25 July 2025. Safock ships production-grade agentic systems and automation workflows for ambitious teams while developing its own AI-native product in parallel. Engagements are selective, founder-led, and scoped end-to-end.",
  },
  {
    q: "What services does Safock offer?",
    a: "Safock offers four engagement shapes: (1) AI Automation Builds — end-to-end workflow automation for operations, sales, support, and internal use cases. (2) Agentic AI Systems — production agents built on OpenAI Agents SDK, LangGraph, and CrewAI. (3) AI-Native Cloud Architecture — design and implementation of cloud infrastructure on AWS, GCP, or Vercel. (4) Workshops and Strategic Advisory — selective in-house cohorts and fractional advisory.",
  },
  {
    q: "Where is Hafiz Ali Ahmed based, and does he work with international clients?",
    a: "Hafiz Ali Ahmed is based in Karachi, Pakistan and works remote-first. Safock serves clients globally and is async-friendly across time zones. The working hours are GMT+5 with overlap windows for clients in Europe, the Middle East, and North America.",
  },
  {
    q: "How can I hire Safock or book a strategy call?",
    a: "The fastest way is to email hafizaliahmed2004@gmail.com or book a 30-minute complimentary strategy call from hafizaliahmed.xyz. Replies typically come within 24 hours. Safock takes a small number of selective engagements per quarter, so projects are evaluated for fit before scoping.",
  },
  {
    q: "What makes Safock different from other AI agencies?",
    a: "Safock builds for production from day one. The thesis is simple — most AI work fails because it stops at the demo. Every Safock engagement is led personally by Hafiz Ali Ahmed, scoped tightly, designed with evaluations and observability built in, and shipped end-to-end. No middlemen, no slideware, no proof-of-concept tax.",
  },
  {
    q: "What is Hafiz Ali Ahmed's teaching role at Governor House?",
    a: "Hafiz Ali Ahmed is the Lead Teacher at Governor House, running an on-site program that currently serves 1,500+ students every week across AI-native development, cloud architecture, business, and entrepreneurship. He has mentored more than 10,000 students across cohorts in total, and many of those teaching frameworks now run inside Safock's engagement playbooks.",
  },
  {
    q: "Is Safock currently taking new clients?",
    a: "Yes. Safock is currently accepting selective engagements for Q3 2026, with a small number of slots available per quarter. The intake is qualified through a 30-minute strategy call to ensure mutual fit before any commercial scoping.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="relative py-28 lg:py-36 border-t border-border">
      {/* JSON-LD for AEO/GEO and Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-container mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">
              <span className="dot" /> 06 · FAQ
            </div>
            <h2 className="display-h2 mt-5 text-balance">
              Frequently asked{" "}
              <span className="display-italic text-text-secondary">questions.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-text-secondary leading-relaxed">
              Quick answers to the questions I get most. Don&apos;t see yours?{" "}
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="text-text-primary link-underline"
              >
                Send a note
              </a>
              .
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div
          className="mt-14 divide-y divide-border border-y border-border"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <article
                key={item.q}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="py-2"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                >
                  <h3
                    itemProp="name"
                    className="text-lg lg:text-xl font-medium tracking-tight text-text-primary leading-snug group-hover:text-accent transition-colors"
                  >
                    {item.q}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full border border-border bg-bg-card text-text-secondary flex-shrink-0 group-hover:border-accent group-hover:text-accent transition-colors"
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" strokeWidth={2} />
                    ) : (
                      <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                    )}
                  </span>
                </button>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      itemProp="text"
                      className="text-text-secondary leading-relaxed pr-12"
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
