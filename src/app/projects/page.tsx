import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Projects · Selected work by ${siteConfig.name}`,
  description: `Selected projects and case studies by ${siteConfig.name} — Co-founder & CEO of Safock. AI agents, AI-native cloud architecture, automation systems, and full-stack platforms.`,
  keywords: [
    'AI agency projects',
    'Safock case studies',
    'AI agent projects',
    'Hafiz Ali Ahmed portfolio',
    'AI-native cloud projects',
  ],
  alternates: { canonical: `${siteConfig.url}/projects` },
  openGraph: {
    title: `Projects · ${siteConfig.name}`,
    description: `Selected projects and case studies by ${siteConfig.name} — Co-founder & CEO of Safock.`,
    url: `${siteConfig.url}/projects`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects · ${siteConfig.name}`,
    description: `Selected projects and case studies by ${siteConfig.name}.`,
    creator: siteConfig.social.twitter,
  },
};

const SECTIONS: { label: string; category: "fullstack" | "ai" | "web" }[] = [
  { label: "Full-stack & AI products", category: "fullstack" },
  { label: "AI / Agents", category: "ai" },
  { label: "Web", category: "web" },
];

export default function ProjectsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteConfig.url}/projects`,
      },
    ],
  };
  return (
    <main className="bg-bg text-text-primary">
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
                <span className="dot" /> Archive
              </div>
              <h1 className="display-h1 mt-5 text-balance">
                All{" "}
                <span className="display-italic text-accent">work.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg text-text-secondary leading-relaxed">
                Selected projects across AI agents, cloud architecture, and
                full-stack platforms. Most client engagements remain private.
                Ping me on a call to dive into the case studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {SECTIONS.map(({ label, category }) => {
        const items = projects.filter((p) => p.category === category);
        if (!items.length) return null;
        return (
          <section key={category} className="border-t border-border">
            <div className="max-w-container mx-auto px-5 lg:px-8 py-16">
              <div className="flex items-end justify-between">
                <div className="eyebrow">
                  <span className="dot" /> {label}
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
                  {items.length} projects
                </span>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="card-feature group block p-0 overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={`${p.title} project cover — ${p.description.slice(0, 100)}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
                        <span>{p.category === "ai" ? "AI / Agents" : p.category === "fullstack" ? "Full-stack" : "Web"}</span>
                        {p.featured && <span className="text-accent">Featured</span>}
                      </div>
                      <h3 className="mt-3 text-xl font-medium tracking-tight text-text-primary group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {p.technologies.slice(0, 4).map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-text-primary">
                        Open project
                        <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
