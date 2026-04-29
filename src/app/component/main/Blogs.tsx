"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/data/blog";

export default function Blogs() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="writing" className="relative py-28 lg:py-36 border-t border-border">
      <div className="max-w-container mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="eyebrow">
              <span className="dot" /> 05 · Writing
            </div>
            <h2 className="display-h2 mt-5 text-balance">
              Field notes from the{" "}
              <span className="display-italic text-text-secondary">trenches.</span>
            </h2>
            <p className="mt-5 lead">
              Essays on AI, cloud architecture, automation, and what I&apos;m
              learning building an agency. Practical, not theoretical.
            </p>
          </div>
          <Link href="/blog" className="btn-secondary self-start lg:self-auto">
            All posts
            <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
          </Link>
        </div>

        {/* Post list */}
        <div className="mt-14 divide-y divide-border border-y border-border">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group grid lg:grid-cols-12 gap-4 lg:gap-8 py-7 hover:bg-bg-card transition-colors px-2 lg:px-3 -mx-2 lg:-mx-3"
            >
              <div className="lg:col-span-2 flex lg:flex-col lg:gap-2 items-center lg:items-start gap-3">
                <span className="font-mono text-xs text-text-muted">
                  /0{i + 1}
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
                  Read post
                  <ArrowUpRight
                    className="w-4 h-4 btn-icon-arrow"
                    strokeWidth={2}
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
