import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Github } from "lucide-react";
import {
  projects,
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/data/projects";
import { siteConfig } from "@/lib/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
    keywords: [...project.technologies, siteConfig.name, "project", "case study"],
    alternates: { canonical: `${siteConfig.url}/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteConfig.url}/projects/${project.slug}#work`,
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projects/${project.slug}`,
    image: `${siteConfig.url}${project.image}`,
    author: { "@id": `${siteConfig.url}/#person` },
    creator: { "@id": `${siteConfig.url}/#person` },
    keywords: project.technologies.join(", "),
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/projects/${project.slug}`,
    },
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${siteConfig.url}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <main className="bg-bg text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <section className="relative pt-32 pb-12 lg:pt-40 overflow-hidden bg-noise">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />

        <div className="relative max-w-container mx-auto px-5 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
            All projects
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
              <span className="tag tag-accent">
                {project.category === "ai"
                  ? "AI / Agents"
                  : project.category === "fullstack"
                  ? "Full-stack"
                  : "Web"}
              </span>
              {project.featured && (
                <>
                  <span className="w-1 h-1 rounded-full bg-text-faint" />
                  <span className="text-accent">Featured</span>
                </>
              )}
            </div>

            <h1 className="mt-6 display-h1 text-balance">{project.title}</h1>
            <p className="mt-6 lead">{project.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit live
                  <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="w-4 h-4" strokeWidth={1.6} />
                  Source code
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="border-t border-border">
        <div className="max-w-container mx-auto px-5 lg:px-8 py-12">
          <div className="relative aspect-[16/9] rounded-lg border border-border overflow-hidden bg-bg-elevated">
            <Image
              src={project.image}
              alt={`${project.title} cover image — case study by Hafiz Ali Ahmed`}
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="border-t border-border">
        <div className="max-w-container mx-auto px-5 lg:px-8 py-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="eyebrow">
                <span className="dot" /> Stack
              </div>
              <h2 className="mt-5 display-h3">
                Technologies <span className="display-italic text-text-secondary">used.</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="border-t border-border">
        <div className="max-w-container mx-auto px-5 lg:px-8 py-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="eyebrow">
                <span className="dot" /> Overview
              </div>
              <h2 className="mt-5 display-h3">
                About this <span className="display-italic text-text-secondary">project.</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="prose-blog">
                {project.longDescription.split("\n\n").map((para, i) => (
                  <p key={i}>{para.replace(/^- /gm, "• ")}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More projects */}
      <section className="border-t border-border">
        <div className="max-w-container mx-auto px-5 lg:px-8 py-16">
          <div className="flex items-end justify-between">
            <div className="eyebrow">
              <span className="dot" /> More work
            </div>
            <Link href="/projects" className="btn-ghost text-sm">
              All projects
              <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
            </Link>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="card-feature group block p-7"
                >
                  <div className="text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
                    {p.category === "ai" ? "AI / Agents" : p.category === "fullstack" ? "Full-stack" : "Web"}
                  </div>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight text-text-primary group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-text-secondary leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-text-primary">
                    Open project
                    <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
