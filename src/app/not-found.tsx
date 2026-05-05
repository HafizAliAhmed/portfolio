import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Page not found · 404",
  description:
    "The page you were looking for doesn't exist on hafizaliahmed.xyz. Head back to the home page or jump to one of the recent sections.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="bg-bg text-text-primary">
      <section className="relative min-h-[80vh] pt-32 pb-24 lg:pt-40 overflow-hidden bg-noise flex items-center">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />

        <div className="relative max-w-container mx-auto px-5 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto text-center">
            <div className="eyebrow justify-center inline-flex">
              <span className="dot" /> Error 404
            </div>
            <h1
              className="display-h1 mt-6 text-balance"
              style={{ fontSize: "clamp(2.5rem, 6.2vw, 5.5rem)" }}
            >
              Page not{" "}
              <span className="display-italic text-text-secondary">found.</span>
            </h1>
            <p className="mt-7 lead mx-auto">
              The page you were looking for doesn&apos;t exist on
              hafizaliahmed.xyz, or it has been moved. Try one of these
              instead.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/" className="btn-primary">
                <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                Home page
              </Link>
              <Link href="/blog" className="btn-secondary">
                Read the blog
                <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
              </Link>
            </div>

            {/* Quick links — internal SEO link juice */}
            <div className="mt-16 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden text-left">
              {[
                { label: "About me", href: "/#about" },
                { label: "Services through Safock", href: "/#services" },
                { label: "Selected work", href: "/#work" },
                { label: "Stack", href: "/#stack" },
                { label: "Writing", href: "/blog" },
                { label: "Contact", href: "/#contact" },
                { label: "Visit Safock", href: siteConfig.safock.url },
                {
                  label: `Email ${siteConfig.author.name}`,
                  href: `mailto:${siteConfig.author.email}`,
                },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="bg-bg-card hover:bg-bg-elevated transition-colors p-5 flex items-center justify-between gap-3 group"
                >
                  <span className="text-text-primary font-medium">
                    {l.label}
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-text-muted btn-icon-arrow group-hover:text-accent transition-colors"
                    strokeWidth={2}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
