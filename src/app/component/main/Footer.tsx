import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const FOOTER_NAV = [
  {
    title: "Site",
    links: [
      { label: "About", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Work", href: "/#work" },
      { label: "Stack", href: "/#stack" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Safock", href: siteConfig.safock.url, external: true },
      { label: "Book a call", href: siteConfig.bookingUrl },
      { label: "Email", href: `mailto:${siteConfig.author.email}` },
      { label: "LinkedIn", href: siteConfig.social.linkedin, external: true },
      { label: "X / Twitter", href: siteConfig.social.twitterUrl, external: true },
      { label: "GitHub", href: siteConfig.social.github, external: true },
      { label: "Medium", href: siteConfig.social.medium, external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "All projects", href: "/projects" },
      { label: "All skills", href: "/skills" },
      { label: "Sitemap", href: "/sitemap.xml" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-bg-subtle">
      <div className="max-w-container mx-auto px-5 lg:px-8 pt-20 pb-10">
        {/* Top: wordmark + tagline */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-border">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent text-on-accent font-display italic text-xl leading-none">
                <span className="-mt-0.5">h.</span>
              </span>
              <span className="text-base font-medium tracking-tight text-text-primary">
                hafizaliahmed<span className="text-text-muted">.xyz</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-text-secondary leading-relaxed">
              {siteConfig.author.name}. Co-founder & CEO of{" "}
              <Link
                href={siteConfig.safock.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary link-underline"
              >
                {siteConfig.safock.name}
              </Link>
              {" "}— an AI automations company. Co-founder & CTO of Functions Global. Teacher/Faculty at Governor House.
            </p>
            <Link
              href={siteConfig.bookingUrl}
              className="mt-7 inline-flex items-center gap-1.5 text-text-primary hover:text-accent transition-colors"
            >
              <span className="link-underline">Start a project</span>
              <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_NAV.map((col) => (
              <div key={col.title}>
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
                  {col.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        target={"external" in l && l.external ? "_blank" : undefined}
                        rel={"external" in l && l.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Big wordmark */}
        <div className="py-12 select-none overflow-hidden">
          <div className="text-[11vw] lg:text-[9vw] leading-[0.85] font-medium tracking-[-0.05em] text-text-primary/[0.06] text-center whitespace-nowrap">
            hafizaliahmed.xyz
          </div>
        </div>

        {/* Meta row */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
          <div className="flex items-center gap-3">
            <span>© {year} {siteConfig.author.name}</span>
            <span className="w-1 h-1 rounded-full bg-text-faint" />
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent-glow)]" />
              Available for Q3 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
