"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-bg/70 border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-container mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-on-accent font-display italic text-lg leading-none">
              <span className="-mt-0.5">h.</span>
            </span>
            <span className="hidden sm:inline text-[15px] font-medium tracking-tight text-text-primary">
              hafizaliahmed<span className="text-text-muted">.xyz</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-ghost text-xs"
              aria-label="GitHub"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.bookingUrl}
              className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
            >
              Book a call
              <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-full border border-border text-text-primary"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-bg/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <div className="relative h-full flex flex-col p-6">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-on-accent font-display italic text-lg leading-none">
                  <span className="-mt-0.5">h.</span>
                </span>
                <span className="text-[15px] font-medium tracking-tight">
                  hafizaliahmed<span className="text-text-muted">.xyz</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-full border border-border"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="mt-12 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-3xl font-medium tracking-tight text-text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 flex flex-col gap-3">
              <Link
                href={siteConfig.bookingUrl}
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Book a call <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-between text-sm text-text-secondary pt-4 border-t border-border">
                <Link href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">GitHub</Link>
                <Link href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                <Link href={siteConfig.social.twitterUrl} target="_blank" rel="noopener noreferrer">X</Link>
                <Link href={siteConfig.social.medium} target="_blank" rel="noopener noreferrer">Medium</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
