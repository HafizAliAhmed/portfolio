import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { getAllPosts } from "@/data/blog";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog · Notes on AI, cloud & founder mechanics",
  description:
    "Essays by Hafiz Ali Ahmed (Co-founder & CEO of Safock) on agentic AI, AI-native cloud architecture, AI automations, founder mechanics, and what works inside production systems.",
  keywords: [
    "AI agency blog",
    "agentic AI essays",
    "AI automations",
    "AI-native cloud architecture",
    "founder mechanics",
    "Safock blog",
    "Hafiz Ali Ahmed blog",
  ],
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: `Blog · Notes on AI, cloud & founder mechanics`,
    description: `Essays from ${siteConfig.author.name} — Co-founder & CEO of Safock.`,
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

const ALL_CATEGORIES = ["All", "AI", "Cloud", "Founder", "Strategy", "Education"];

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/blog`,
    name: `${siteConfig.name} · Writing`,
    url: `${siteConfig.url}/blog`,
    description:
      "Essays on agentic AI, AI-native cloud architecture, AI automations, and founder mechanics.",
    author: { "@id": `${siteConfig.url}/#person` },
    publisher: { "@id": `${siteConfig.url}/#person` },
    inLanguage: "en-US",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      url: `${siteConfig.url}/blog/${p.slug}`,
      datePublished: p.date,
      author: { "@id": `${siteConfig.url}/#person` },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
    ],
  };

  return (
    <main className="bg-bg text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-noise">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />

        <div className="relative max-w-container mx-auto px-5 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
            Back home
          </Link>

          <div className="mt-10 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow">
                <span className="dot" /> Writing
              </div>
              <h1 className="display-h1 mt-5 text-balance">
                Notes from the{" "}
                <span className="display-italic text-accent">trenches.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg text-text-secondary leading-relaxed">
                Practical essays on agentic AI, cloud architecture,
                automation, and what I&apos;m learning running an AI agency.
                No SEO fluff. Written for builders.
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-12 flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((c) => (
              <span
                key={c}
                className={`tag ${c === "All" ? "tag-accent" : ""}`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="border-t border-border">
          <div className="max-w-container mx-auto px-5 lg:px-8 py-16">
            <div className="eyebrow">
              <span className="dot" /> Featured
            </div>
            <Link
              href={`/blog/${featured.slug}`}
              className="card-feature group mt-6 grid lg:grid-cols-12 gap-8 lg:gap-12 p-7 lg:p-10"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
                  <span className="tag tag-accent">{featured.category}</span>
                  <span>
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-text-faint" />
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="mt-5 text-3xl lg:text-5xl font-medium tracking-tight text-text-primary group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-5 text-lg text-text-secondary leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-7 inline-flex items-center gap-1.5 text-text-primary">
                  Read essay
                  <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
                </div>
              </div>
              <div className="lg:col-span-5 hidden lg:flex items-center">
                <div className="w-full aspect-[4/3] rounded-md border border-border bg-bg-elevated overflow-hidden relative bg-grid bg-grid-fade">
                  <div className="absolute inset-0 bg-gradient-to-tr from-bg/40 via-transparent to-accent/10" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
                      Essay
                    </div>
                    <div className="mt-2 text-2xl font-medium text-text-primary line-clamp-2">
                      {featured.title}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All posts list */}
      <section className="border-t border-border">
        <div className="max-w-container mx-auto px-5 lg:px-8 py-16">
          <div className="flex items-end justify-between">
            <div className="eyebrow">
              <span className="dot" /> All posts
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
              {posts.length} essays
            </span>
          </div>

          <div className="mt-8 divide-y divide-border border-y border-border">
            {rest.map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group grid lg:grid-cols-12 gap-4 lg:gap-8 py-7 hover:bg-bg-card transition-colors px-2 lg:px-3 -mx-2 lg:-mx-3"
              >
                <div className="lg:col-span-2 flex lg:flex-col lg:gap-2 items-center lg:items-start gap-3">
                  <span className="font-mono text-xs text-text-muted">
                    /0{i + 2}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
                    {new Date(p.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2">
                    <span className="tag tag-accent">{p.category}</span>
                    <span className="text-xs text-text-muted">
                      {p.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl lg:text-3xl font-medium tracking-tight text-text-primary group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-text-secondary leading-relaxed line-clamp-2">
                    {p.excerpt}
                  </p>
                </div>
                <div className="lg:col-span-3 flex lg:items-center lg:justify-end">
                  <span className="inline-flex items-center gap-1.5 text-sm text-text-primary">
                    Read
                    <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
