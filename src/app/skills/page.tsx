import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { skills, getSkillsByCategory } from "@/data/skills";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Skills & Stack | ${siteConfig.name}`,
  description: `Technical stack of ${siteConfig.name}: agentic AI, AI-native cloud architecture, full-stack engineering, and modern web platforms.`,
  alternates: { canonical: `${siteConfig.url}/skills` },
  openGraph: {
    title: `Skills & Stack | ${siteConfig.name}`,
    description: `Technical stack of ${siteConfig.name}: AI, full-stack, and cloud expertise.`,
    url: `${siteConfig.url}/skills`,
  },
};

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="card-feature group block p-6"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative flex-shrink-0 rounded-md bg-bg-elevated border border-border p-2">
          <Image
            src={skill.icon}
            alt={skill.name}
            fill
            className="object-contain p-1.5"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium tracking-tight text-text-primary group-hover:text-accent transition-colors">
            {skill.name}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-sm text-text-secondary leading-relaxed line-clamp-2">
        {skill.description}
      </p>
      <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
        Learn more
        <ArrowUpRight className="w-3.5 h-3.5 btn-icon-arrow" strokeWidth={2} />
      </div>
    </Link>
  );
}

const SECTIONS: {
  label: string;
  category: "ai" | "fullstack" | "frontend" | "backend" | "tools";
}[] = [
  { label: "AI & Machine Learning", category: "ai" },
  { label: "Full Stack", category: "fullstack" },
  { label: "Frontend", category: "frontend" },
  { label: "Backend", category: "backend" },
  { label: "Tools & DevOps", category: "tools" },
];

export default function SkillsPage() {
  return (
    <main className="bg-bg text-text-primary">
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
                <span className="dot" /> Stack
              </div>
              <h1 className="display-h1 mt-5 text-balance">
                Skills &{" "}
                <span className="display-italic text-accent">technologies.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg text-text-secondary leading-relaxed">
                A working stack, chosen because it ships well and scales without
                drama. Tap any skill for context and the projects I&apos;ve used it on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {SECTIONS.map(({ label, category }) => {
        const items = getSkillsByCategory(category);
        if (!items.length) return null;
        return (
          <section key={category} className="border-t border-border">
            <div className="max-w-container mx-auto px-5 lg:px-8 py-16">
              <div className="flex items-end justify-between">
                <div className="eyebrow">
                  <span className="dot" /> {label}
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
                  {items.length} skills
                </span>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((skill) => (
                  <SkillCard key={skill.slug} skill={skill} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
