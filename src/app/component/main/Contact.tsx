"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Calendar, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 border-t border-border overflow-hidden bg-noise"
    >
      {/* Soft glow at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-radial-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-50" aria-hidden />

      <div className="relative max-w-container mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="eyebrow justify-center inline-flex">
            <span className="dot" /> 06 · Let&apos;s build
          </div>
          <h2 className="display-h1 mt-6 text-balance">
            Got something{" "}
            <span className="display-italic text-accent">ambitious</span> in
            mind?
          </h2>
          <p className="mt-6 lead mx-auto">
            Whether it&apos;s an AI agent for your team, a cloud system that
            keeps falling over, or a startup idea you&apos;re ready to ship,
            send a note. I read every message.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href={siteConfig.bookingUrl} className="btn-primary">
              Book a strategy call
              <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
            </Link>
            <Link
              href={`mailto:${siteConfig.author.email}`}
              className="btn-secondary"
            >
              <Mail className="w-4 h-4" strokeWidth={1.6} />
              {siteConfig.author.email}
            </Link>
          </div>
        </div>

        {/* Contact grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          <div className="bg-bg-card p-8 hover:bg-bg-elevated transition-colors">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-bg-elevated border border-border text-accent">
              <Mail className="w-4 h-4" strokeWidth={1.6} />
            </div>
            <div className="mt-5 text-text-primary font-medium">Email</div>
            <Link
              href={`mailto:${siteConfig.author.email}`}
              className="mt-2 block text-sm text-text-secondary hover:text-accent transition-colors break-all"
            >
              {siteConfig.author.email}
            </Link>
            <div className="mt-3 text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
              Reply within 24h
            </div>
          </div>

          <div className="bg-bg-card p-8 hover:bg-bg-elevated transition-colors">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-bg-elevated border border-border text-accent">
              <Calendar className="w-4 h-4" strokeWidth={1.6} />
            </div>
            <div className="mt-5 text-text-primary font-medium">Strategy call</div>
            <Link
              href={siteConfig.bookingUrl}
              className="mt-2 block text-sm text-text-secondary hover:text-accent transition-colors"
            >
              30-min intro · Free
            </Link>
            <div className="mt-3 text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
              For founders & teams
            </div>
          </div>

          <div className="bg-bg-card p-8 hover:bg-bg-elevated transition-colors">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-bg-elevated border border-border text-accent">
              <MapPin className="w-4 h-4" strokeWidth={1.6} />
            </div>
            <div className="mt-5 text-text-primary font-medium">Working from</div>
            <div className="mt-2 text-sm text-text-secondary">
              Karachi · Remote-first
            </div>
            <div className="mt-3 text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
              GMT+5 · Async-friendly
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-border">
          <div className="text-sm text-text-secondary">
            Or find me on the platforms I actually post on.
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={siteConfig.social.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              X / Twitter
              <ArrowUpRight className="w-3.5 h-3.5 btn-icon-arrow" strokeWidth={2} />
            </Link>
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5 btn-icon-arrow" strokeWidth={2} />
            </Link>
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5 btn-icon-arrow" strokeWidth={2} />
            </Link>
            <Link
              href={siteConfig.social.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Medium
              <ArrowUpRight className="w-3.5 h-3.5 btn-icon-arrow" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
