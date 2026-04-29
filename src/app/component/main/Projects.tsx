"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  // Use centralized projects data, fall back gracefully
  const items: Project[] = projects?.length
    ? projects
    : [];

  return (
    <section id="work" className="relative py-28 lg:py-36 border-t border-border">
      <div className="max-w-container mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="eyebrow">
              <span className="dot" /> 03 · Selected work
            </div>
            <h2 className="display-h2 mt-5 text-balance">
              Things I&apos;ve{" "}
              <span className="display-italic text-text-secondary">shipped.</span>
            </h2>
            <p className="mt-5 lead">
              A snapshot of recent client work and personal builds. Most of my
              client work is under NDA. Happy to share details on a call.
            </p>
          </div>

          <Link
            href="/projects"
            className="btn-secondary self-start lg:self-auto"
          >
            View archive
            <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
          </Link>
        </div>

        {/* Project list */}
        <div className="mt-14 space-y-5">
          {items.map((p, i) => (
            <article
              key={p.slug}
              className="card-feature group grid lg:grid-cols-12 gap-6 lg:gap-10 p-6 lg:p-8"
            >
              {/* Image / preview */}
              <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto rounded-md overflow-hidden border border-border bg-bg-elevated">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-bg/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
                  <span>/0{i + 1}</span>
                  <span className="w-1 h-1 rounded-full bg-text-faint" />
                  <span>{p.category === "ai" ? "AI / Agents" : p.category === "fullstack" ? "Full-stack" : "Web"}</span>
                  {p.featured && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-text-faint" />
                      <span className="text-accent">Featured</span>
                    </>
                  )}
                </div>

                <h3 className="mt-4 text-3xl lg:text-4xl font-medium tracking-tight text-text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {p.description}
                </p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.technologies.slice(0, 6).map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto pt-7 flex flex-wrap items-center gap-4">
                  {p.liveUrl && (
                    <Link
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary hover:text-accent transition-colors"
                    >
                      Visit live
                      <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
                    </Link>
                  )}
                  {p.githubUrl && (
                    <Link
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" strokeWidth={1.6} />
                      Source
                    </Link>
                  )}
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors ml-auto"
                  >
                    Case study
                    <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
